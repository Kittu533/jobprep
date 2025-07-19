import { z } from 'zod'

// Common Types
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiRequestOptions {
    method?: HttpMethod
    query?: Record<string, unknown>
    body?: BodyInit | Record<string, unknown> | null
    headers?: HeadersInit
    skipAuth?: boolean
}

export interface ApiResponse<T = unknown> {
    message: string
    data?: T
    success?: boolean
    errors?: Record<string, string[]>
}

export interface ApiError {
    statusCode: number
    message: string
    data?: unknown
    url?: string
}

// Auth Schemas
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['student'])
})

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6)
}).refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"]
})

export const RefreshTokenSchema = z.object({
    refresh_token: z.string()
})

// User Schemas
export const UserProfileSchema = z.object({
    student_id: z.string(),
    email: z.string().email(),
    password: z.string(),
    major: z.string(),
    username: z.string(),
    university: z.string(),
    profile_image: z.string().url().optional()
})

export const EditProfileSchema = z.object({
    university: z.string().optional(),
    major: z.string().optional(),
    username: z.string().optional()
})

// Resume Schemas
export const CreateResumeSchema = z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    phone: z.string(),
    email: z.string().email(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    summary: z.string(),
    experiences: z.array(z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        dates: z.string(),
        description_points: z.array(z.string())
    })),
    education: z.array(z.object({
        degree: z.string(),
        university: z.string(),
        location: z.string(),
        dates: z.string(),
        gpa: z.string().optional()
    })),
    skills: z.record(z.array(z.string()))
})

export const ResumeResponseSchema = z.object({
    student_id: z.string(),
    result: z.string(),
    file_url: z.string().url()
})

// Job Schemas
export const JobRequestSchema = z.object({
    job_tipe: z.string(),
    provinsi: z.string().optional(),
    negara: z.string().optional()
})

export const JobResponseSchema = z.object({
    job_id: z.string(),
    title: z.string(),
    company_name: z.string(),
    location: z.string(),
    apply_options: z.array(z.object({
        title: z.string(),
        link: z.string().url()
    }))
})

// Article Schema
export const ArticleSchema = z.object({
    image_url: z.string().url(),
    penulis: z.string(),
    subtitel: z.string(),
    url: z.string().url()
})

// Interview Schemas
export const InterviewAnswerSchema = z.object({
    data: z.string(),
    tipe_input: z.enum(['text'])
})

export const InterviewResponseSchema = z.object({
    type: z.string(),
    text: z.string(),
    url: z.string().url()
})

export const InterviewReportSchema = z.object({
    student_id: z.string(),
    result: z.string()
})

// Type exports
export type LoginRequest = z.infer<typeof LoginSchema>
export type RegisterRequest = z.infer<typeof RegisterSchema>
export type RefreshTokenRequest = z.infer<typeof RefreshTokenSchema>
export type UserProfile = z.infer<typeof UserProfileSchema>
export type EditProfileRequest = z.infer<typeof EditProfileSchema>
export type CreateResumeRequest = z.infer<typeof CreateResumeSchema>
export type ResumeResponse = z.infer<typeof ResumeResponseSchema>
export type JobRequest = z.infer<typeof JobRequestSchema>
export type JobResponse = z.infer<typeof JobResponseSchema>
export type Article = z.infer<typeof ArticleSchema>
export type InterviewAnswer = z.infer<typeof InterviewAnswerSchema>
export type InterviewResponse = z.infer<typeof InterviewResponseSchema>
export type InterviewReport = z.infer<typeof InterviewReportSchema>

// Auth Response Types
export interface AuthResponse {
    message: string
    user: {
        user: string
        token_type: string
        refresh_token: string
    }
}

export interface TokenResponse {
    access_token: string
    token_type: string
}