import type {
    CreateResumeRequest,
    ResumeResponse,
    ApiResponse
} from '~/types'

/**
 * Resume API endpoints
 */
export class ResumeApi {
    /**
     * Get user resume
     * GET /resume
     */
    static async getResume(): Promise<ApiResponse<ResumeResponse>> {
        return useGet<ApiResponse<ResumeResponse>>('/resume')
    }

    /**
     * Analyze resume from uploaded file
     * POST /resume_analisis
     */
    static async analyzeResume(file: File): Promise<ApiResponse<ResumeResponse>> {
        const formData = new FormData()
        formData.append('file', file)

        return useUpload<ApiResponse<ResumeResponse>>('/resume_analisis', formData)
    }

    /**
     * Create resume from data
     * POST /create_resume
     */
    static async createResume(data: CreateResumeRequest): Promise<ApiResponse<{
        Filename: string
        PublicURL: string
    }>> {
        return usePost<ApiResponse<{
            Filename: string
            PublicURL: string
        }>>('/create_resume', data)
    }
}