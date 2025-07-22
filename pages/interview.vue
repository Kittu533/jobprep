<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <!-- Header -->
        <header ref="headerRef"
            class="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                </path>
                            </svg>
                        </div>
                        <h1
                            class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            AI Interview Simulator
                        </h1>
                    </div>

                    <!-- Progress Indicator -->
                    <div v-if="sessionStarted" class="flex items-center gap-4">
                        <div class="text-sm text-slate-600 hidden sm:block">
                            Question <span class="font-bold text-slate-800">{{ currentQuestion }}</span> / {{
                                totalQuestions }}
                        </div>
                        <div class="w-24 sm:w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
                                :style="{ width: `${progress}%` }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <!-- Session Setup -->
            <div v-if="!sessionStarted" ref="setupRef" class="text-center space-y-8">
                <div class="space-y-4">
                    <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">Ready for Your Interview?</h2>
                    <p class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                        Practice your interview skills with an AI interviewer. Get real-time feedback and improve your answers.
                    </p>
                </div>

                <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 max-w-md mx-auto">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-semibold text-slate-700 mb-3">Interview Position</label>
                            <input type="text" v-model="selectedPosition"
                                placeholder="Example: Software Engineer, UI/UX Designer, Product Manager"
                                class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                :class="{ 'border-red-300 focus:ring-red-500': showValidationError }" />
                            <div class="mt-2 text-xs text-slate-500">
                                <p class="mb-1">Example positions you can enter:</p>
                                <p>Frontend Developer, Data Analyst, Marketing Manager, HR Specialist, etc.</p>
                            </div>
                            <div v-if="showValidationError" class="mt-2 text-sm text-red-600">
                                Please enter the interview position you want to apply for
                            </div>
                        </div>

                        <button @click="handleStartInterview" :disabled="isLoading"
                            class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg">
                            <span v-if="!isLoading" class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Start Interview
                            </span>
                            <span v-else class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Memulai...
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Interview Chat -->
            <div v-if="sessionStarted" class="space-y-6">
                <!-- Chat Messages -->
                <div ref="messagesRef" class="space-y-6 mb-8 max-h-[60vh] overflow-y-auto pr-2">
                    <div v-for="message in messages" :key="message.id" class="message-item opacity-100"
                        :class="message.type === 'user' ? 'flex-row-reverse' : ''">
                        <div class="flex gap-4" :class="message.type === 'user' ? 'flex-row-reverse' : ''">
                            <!-- Avatar -->
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" :class="message.type === 'user'
                                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500'
                                    : 'bg-gradient-to-br from-blue-500 to-indigo-600'">
                                    <svg v-if="message.type === 'user'" class="w-6 h-6 text-white" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                        </path>
                                    </svg>
                                    <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <!-- Message Content -->
                            <div class="flex-1 max-w-3xl">
                                <div class="mb-2 flex items-center gap-2">
                                    <span class="text-sm font-semibold text-slate-700">
                                        {{ message.type === 'user' ? 'Anda' : 'AI Interviewer' }}
                                    </span>
                                    <span v-if="message.score"
                                        class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        Skor: {{ message.score }}/10
                                    </span>
                                </div>

                                <div class="rounded-2xl p-4 shadow-sm border" :class="message.type === 'user'
                                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 rounded-tr-sm'
                                    : 'bg-white border-slate-200 rounded-tl-sm'">
                                    <p class="text-slate-800 leading-relaxed">{{ message.text }}</p>

                                    <!-- Feedback -->
                                    <div v-if="message.feedback"
                                        class="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <div class="text-sm font-medium text-yellow-800 mb-1 flex items-center gap-1">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                            Feedback AI:
                                        </div>
                                        <div class="text-sm text-yellow-700">{{ message.feedback }}</div>
                                    </div>

                                    <!-- Audio Player -->
                                    <AudioPlayer v-if="message.type === 'ai' && message.audioUrl"
                                        :audio-url="message.audioUrl" :message-id="message.id" class="mt-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Typing Indicator -->
                    <TypingIndicator v-if="isAiTyping" />
                </div>

                <!-- Input Area -->
                <div v-if="!isCompleted"
                    class="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-6">
                    <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-4">
                        <div class="flex gap-4 items-end">
                            <div class="flex-1">
                                <textarea v-model="jawaban" @input="handleInput" @keydown="handleKeyDown"
                                    :disabled="isLoading || isAiTyping || isCompleted"
                                    placeholder="Ketik jawaban Anda di sini... (Ctrl+Enter untuk mengirim)"
                                    class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                                    rows="3" ref="textareaRef" />
                            </div>
                            <button @click="kirimJawaban" :disabled="!bisaKirim"
                                class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg">
                                <svg v-if="!isLoading" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                                <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-2 text-xs text-slate-500 text-center">
                            Question {{ currentQuestion }} of {{ totalQuestions }} • Press Ctrl+Enter to send
                        </div>
                    </div>
                </div>

                <!-- Interview Summary -->
                <InterviewSummary v-if="isCompleted && summary" :summary="summary" @restart="handleRestart" />
            </div>
        </main>

        <!-- Error Modal -->
        <div v-if="errorMessage" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 max-w-md mx-4">
                <h3 class="text-lg font-semibold text-red-600 mb-2">Error</h3>
                <p class="text-gray-700 mb-4">{{ errorMessage }}</p>
                <button @click="errorMessage = null"
                    class="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Tutup
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useInterviewStore } from '~/stores/interview'
import { InterviewApi } from '~/composables/consume-api/interview.api'
import type { InterviewAnswer } from '~/types/interview'
import { storeToRefs } from 'pinia'

