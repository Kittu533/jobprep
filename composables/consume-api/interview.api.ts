import type { InterviewAnswer } from '~/types/interview'

/**
 * Interview API endpoints
 */
export class InterviewApi {
    /**
     * Get base URL from runtime config
     */
    private static getBaseUrl(): string {
        const config = useRuntimeConfig()
        return config.public.apiBaseUrl || 'https://job-prep-p00v.onrender.com/API/v1'
    }

    /**
     * Start interview session - no need for session_id since API uses token directly
     */
    static async startSession(position: string = 'General'): Promise<{ token: string }> {
        try {
            // Just return the token from localStorage
            const token = localStorage.getItem('access_token') || localStorage.getItem('token')
            if (!token) {
                throw new Error('Access token not found in localStorage')
            }
            return { token }
        } catch (error) {
            console.error('Error starting session:', error)
            throw error
        }
    }


    /**
     * Send answer to AI interviewer
     * POST /interview/answer/{access_token}
     */
    static async sendAnswer(
        answer: InterviewAnswer,
        accessToken?: string
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const token = accessToken || localStorage.getItem('access_token') || localStorage.getItem('token')
            if (!token) {
                throw new Error('Access token not found')
            }

            const payload = {
                data: answer.answer_text,
                tipe_input: "text"
            }

            // Menggunakan usePost dengan endpoint yang sudah include base URL
            const response = await usePost<string>(`/interview/answer/${token}`, payload)

            return {
                success: true,
                message: response
            }

        } catch (error) {
            console.error('Error sending answer:', error)
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error occurred'
            }
        }
    }


    /**
     * Create SSE stream connection
     * GET /interview/stream/{access_token}?posisi=position
     * Note: EventSource doesn't support Authorization headers, so we'll skip this method
     */
    static createInterviewStream(
        position: string = 'General',
        accessToken?: string
    ): EventSource | null {
        try {
            const token = accessToken || localStorage.getItem('access_token') || localStorage.getItem('token')
            if (!token) {
                throw new Error('Access token not found')
            }

            // Use hardcoded base URL since this is client-side - EventSource can work with token in URL
            const baseUrl = 'https://job-prep-p00v.onrender.com/API/v1'
            const url = `${baseUrl}/interview/stream/${token}?posisi=${encodeURIComponent(position)}`

            console.log('Creating EventSource with URL:', url)
            return new EventSource(url)

        } catch (error) {
            console.error('Error creating interview stream:', error)
            return null
        }
    }

    /**
     * Create authenticated stream using fetch with Authorization header
     * GET /interview/stream/{access_token}?posisi=position
     */
    static async createAuthenticatedStream(
        position: string = 'General',
        accessToken?: string
    ): Promise<ReadableStream<Uint8Array> | null> {
        try {
            const token = accessToken || localStorage.getItem('access_token') || localStorage.getItem('token')
            if (!token) {
                throw new Error('Access token not found')
            }

            // Use hardcoded base URL since this is client-side
            const baseUrl = 'https://job-prep-p00v.onrender.com/API/v1'
            const url = `${baseUrl}/interview/stream/${token}?posisi=${encodeURIComponent(position)}`

            console.log('Creating fetch stream with URL:', url)

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`)
            }

            return response.body

        } catch (error) {
            console.error('Error creating authenticated stream:', error)
            throw error
        }
    }


    /**
     * Process SSE stream manually
     */
    /**
 * Process SSE stream manually with enhanced error handling
 */
    static async processStream(
        stream: ReadableStream<Uint8Array>,
        onMessage: (data: any) => void,
        onError: (error: Error) => void,
        onComplete: () => void
    ): Promise<void> {
        let reader: ReadableStreamDefaultReader<Uint8Array> | null = null

        try {
            reader = stream.getReader()
            const decoder = new TextDecoder()
            let buffer = ''

            console.log('Starting interview stream processing...')

            while (true) {
                const { done, value } = await reader.read()

                if (done) {
                    console.log('Interview stream completed')
                    onComplete()
                    break
                }

                // Decode chunk and add to buffer
                const chunk = decoder.decode(value, { stream: true })
                buffer += chunk

                console.log('Received chunk:', chunk)

                // Process complete lines ending with \n
                const lines = buffer.split('\n')

                // Keep the last incomplete line in buffer
                buffer = lines.pop() || ''

                for (const line of lines) {
                    const trimmedLine = line.trim()
                    if (trimmedLine === '') continue

                    console.log('Processing line:', trimmedLine)

                    // Handle SSE format
                    if (trimmedLine.startsWith('data: ')) {
                        const dataContent = trimmedLine.slice(6).trim()
                        console.log('SSE data content:', dataContent)

                        // Check for completion signal
                        if (dataContent === '[DONE]' || dataContent.includes('interview completed')) {
                            console.log('Interview completion signal received')
                            onComplete()
                            return
                        }

                        try {
                            // Try to parse as JSON
                            const parsedData = JSON.parse(dataContent)
                            console.log('Parsed SSE data:', parsedData)

                            // Handle different message types
                            if (parsedData.type === 'question') {
                                onMessage({
                                    type: 'question',
                                    text: parsedData.question || parsedData.message || parsedData.text,
                                    questionNumber: parsedData.question_number || parsedData.questionNumber
                                })
                            } else if (parsedData.type === 'complete' || parsedData.message) {
                                // Handle completion with summary
                                if (parsedData.message && parsedData.message.answers_summary) {
                                    onMessage({
                                        type: 'complete',
                                        summary: parsedData.message
                                    })
                                    onComplete()
                                    return
                                } else {
                                    onMessage(parsedData)
                                }
                            } else {
                                onMessage(parsedData)
                            }

                        } catch (parseError) {
                            // If not JSON, treat as plain question text
                            console.log('Non-JSON data, treating as question:', dataContent)
                            onMessage({
                                type: 'question',
                                text: dataContent
                            })
                        }
                    } else if (trimmedLine.startsWith('event: ')) {
                        const eventType = trimmedLine.slice(7).trim()
                        console.log('SSE event type:', eventType)

                        if (eventType === 'close' || eventType === 'complete') {
                            onComplete()
                            return
                        }
                    } else if (trimmedLine.startsWith(': ')) {
                        // Handle comments/heartbeat
                        console.log('SSE heartbeat/comment received')
                    } else {
                        // Handle any other format that might be a direct question
                        console.log('Direct message received:', trimmedLine)
                        try {
                            const parsedData = JSON.parse(trimmedLine)
                            onMessage(parsedData)
                        } catch (e) {
                            // Treat as plain text question
                            onMessage({
                                type: 'question',
                                text: trimmedLine
                            })
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Interview stream processing error:', error)
            onError(error instanceof Error ? error : new Error('Stream processing failed'))
        } finally {
            // Clean up the reader
            if (reader) {
                try {
                    reader.releaseLock()
                } catch (error) {
                    console.warn('Error releasing reader lock:', error)
                }
            }
        }
    }



    /**
     * Utility method to get current access token
     */
    static getCurrentToken(accessToken?: string): string {
        const token = accessToken || localStorage.getItem('access_token') || localStorage.getItem('token')
        if (!token) {
            throw new Error('Access token not found')
        }
        return token
    }
}