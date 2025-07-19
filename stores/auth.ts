import { defineStore } from 'pinia'
import type { UserProfile } from '~/types'

interface AuthState {
    token: string | null
    refreshToken: string | null
    user: UserProfile | null
    isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: null,
        refreshToken: null,
        user: null,
        isAuthenticated: false
    }),

    getters: {
        isLoggedIn: (state) => state.isAuthenticated && !!state.token,
        currentUser: (state) => state.user
    },

    actions: {
        setAuth(token: string, refreshToken: string, user?: UserProfile) {
            this.token = token
            this.refreshToken = refreshToken
            this.user = user || null
            this.isAuthenticated = true

            // Store in localStorage for persistence
            if (import.meta.client) {
                localStorage.setItem('token', token)
                localStorage.setItem('refresh_token', refreshToken)
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user))
                }
            }
        },

        clearAuth() {
            this.token = null
            this.refreshToken = null
            this.user = null
            this.isAuthenticated = false

            // Clear from localStorage
            if (import.meta.client) {
                localStorage.removeItem('token')
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('user')
            }
        },

        updateUser(user: UserProfile) {
            this.user = user

            // Update in localStorage
            if (import.meta.client) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        },

        initializeAuth() {
            // Initialize from localStorage on client
            if (import.meta.client) {
                const token = localStorage.getItem('token')
                const refreshToken = localStorage.getItem('refresh_token')
                const userStr = localStorage.getItem('user')

                if (token && refreshToken) {
                    this.token = token
                    this.refreshToken = refreshToken
                    this.isAuthenticated = true

                    if (userStr) {
                        try {
                            this.user = JSON.parse(userStr)
                        } catch (error) {
                            console.error('Error parsing user data from localStorage:', error)
                        }
                    }
                }
            }
        }
    }
})