// Store
const store = useInterviewStore()

// Simplified token getter - directly from localStorage
const getToken = (): string => {
    const token = localStorage.getItem('access_token') || localStorage.getItem('token')
    if (!token) {
        throw new Error('Token akses tidak ditemukan. Silakan login terlebih dahulu.')
    }
    return token
}

// Destructure store state
const {
    sessionStarted,
    messages,
    isLoading,
    isAiTyping,
    isCompleted,
    summary,
    currentQuestion,
    totalQuestions,
    progress
} = storeToRefs(store)

const {
    startSession,
    addMessage,
    nextQuestion,
    completeInterview,
    resetSession,
    updateMessage
} = store

// Local reactive state
const selectedPosition = ref('')
const showValidationError = ref(false)
const jawaban = ref('')
const textareaRef = ref<HTMLTextAreaElement>()
const headerRef = ref<HTMLElement>()
const setupRef = ref<HTMLElement>()
const messagesRef = ref<HTMLElement>()
const errorMessage = ref<string | null>(null)

// SSE connection
let eventSource: EventSource | null = null
let streamReader: ReadableStreamDefaultReader<Uint8Array> | null = null

// Position-based initial questions (updated for free text input)
const getInitialQuestion = (position: string): string => {
    const positionLower = position.toLowerCase()

    const questionMap: Record<string, string> = {
        'software engineer': 'Selamat datang! Mari kita mulai wawancara untuk posisi Software Engineer. Bisa Anda ceritakan sedikit tentang diri Anda dan pengalaman programming yang pernah Anda miliki?',
        'frontend developer': 'Halo! Mari kita mulai wawancara untuk posisi Frontend Developer. Bisa Anda perkenalkan diri dan ceritakan pengalaman Anda dalam mengembangkan user interface?',
        'backend developer': 'Selamat datang! Mari kita mulai wawancara untuk posisi Backend Developer. Bisa Anda ceritakan tentang diri Anda dan pengalaman dalam mengembangkan sistem backend?',
        'fullstack developer': 'Halo! Mari kita mulai wawancara untuk posisi Fullstack Developer. Bisa Anda perkenalkan diri dan ceritakan pengalaman Anda dalam pengembangan web end-to-end?',
        'data analyst': 'Selamat datang! Mari kita mulai wawancara untuk posisi Data Analyst. Bisa Anda ceritakan tentang diri Anda dan pengalaman dalam analisis data?',
        'data scientist': 'Halo! Mari kita mulai wawancara untuk posisi Data Scientist. Bisa Anda perkenalkan diri dan ceritakan pengalaman Anda dalam data science?',
        'ui/ux designer': 'Selamat datang! Mari kita mulai wawancara untuk posisi UI/UX Designer. Bisa Anda ceritakan tentang diri Anda dan pendekatan design yang Anda gunakan?',
        'product manager': 'Halo! Mari kita mulai wawancara untuk posisi Product Manager. Bisa Anda perkenalkan diri dan ceritakan pengalaman Anda dalam product management?',
        'marketing manager': 'Selamat datang! Mari kita mulai wawancara untuk posisi Marketing Manager. Bisa Anda ceritakan tentang diri Anda dan strategi marketing yang pernah Anda terapkan?',
        'hr specialist': 'Halo! Mari kita mulai wawancara untuk posisi HR Specialist. Bisa Anda perkenalkan diri dan ceritakan pengalaman Anda di bidang human resources?',
        'finance': 'Selamat datang! Mari kita mulai wawancara untuk posisi Finance. Bisa Anda ceritakan tentang diri Anda dan pengalaman dalam bidang keuangan?',
        'business analyst': 'Halo! Mari kita mulai wawancara untuk posisi Business Analyst. Bisa Anda perkenalkan diri dan ceritakan pengalaman analisis bisnis yang pernah Anda lakukan?',
        'project manager': 'Selamat datang! Mari kita mulai wawancara untuk posisi Project Manager. Bisa Anda ceritakan tentang diri Anda dan pengalaman dalam mengelola proyek?',
        'quality assurance': 'Halo! Mari kita mulai wawancara untuk posisi Quality Assurance. Bisa Anda perkenalkan diri dan ceritakan pengalaman testing yang pernah Anda lakukan?',
        'devops engineer': 'Selamat datang! Mari kita mulai wawancara untuk posisi DevOps Engineer. Bisa Anda ceritakan tentang diri Anda dan pengalaman dalam DevOps practices?'
    }

    // Check for matches with more flexible matching
    for (const [key, question] of Object.entries(questionMap)) {
        if (positionLower.includes(key) || key.includes(positionLower)) {
            return question
        }
    }

    // Default question if no specific match found
    return `Selamat datang! Mari kita mulai wawancara untuk posisi ${position}. Bisa Anda ceritakan sedikit tentang diri Anda dan mengapa Anda tertarik dengan posisi ini?`
}

