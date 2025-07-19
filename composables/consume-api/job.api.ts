import type {
    JobRequest,
    JobResponse,
    ApiResponse
} from '~/types'

/**
 * Job API endpoints
 */
export class JobApi {
    /**
     * Get jobs based on criteria
     * POST /jobs
     */
    static async getJobs(criteria: JobRequest): Promise<ApiResponse<JobResponse[]>> {
        return usePost<ApiResponse<JobResponse[]>>('/jobs', criteria)
    }

    /**
     * Search jobs by type only
     */
    static async searchJobsByType(jobType: string): Promise<ApiResponse<JobResponse[]>> {
        return this.getJobs({ job_tipe: jobType })
    }

    /**
     * Search jobs with location filter
     */
    static async searchJobsWithLocation(
        jobType: string,
        provinsi?: string,
        negara?: string
    ): Promise<ApiResponse<JobResponse[]>> {
        return this.getJobs({
            job_tipe: jobType,
            ...(provinsi && { provinsi }),
            ...(negara && { negara })
        })
    }
}