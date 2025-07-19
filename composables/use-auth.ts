import type { LoginRequest, RegisterRequest, RefreshTokenRequest } from '~/types'
import { AuthApi } from '~/composables/consume-api'
import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
    const authStore = useAuthStore()

    const loading = ref(false)
    const error = ref<string | null>(null)

    const login = async (credentials: LoginRequest) => {
        try {
            loading.value = true
            error.value = null

            const response = await AuthApi.login({
                ...credentials,
                role: 'student'
            })
            const { user: userResponse } = response
            // Ambil access_token dari userResponse, BUKAN userResponse.user
            const token = userResponse.access_token
            const refreshToken = userResponse.refresh_token

            // Store auth data
            authStore.setAuth(token, refreshToken)

            // Fetch user profile after login (opsional)
            await fetchUserProfile()

            return response
        } catch (err: any) {
            error.value = err.message || 'Login failed'
            throw err
        } finally {
            loading.value = false
        }
    }

    const register = async (data: RegisterRequest) => {
        try {
            loading.value = true
            error.value = null

            const response = await AuthApi.register(data)
            const { user: userResponse } = response

            // ====== FIX! ======
            const token = userResponse.access_token
            const refreshToken = userResponse.refresh_token

            authStore.setAuth(token, refreshToken)
            return response
        } catch (err: any) {
            error.value = err.message || 'Registration failed'
            throw err
        } finally {
            loading.value = false
        }
    }

    const refreshToken = async () => {
        try {
            if (!authStore.refreshToken) {
                throw new Error('No refresh token available')
            }

            const response = await AuthApi.refreshToken({
                refresh_token: authStore.refreshToken
            })

            authStore.setAuth(response.access_token, authStore.refreshToken, authStore.user)
            return response
        } catch (err: any) {
            authStore.clearAuth()
            await navigateTo('/login')
            throw err
        }
    }

    const logout = async () => {
        try {
            loading.value = true
            AuthApi.logout()
        } finally {
            loading.value = false
        }
    }

    const fetchUserProfile = async () => {
        try {
            const { UserApi } = await import('~/composables/consume-api')
            const response = await UserApi.getProfile()
            if (response.data) {
                authStore.updateUser(response.data)
            }
            return response.data
        } catch (err: any) {
            console.error('Failed to fetch user profile:', err)
            throw err
        }
    }

    // ... (auto-refresh logic tidak berubah)
    // Auto-refresh token before it expires
    const setupTokenRefresh = () => {
        if (!import.meta.client) return

        // Check token every 5 minutes
        const interval = setInterval(async () => {
            if (authStore.isLoggedIn && authStore.refreshToken) {
                try {
                    await refreshToken()
                } catch (error) {
                    console.error('Auto token refresh failed:', error)
                    clearInterval(interval)
                }
            } else {
                clearInterval(interval)
            }
        }, 5 * 60 * 1000) // 5 minutes

        // Cleanup on unmount
        if (getCurrentScope()) {
            onScopeDispose(() => {
                clearInterval(interval)
            })
        }
    }
    return {
        loading: readonly(loading),
        error: readonly(error),
        isLoggedIn: computed(() => authStore.isLoggedIn),
        user: computed(() => authStore.user),

        login,
        register,
        logout,
        refreshToken,
        fetchUserProfile,
        setupTokenRefresh
    }
}
