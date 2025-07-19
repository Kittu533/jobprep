import type {
    Article,
    ApiResponse
} from '~/types'

/**
 * Article API endpoints
 */
export class ArticleApi {
    /**
     * Get all articles
     * GET /artikel
     */
    static async getArticles(): Promise<ApiResponse<Article[]>> {
        return useGet<ApiResponse<Article[]>>('/artikel')
    }
}