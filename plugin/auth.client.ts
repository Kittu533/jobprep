import { useAuth } from "~/composables/use-auth"
import { useAuthStore } from "~/stores/auth"

/**
 * Client-side auth initialization plugin
 */
export default defineNuxtPlugin(() => {
    const authStore = useAuthStore()

    // Initialize auth from localStorage on client mount
    authStore.initializeAuth()

    // Setup token refresh if user is logged in
    if (authStore.isLoggedIn) {
        const { setupTokenRefresh } = useAuth()
        setupTokenRefresh()
    }
})