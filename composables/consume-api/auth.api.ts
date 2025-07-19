import { useAuthStore } from '~/stores/auth'
import type {
    LoginRequest,
    RegisterRequest,
    RefreshTokenRequest,
    AuthResponse,
    TokenResponse
} from '~/types'

/**
 * Authentication API endpoints
 */
export class AuthApi {
    /**
     * User login
     * POST /login
     */
    static async login(credentials: LoginRequest): Promise<AuthResponse> {
        return usePost<AuthResponse>('/login', credentials, { skipAuth: true })
    }

    /**
     * User registration
     * POST /register
     */
    static async register(data: RegisterRequest): Promise<AuthResponse> {
        return usePost<AuthResponse>('/register', data, { skipAuth: true })
    }

    /**
     * Refresh access token
     * POST /refresh-token
     */
    static async refreshToken(data: RefreshTokenRequest): Promise<TokenResponse> {
        return usePost<TokenResponse>('/refresh-token', data, { skipAuth: true })
    }

    /**
     * Logout user (client-side only - clear tokens)
     */
    static logout(): void {
        const authStore = useAuthStore()
        authStore.clearAuth()

        // Redirect to login or home page
        if (import.meta.client) {
            navigateTo('/login')
        }
    }
}