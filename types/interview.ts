export interface Message {
    id: string
    type: "user" | "ai"
    text: string
    timestamp: string
    score?: number
    feedback?: string
    audioUrl?: string
}

export interface InterviewAnswer {
    id: string
    questionId: string
    answer: string
    score?: number
    feedback?: string
    timestamp: string
    audioUrl?: string
}

export interface InterviewSession {
    id: string
    position: string
    startedAt: string
    completedAt?: string
    currentQuestion: number
    totalQuestions: number
}

export interface InterviewSummary {
    overall_score: number
    suggestions: string[]
    answers_summary: Array<{
        question: string
        answer: string
        score: number
        feedback: string
    }>
}

export interface AudioState {
    [key: string]: {
        isPlaying: boolean
        progress: number
        duration: number
        isLoading: boolean
        element?: HTMLAudioElement
    }
}

export const POSITIONS = [
    "Posisi Umum",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "Finance",
] as const

export type Position = (typeof POSITIONS)[number]
