import type {
    InterviewAnswer,
    InterviewResponse,
    InterviewReport,
    ApiResponse
} from '~/types'

/**
 * Interview API endpoints
 */
export class InterviewApi {
    /**
     * Open interview stream connection (SSE)
     * GET /interview/stream/{session_id}
     */
    static getInterviewStreamUrl(sessionId: string, posisi: string): string {
        const config = useRuntimeConfig()
        const baseUrl = config.public.apiBaseUrl
        return `${baseUrl}/interview/stream/${sessionId}?posisi=${encodeURIComponent(posisi)}`
    }

    /**
     * Create EventSource for interview stream
     * Note: This needs to be handled on client-side with proper authentication
     */
    static createInterviewStream(sessionId: string, posisi: string): EventSource | null {
        if (!import.meta.client) return null

        const token = localStorage.getItem('token')
        if (!token) throw new Error('Authentication required')

        // Note: EventSource doesn't support custom headers for auth
        // You might need to pass token as query parameter or use WebSocket instead
        const url = this.getInterviewStreamUrl(sessionId, posisi)
        const eventSource = new EventSource(`${url}&token=${encodeURIComponent(token)}`)

        return eventSource
    }

    /**
     * Send answer to interview
     * POST /interview/answer/{session_id}
     */
    static async sendAnswer(sessionId: string, answer: InterviewAnswer): Promise<ApiResponse<{
        message: string
    }>> {
        return usePost<ApiResponse<{
            message: string
        }>>(`/interview/answer/${sessionId}`, answer)
    }

    /**
     * Get interview report
     * GET /report_interview
     */
    static async getInterviewReport(): Promise<ApiResponse<InterviewReport>> {
        return useGet<ApiResponse<InterviewReport>>('/report_interview')
    }

    /**
     * WebSocket connection for interview (not recommended according to docs)
     * ws://localhost:8000/API/v1/ws/interview
     */
    static createInterviewWebSocket(params: {
        token: string
        posisi: string
        tipe_input: string
        tipe_output: string
    }): WebSocket | null {
        if (!import.meta.client) return null

        const config = useRuntimeConfig()
        const wsUrl = config.public.apiBaseUrl?.replace('http', 'ws')
        const queryParams = new URLSearchParams({
            token: params.token,
            posisi: params.posisi,
            tipe_input: params.tipe_input,
            tipe_output: params.tipe_output
        })

        return new WebSocket(`${wsUrl}/ws/interview?${queryParams}`)
    }
}