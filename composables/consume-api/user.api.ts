import type {
    UserProfile,
    EditProfileRequest,
    ApiResponse
} from '~/types'

/**
 * User Profile API endpoints
 */
export class UserApi {
    /**
     * Get user profile
     * GET /get_profile
     */
    static async getProfile(): Promise<ApiResponse<UserProfile>> {
        return useGet<ApiResponse<UserProfile>>('/get_profile')
    }

    /**
     * Edit user profile
     * POST /edit_profile
     */
    static async editProfile(data: EditProfileRequest): Promise<ApiResponse<void>> {
        return usePost<ApiResponse<void>>('/edit_profile', data)
    }

    /**
     * Edit profile picture
     * POST /edit_profile_picture
     */
    static async editProfilePicture(file: File): Promise<ApiResponse<void>> {
        const formData = new FormData()
        formData.append('file', file)

        return useUpload<ApiResponse<void>>('/edit_profile_picture', formData)
    }
}