// Computed properties
const bisaKirim = computed(() => {
    return jawaban.value.trim().length > 0 &&
        !isLoading.value &&
        !isAiTyping.value &&
        !isCompleted.value
})

// Error handling
const handleError = (error: any) => {
    console.error('Interview error:', error)
    errorMessage.value = error.message || 'Terjadi kesalahan tidak diketahui'
    isLoading.value = false
    isAiTyping.value = false
}

// Input validation
const validatePosition = () => {
    const position = selectedPosition.value.trim()
    if (!position || position.length < 2) {
        showValidationError.value = true
        return false
    }
    showValidationError.value = false
    return true
}

// Enhanced SSE message handling for interview flow
const handleSSEMessage = (data: any) => {
    try {
        console.log('Processing interview message:', data)

        if (data.type === 'question') {
            // Handle new question from AI
            const questionText = data.text || data.question || data.message
            console.log('Received question:', questionText)

            isAiTyping.value = false
            isLoading.value = false // Tambahkan ini
            addMessage({
                type: 'ai',
                text: questionText,
                timestamp: new Date().toISOString(),
                questionNumber: data.questionNumber || currentQuestion.value
            })

            nextTick(() => {
                textareaRef.value?.focus()
            })
        } else if (data.type === 'complete') {
            // Handle interview completion with summary
            console.log('Interview completed with summary:', data.summary)

            isAiTyping.value = false

            // Add completion message
            addMessage({
                type: 'ai',
                text: 'Wawancara telah selesai! Berikut adalah ringkasan hasil wawancara Anda.',
                timestamp: new Date().toISOString()
            })

            // Complete interview with summary
            completeInterview({
                uid: data.summary.uid,
                session_id: data.summary.session_id,
                position: data.summary.position,
                answers_summary: data.summary.answers_summary,
                overall_score: data.summary.overall_score,
                suggestions: data.summary.suggestions
            })

            closeSSEConnection()

        } else if (data.type === 'feedback') {
            // Handle answer feedback
            console.log('Received feedback:', data)
            const lastUserMessage = messages.value.findLast(m => m.type === 'user')
            if (lastUserMessage) {
                updateMessage(lastUserMessage.id, {
                    score: data.score,
                    feedback: data.feedback
                })
            }

        } else if (data.type === 'error') {
            console.log('Received error:', data.message)
            handleError(new Error(data.message))
            closeSSEConnection()

        } else {
            // Handle any other message format
            const messageText = data.message || data.text || data.question
            if (messageText) {
                console.log('Received general message:', messageText)
                isAiTyping.value = false
                addMessage({
                    type: 'ai',
                    text: messageText,
                    timestamp: new Date().toISOString()
                })

                nextTick(() => {
                    textareaRef.value?.focus()
                })
            } else {
                console.log('Unknown message format:', data)
                isAiTyping.value = false
            }
        }

    } catch (error) {
        console.error('Error processing interview message:', error)
        isAiTyping.value = false
        isLoading.value = false // Tambahkan ini
    }
}

