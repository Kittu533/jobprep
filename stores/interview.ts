import { defineStore } from "pinia"
import { ref, computed } from "vue"
import type { Message, InterviewSession, InterviewSummary, AudioState, Position } from "~/types/interview"
import { readonly } from "vue"

export const useInterviewStore = defineStore("interview", () => {
    // State
    const session = ref<InterviewSession | null>(null)
    const messages = ref<Message[]>([])
    const currentAnswer = ref("")
    const isLoading = ref(false)
    const isAiTyping = ref(false)
    const isCompleted = ref(false)
    const summary = ref<InterviewSummary | null>(null)
    const audioStates = ref<AudioState>({})
    const eventSource = ref<EventSource | null>(null)

    // Computed
    const sessionStarted = computed(() => !!session.value)
    const currentQuestion = computed(() => session.value?.currentQuestion || 0)
    const totalQuestions = computed(() => session.value?.totalQuestions || 5)
    const progress = computed(() => (currentQuestion.value / totalQuestions.value) * 100)
    const canSendAnswer = computed(
        () => currentAnswer.value.trim().length > 0 && !isLoading.value && !isAiTyping.value && !isCompleted.value,
    )

    // Actions - Updated to use token instead of generating session ID
    const startSession = (position: Position, token: string) => {
        session.value = {
            id: token, // Use token as session identifier
            position,
            startedAt: new Date().toISOString(),
            currentQuestion: 1,
            totalQuestions: 5,
        }
        messages.value = []
        isCompleted.value = false
        summary.value = null
    }

    const addMessage = (message: Omit<Message, "id">) => {
        const newMessage: Message = {
            ...message,
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        }
        messages.value.push(newMessage)
        return newMessage.id
    }

    const updateMessage = (id: string, updates: Partial<Message>) => {
        const index = messages.value.findIndex((msg) => msg.id === id)
        if (index !== -1) {
            messages.value[index] = { ...messages.value[index], ...updates }
        }
    }

    const nextQuestion = () => {
        if (session.value && session.value.currentQuestion < session.value.totalQuestions) {
            session.value.currentQuestion++
        }
    }

    const completeInterview = (interviewSummary: InterviewSummary) => {
        isCompleted.value = true
        summary.value = interviewSummary
        if (session.value) {
            session.value.completedAt = new Date().toISOString()
        }
    }

    const setAudioState = (messageId: string, state: Partial<AudioState[string]>) => {
        if (!audioStates.value[messageId]) {
            audioStates.value[messageId] = {
                isPlaying: false,
                progress: 0,
                duration: 0,
                isLoading: false,
            }
        }
        audioStates.value[messageId] = { ...audioStates.value[messageId], ...state }
    }

    const resetSession = () => {
        session.value = null
        messages.value = []
        currentAnswer.value = ""
        isLoading.value = false
        isAiTyping.value = false
        isCompleted.value = false
        summary.value = null
        audioStates.value = {}

        if (eventSource.value) {
            eventSource.value.close()
            eventSource.value = null
        }

        // Stop all audio
        Object.values(audioStates.value).forEach((state) => {
            if (state.element && !state.element.paused) {
                state.element.pause()
            }
        })
    }

    const clearCurrentAnswer = () => {
        currentAnswer.value = ""
    }

    return {
        // State
        session: readonly(session),
        messages: readonly(messages),
        currentAnswer,
        isLoading,
        isAiTyping,
        isCompleted,
        summary: readonly(summary),
        audioStates: readonly(audioStates),
        eventSource,

        // Computed
        sessionStarted,
        currentQuestion,
        totalQuestions,
        progress,
        canSendAnswer,

        // Actions
        startSession,
        addMessage,
        updateMessage,
        nextQuestion,
        completeInterview,
        setAudioState,
        resetSession,
        clearCurrentAnswer,
    }
})