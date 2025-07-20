import type {
    JobRequest,
    JobResponse,
    ApiResponse
} from '~/types'

/**
 * Job API endpoints
 */
export class JobApi {
    private static readonly BASE_URL = 'https://job-prep-p00v.onrender.com'

    /**
     * Get jobs based on criteria
     * GET /API/v1/jobs (pakai query param)
     */
    static async getJobs(criteria: JobRequest): Promise<ApiResponse<JobResponse[]>> {
        try {
            // Validate required parameter
            if (!criteria.job_tipe || !criteria.job_tipe.trim()) {
                throw new Error('Parameter job_tipe wajib diisi')
            }

            // Build query string from criteria object
            const query = Object.entries(criteria)
                .filter(([_, v]) => v && String(v).trim()) // skip empty values
                .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v).trim())}`)
                .join('&')

            console.log('API Request URL:', `${this.BASE_URL}/API/v1/jobs?${query}`)

            // Make the API call
            const response = await $fetch<ApiResponse<JobResponse[]>>(`${this.BASE_URL}/API/v1/jobs?${query}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            return response
        } catch (error) {
            console.error('JobApi.getJobs error:', error)
            
            // Handle different types of errors
            if (error.response) {
                // Server responded with error status
                const status = error.response.status
                const message = error.response._data?.message || 'Server error'
                throw new Error(`Error ${status}: ${message}`)
            } else if (error.message) {
                // Network or other errors
                throw new Error(error.message)
            } else {
                throw new Error('Gagal mengambil data lowongan kerja')
            }
        }
    }

    /**
     * Search jobs by type only
     */
    static async searchJobsByType(jobType: string): Promise<ApiResponse<JobResponse[]>> {
        return this.getJobs({ 
            job_tipe: jobType,
            negara: 'Indonesia' 
        })
    }

    /**
     * Search jobs with location filter
     */
    static async searchJobsWithLocation(
        jobType: string,
        provinsi?: string,
        negara: string = 'Indonesia'
    ): Promise<ApiResponse<JobResponse[]>> {
        const criteria: JobRequest = {
            job_tipe: jobType,
            negara
        }
        
        if (provinsi && provinsi.trim()) {
            criteria.provinsi = provinsi.trim()
        }

        return this.getJobs(criteria)
    }

    /**
     * Search jobs with all filters
     */
    static async searchJobsAdvanced(
        jobType: string,
        options: {
            provinsi?: string
            negara?: string
        } = {}
    ): Promise<ApiResponse<JobResponse[]>> {
        const criteria: JobRequest = {
            job_tipe: jobType,
            negara: options.negara || 'Indonesia'
        }

        if (options.provinsi && options.provinsi.trim()) {
            criteria.provinsi = options.provinsi.trim()
        }

        return this.getJobs(criteria)
    }
}