const closeSSEConnection = () => {
    if (eventSource) {
        eventSource.close()
        eventSource = null
    }

    if (streamReader) {
        try {
            streamReader.releaseLock()
        } catch (error) {
            console.warn('Error releasing stream reader lock:', error)
        }
        streamReader = null
    }
}

// Methods
const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement
    jawaban.value = target.value
}

const handleStartInterview = async () => {
    try {
        // Validate position input
        if (!validatePosition()) {
            return
        }

        isLoading.value = true
        errorMessage.value = null

        // Get access token
        let accessToken: string
        try {
            accessToken = getToken()
        } catch (authError) {
            console.error('Token error:', authError)
            throw new Error('Gagal mendapatkan token akses. Silakan login terlebih dahulu.')
        }

        // Clean and format the position input
        const cleanPosition = selectedPosition.value.trim()

        // Start session via API (simplified - just returns token)
        const sessionResponse = await InterviewApi.startSession(cleanPosition)

        // Start session in store - use token as session identifier
        startSession(cleanPosition, sessionResponse.token)

        // Add initial hardcoded question based on position
        const initialQuestion = getInitialQuestion(cleanPosition)

        // Show AI typing briefly before showing the initial question
        isAiTyping.value = true

        // Simulate AI thinking time
        setTimeout(() => {
            isAiTyping.value = false
            isLoading.value = false // <-- tambahkan ini agar input aktif
            addMessage({
                type: 'ai',
                text: initialQuestion,
                timestamp: new Date().toISOString(),
                questionNumber: 1
            })

            // Focus on textarea after initial question appears
            nextTick(() => {
                textareaRef.value?.focus()
            })
        }, 1500) // 1.5 second delay to simulate AI thinking

        // Setup the SSE stream for subsequent interactions
        await setupFetchStream(accessToken, cleanPosition)

    } catch (error) {
        handleError(error)
    } finally {
        isLoading.value = false
    }
}

const setupFetchStream = async (accessToken: string, position: string) => {
    try {
        console.log('Setting up fetch stream for position:', position)

        const stream = await InterviewApi.createAuthenticatedStream(
            position,
            accessToken
        )

        if (stream) {
            console.log('Stream created successfully, starting to process...')

            await InterviewApi.processStream(
                stream,
                (data) => {
                    console.log('Received SSE data from fetch:', data)
                    handleSSEMessage(data)
                },
                (error) => {
                    console.error('Stream processing error:', error)
                    handleError(error)
                    isAiTyping.value = false
                },
                () => {
                    console.log('Stream completed')
                    isAiTyping.value = false
                }
            )
        } else {
            console.warn('Stream creation returned null, but initial question is already shown')
        }
    } catch (error) {
        console.error('Fetch stream setup failed:', error)
        console.warn('Stream setup failed but interview can continue with initial question')
    }
}

