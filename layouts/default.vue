<template>
    <div class="min-h-screen bg-white font-sans overflow-x-hidden">
        <nav ref="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
            :class="scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'">
            <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <NuxtLink to="/" class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg">
                            <img class="rounded-2xl" src="/logo-jobprep.jpg" alt="Logo" />
                        </div>
                        <span class="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">JobPrep</span>
                    </NuxtLink>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink to="/resume-analyser" class="nav-link" exact-active-class="nav-link-active">Resume
                        Analyser</NuxtLink>
                    <NuxtLink to="/generate-cv" class="nav-link" exact-active-class="nav-link-active">Generate CV
                    </NuxtLink>
                    <NuxtLink to="/interview" class="nav-link" exact-active-class="nav-link-active">Interview</NuxtLink>
                    <NuxtLink to="/get-jobs" class="nav-link" exact-active-class="nav-link-active">Get Jobs</NuxtLink>
                </div>

                <div class="flex items-center space-x-4">
                    <div class="hidden md:flex">
                        <template v-if="isLoggedIn">
                            <button @click="logout"
                                class="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white
                px-5 py-2 rounded-xl text-md font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
                                Logout
                            </button>
                        </template>
                        <template v-else>
                            <NuxtLink to="/auth/signin"
                                class="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white
                px-5 py-2 rounded-xl text-md font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
                                Sign In
                            </NuxtLink>
                        </template>
                    </div>

                    <div class="md:hidden">
                        <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
                            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Transition enter-active-class="transition ease-out duration-300"
                enter-from-class="transform opacity-0 -translate-y-4"
                enter-to-class="transform opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="transform opacity-100 translate-y-0"
                leave-to-class="transform opacity-0 -translate-y-4">
                <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
                    <div class="flex flex-col items-center space-y-4">
                        <NuxtLink @click="closeMenu" to="/resume-analyser" class="nav-link"
                            exact-active-class="nav-link-active">
                            Resume Analyser</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/generate-cv" class="nav-link"
                            exact-active-class="nav-link-active">
                            Generate CV</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/interview" class="nav-link"
                            exact-active-class="nav-link-active">Interview
                        </NuxtLink>
                        <NuxtLink @click="closeMenu" to="/get-jobs" class="nav-link"
                            exact-active-class="nav-link-active">Get Jobs
                        </NuxtLink>

                        <div class="mt-4 pt-4 border-t border-gray-200 w-full px-6">
                            <template v-if="isLoggedIn">
                                <button @click="logoutAndCloseMenu"
                                    class="w-full text-center group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white
                    px-5 py-2 rounded-xl text-md font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3">
                                    Logout
                                </button>
                            </template>
                            <template v-else>
                                <NuxtLink @click="closeMenu" to="/auth/signin"
                                    class="w-full text-center group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white
                    px-5 py-2 rounded-xl text-md font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3">
                                    Sign In
                                </NuxtLink>
                            </template>
                        </div>
                    </div>
                </div>
            </Transition>
        </nav>

        <div :class="scrolled ? 'h-[68px]' : 'h-[84px]'"></div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'

const navbar = ref<HTMLElement | null>(null)
const scrolled = ref(false)
const isMenuOpen = ref(false) // [BARU] State untuk mengontrol menu mobile

const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    const authStore = useAuthStore()
    authStore.initializeAuth()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

const logout = async () => {
authStore.clearAuth()
    await navigateTo('/auth/signin')
}

// [BARU] Fungsi untuk toggle menu mobile
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// [BARU] Fungsi untuk menutup menu (dipanggil saat link di-klik)
const closeMenu = () => {
    isMenuOpen.value = false
}

// [BARU] Fungsi logout sekaligus menutup menu
const logoutAndCloseMenu = async () => {
    closeMenu()
    await logout()
}
</script>yy

<style>
.font-sans {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* ACTIVE NAVLINK STYLE & ANIMATION */
.nav-link {
    position: relative;
    color: #64748b;
    /* text-gray-600 */
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-weight: 500;
    transition: color 0.25s;
    text-decoration: none;
}

.nav-link:hover {
    color: #2563eb;
    /* text-blue-600 */
}

.nav-link-active {
    color: #2563eb !important;
    /* text-blue-600 */
    font-weight: 700;
    /* font-bold */
}

.nav-link::after,
.nav-link-active::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: #2563eb;
    /* blue-600 */
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.35s cubic-bezier(.4, 0, .2, 1);
}

.nav-link-active::after {
    transform: scaleX(1);
}

/* Custom scrollbar & other style (optional, as per your original code) */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

html {
    scroll-behavior: smooth;
}
</style>