const kirimJawaban = async () => {
    if (!bisaKirim.value) return

    // Store current answer for potential restoration
    const currentAnswer = jawaban.value

    try {
        isLoading.value = true
        errorMessage.value = null

        // Get access token
        let accessToken: string
        try {
            accessToken = getToken()
        } catch (authError) {
            console.error('Token error:', authError)
            throw new Error('Gagal mendapatkan token akses. Silakan login terlebih dahulu.')
        }

        // Add user message immediately
        addMessage({
            type: 'user',
            text: currentAnswer,
            timestamp: new Date().toISOString()
        })

        // Prepare answer payload (pastikan property sesuai API)
        const answerPayload: InterviewAnswer = {
            answer: currentAnswer // <--- fix di sini
        }

        jawaban.value = '' // Clear input immediately
        isAiTyping.value = true

        // Send answer to backend
        const response = await InterviewApi.sendAnswer(
            answerPayload,
            accessToken
        )

        if (response.success) {
            nextQuestion()
        } else {
            throw new Error(response.message || 'Gagal mengirim jawaban')
        }

    } catch (error) {
        handleError(error)
        if (!jawaban.value.trim()) {
            jawaban.value = currentAnswer
        }
        isAiTyping.value = false
    } finally {
        isLoading.value = false
    }
}

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        kirimJawaban()
    }
}

const handleRestart = () => {
    closeSSEConnection()
    resetSession()
    selectedPosition.value = ''
    showValidationError.value = false
    jawaban.value = ''
    errorMessage.value = null
}

// Watch for position input changes to clear validation error
watch(selectedPosition, () => {
    if (showValidationError.value && selectedPosition.value.trim().length >= 2) {
        showValidationError.value = false
    }
})

// Watch for new messages and scroll to bottom
watch(messages, () => {
    nextTick(() => {
        if (messagesRef.value) {
            messagesRef.value.scrollTop = messagesRef.value.scrollHeight
        }
    })
}, { deep: true })

// Lifecycle
onMounted(() => {
    nextTick(() => {
        if (textareaRef.value) {
            textareaRef.value.focus()
        }
    })
})

onUnmounted(() => {
    closeSSEConnection()
    resetSession()
})

// Handle page visibility change to manage connections
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden, connections may be paused')
    } else {
        console.log('Page visible again')
    }
})
</script>

<style scoped>
/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

/* Focus styles */
textarea:focus,
input:focus {
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    border-color: #3b82f6 !important;
}

/* Error state styles */
input.border-red-300:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    border-color: #ef4444 !important;
}

/* Ensure textarea and input are interactive */
textarea,
input {
    resize: none !important;
    background-color: white !important;
    color: #1e293b !important;
}

textarea:disabled,
input:disabled {
    background-color: #f8fafc !important;
    color: #64748b !important;
    cursor: not-allowed !important;
}

/* Gradient text effect */
.bg-clip-text {
    background-clip: text;
    -webkit-background-clip: text;
}

/* Message bubble custom styles */
.rounded-tr-sm {
    border-top-right-radius: 0.375rem;
}

.rounded-tl-sm {
    border-top-left-radius: 0.375rem;
}

/* Smooth transitions */
* {
    transition: all 0.2s ease;
}

/* Button hover effects */
button:hover:not(:disabled) {
    transform: translateY(-1px);
}

button:active:not(:disabled) {
    transform: translateY(0);
}

/* Loading spinner animation */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

/* Responsive improvements */
@media (max-width: 768px) {
    .max-w-4xl {
        max-width: 100%;
    }

    .flex-row-reverse {
        flex-direction: column;
    }

    .text-4xl {
        font-size: 2rem;
    }

    .text-2xl {
        font-size: 1.5rem;
    }
}
</style>