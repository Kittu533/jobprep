<template>
    <div class="flex min-h-screen bg-[var(--background-color)]">
        <!-- Sidebar filter -->
        <aside class="w-[320px] bg-white p-8 shadow-lg flex-shrink-0">
            <form class="space-y-7" @submit.prevent="fetchJobs">
                <div>
                    <label class="block text-base font-semibold mb-1">Pekerjaan apa?</label>
                    <input v-model="filters.job_tipe" type="text" placeholder="Masukkan kata kunci"
                        class="w-full rounded-md border px-3 py-2 focus:border-[var(--primary-color)] outline-none" />
                </div>
                <div>
                    <label class="block text-base font-semibold mb-1">Di mana?</label>
                    <input v-model="filters.provinsi" type="text" placeholder="Masukkan kota atau provinsi"
                        class="w-full rounded-md border px-3 py-2 focus:border-[var(--primary-color)] outline-none" />
                </div>
                <button type="submit"
                    class="mt-3 w-full py-2 rounded-md bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-hover-color)] transition-colors"
                    :disabled="loading">
                    {{ loading ? 'Mencari...' : 'Cari' }}
                </button>
            </form>
        </aside>

        <!-- Job List -->
        <main class="flex-1 p-12">
            <h1 class="mb-8 text-3xl font-bold">Lowongan Kerja</h1>

            <!-- Enhanced Loading state with animation -->
            <div v-if="loading" class="flex flex-col items-center justify-center py-16">
                <div class="relative">
                    <div
                        class="w-16 h-16 border-4 border-gray-200 border-t-[var(--primary-color)] rounded-full animate-spin">
                    </div>
                    <div
                        class="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[var(--primary-color)] rounded-full animate-pulse">
                    </div>
                </div>
                <p class="mt-4 text-lg font-medium text-[var(--primary-color)] animate-pulse">
                    Mencari lowongan kerja untuk Anda...
                </p>
                <div class="flex space-x-1 mt-2">
                    <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                        style="animation-delay: 0ms"></div>
                    <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                        style="animation-delay: 150ms"></div>
                    <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                        style="animation-delay: 300ms"></div>
                </div>
            </div>

            <!-- Error state -->
            <div v-if="error" class="text-center text-red-500 py-12">
                <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                    <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <p class="mb-4 font-medium">{{ error }}</p>
                    <button @click="fetchJobs"
                        class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                        Coba Lagi
                    </button>
                </div>
            </div>

            <!-- No results -->
            <div v-if="!loading && !error && jobs.length === 0 && hasSearched" class="text-center text-gray-400 py-12">
                <div class="max-w-md mx-auto">
                    <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <p class="mb-2 text-lg font-medium">Tidak ditemukan hasil</p>
                    <p class="text-sm">Coba ubah kata kunci atau lokasi pencarian.</p>
                </div>
            </div>

            <!-- Jobs grid -->
            <div v-if="!loading && !error && jobs.length > 0" class="space-y-6">
                <!-- Results count -->
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <p class="text-gray-600 flex items-center">
                        <svg class="w-5 h-5 mr-2 text-[var(--primary-color)]" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6">
                            </path>
                        </svg>
                        Ditemukan <span class="font-semibold text-[var(--primary-color)]">{{ jobs.length }}</span>
                        lowongan kerja
                        <span v-if="filters.job_tipe">untuk "<span class="font-medium">{{ filters.job_tipe
                        }}</span>"</span>
                        <span v-if="filters.provinsi">di <span class="font-medium">{{ filters.provinsi }}</span></span>
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    <div v-for="job in jobs" :key="job.job_id || job.id"
                        class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group border border-gray-100 hover:border-[var(--primary-color)]">
                        <div>
                            <!-- Header with company logo and actions -->
                            <div class="flex items-start justify-between mb-5">
                                <div
                                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-blue-600 flex items-center justify-center shadow-md">
                                    <span class="text-lg font-bold text-white">
                                        {{ getCompanyInitials(job.company_name || job.company || 'Unknown') }}
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <button @click="viewJob(job)"
                                        class="p-2 rounded-lg text-gray-400 hover:text-[var(--primary-color)] hover:bg-blue-50 transition-all"
                                        title="Lihat Detail">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button @click="bookmarkJob(job)"
                                        class="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                                        title="Simpan">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Job title and company info -->
                            <h3
                                class="text-lg font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-[var(--primary-color)] transition-colors">
                                {{ job.title || job.job_title || 'Untitled Position' }}
                            </h3>
                            <div class="flex items-center text-gray-600 text-sm mb-3">
                                <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                                <span class="font-medium">{{ job.company_name || job.company || 'Unknown Company'
                                    }}</span>
                            </div>

                            <!-- Location -->
                            <div v-if="job.location || job.provinsi"
                                class="flex items-center text-gray-500 text-sm mb-4">
                                <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>{{ job.location || job.provinsi || 'Location not specified' }}</span>
                            </div>

                            <!-- Job tags -->
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-if="getJobType(job.title || job.job_title)"
                                    class="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                        <path
                                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                                        </path>
                                    </svg>
                                    {{ getJobType(job.title || job.job_title) }}
                                </span>
                                <span v-if="isRemote(job.location || job.provinsi)"
                                    class="inline-flex items-center px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Remote
                                </span>
                                <span v-if="job.salary || job.gaji"
                                    class="inline-flex items-center px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z">
                                        </path>
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    {{ job.salary || job.gaji }}
                                </span>
                            </div>

                            <!-- Apply Options -->
                            <div v-if="job.apply_options && job.apply_options.length > 0" class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                        </path>
                                    </svg>
                                    Platform Tersedia:
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    <button v-for="(option, index) in job.apply_options.slice(0, 3)" :key="index"
                                        @click="openApplyLink(option.link)"
                                        class="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200"
                                        :title="`Apply via ${option.title}`">
                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                        {{ getShortPlatformName(option.title) }}
                                    </button>
                                    <span v-if="job.apply_options.length > 3"
                                        class="inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-md"
                                        :title="`+${job.apply_options.length - 3} platform lainnya`">
                                        +{{ job.apply_options.length - 3 }}
                                    </span>
                                </div>
                            </div>

                            <!-- Job Description Preview -->
                            <div v-if="job.description" class="mb-4">
                                <p class="text-sm text-gray-600 line-clamp-3">{{ job.description }}</p>
                            </div>
                        </div>

                        <!-- Action buttons -->
                        <div class="space-y-2 pt-4 border-t border-gray-100">
                            <button @click="showApplyOptions(job)"
                                class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover-color)] transition-all duration-200 flex items-center justify-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                                {{ job.apply_options?.length ? `Lihat Semua Platform (${job.apply_options.length})` :
                                'Lihat Detail' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Apply Options Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            @click="closeModal">
            <div class="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto" @click.stop>
                <div class="p-6 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 mb-1">Platform Apply</h3>
                            <p class="text-sm text-gray-600">{{ selectedJob?.title || selectedJob?.job_title }}</p>
                        </div>
                        <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="p-6">
                    <div v-if="selectedJob?.apply_options && selectedJob.apply_options.length > 0" class="space-y-3">
                        <button v-for="(option, index) in selectedJob.apply_options" :key="index"
                            @click="openApplyLink(option.link)"
                            class="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[var(--primary-color)] hover:bg-blue-50 transition-all group">
                            <div class="flex items-center">
                                <div
                                    class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                        </path>
                                    </svg>
                                </div>
                                <div class="text-left">
                                    <p class="font-medium text-gray-900">{{ option.title }}</p>
                                    <p class="text-sm text-gray-500 truncate max-w-xs">{{ option.link }}</p>
                                </div>
                            </div>
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-[var(--primary-color)] transition-colors"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div v-else class="text-center py-8 text-gray-500">
                        <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                            </path>
                        </svg>
                        <p>Tidak ada platform apply tersedia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useApi } from '~/composables/use-fetch-api'

// Define job interface
interface Job {
    job_id?: string
    id?: string
    title?: string
    job_title?: string
    company_name?: string
    company?: string
    location?: string
    provinsi?: string
    description?: string
    salary?: string
    gaji?: string
    apply_options?: Array<{
        title: string
        link: string
    }>
    [key: string]: any // Allow additional properties
}

// Reactive state
const jobs = ref<Job[]>([])
const loading = ref(false)
const error = ref('')
const hasSearched = ref(false)
const showModal = ref(false)
const selectedJob = ref<Job | null>(null)

// Filter state
const filters = ref({
    job_tipe: '',
    provinsi: ''
})

// Fetch jobs function using the useApi composable
async function fetchJobs() {
    // Validate required field
    if (!filters.value.job_tipe.trim()) {
        error.value = 'Mohon masukkan kata kunci pekerjaan'
        return
    }

    loading.value = true
    error.value = ''
    hasSearched.value = true

    try {
        // Build query params - only include non-empty values
        const params: Record<string, string> = {}

        if (filters.value.job_tipe?.trim()) {
            params.job_tipe = filters.value.job_tipe.trim()
        }

        if (filters.value.provinsi?.trim()) {
            params.provinsi = filters.value.provinsi.trim()
        }

        // Always add negara as Indonesia as default
        params.negara = 'Indonesia'

        console.log('Searching with params:', params)

        // Call API using the correct endpoint - change from /jobs/search to /jobs
        const response = await useApi('/jobs', {
            method: 'GET',
            query: params
        })

        // Handle response based on API structure
        if (response && (response.Data || response.data)) {
            jobs.value = response.Data || response.data || []
        } else if (Array.isArray(response)) {
            jobs.value = response
        } else {
            jobs.value = []
        }

        console.log(`Found ${jobs.value.length} jobs`)

    } catch (err: any) {
        console.error('Error fetching jobs:', err)

        // Better error handling
        if (err.statusCode === 404) {
            error.value = 'Endpoint tidak ditemukan. Periksa URL API.'
        } else if (err.statusCode === 500) {
            error.value = 'Server sedang mengalami masalah. Coba lagi nanti.'
        } else if (err.message) {
            error.value = err.message
        } else {
            error.value = 'Gagal mengambil data lowongan. Silakan coba lagi.'
        }

        jobs.value = []
    } finally {
        loading.value = false
    }
}

// Helper functions
function getCompanyInitials(companyName: string): string {
    if (!companyName) return 'N/A'
    return companyName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('')
}

function getJobType(title: string): string {
    if (!title) return ''
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('senior') || lowerTitle.includes('lead') || lowerTitle.includes('manager')) {
        return 'Senior'
    }
    if (lowerTitle.includes('junior') || lowerTitle.includes('entry')) {
        return 'Junior'
    }
    if (lowerTitle.includes('intern') || lowerTitle.includes('magang')) {
        return 'Internship'
    }
    if (lowerTitle.includes('freelance') || lowerTitle.includes('contract')) {
        return 'Freelance'
    }
    if (lowerTitle.includes('remote') || lowerTitle.includes('work from home')) {
        return 'Remote'
    }
    if (lowerTitle.includes('full time') || lowerTitle.includes('fulltime')) {
        return 'Full Time'
    }
    if (lowerTitle.includes('part time') || lowerTitle.includes('parttime')) {
        return 'Part Time'
    }
    return 'Regular'
}

function isRemote(location: string): boolean {
    if (!location) return false
    const lowerLocation = location.toLowerCase()
    return lowerLocation.includes('remote') ||
        lowerLocation.includes('work from home') ||
        lowerLocation.includes('wfh') ||
        lowerLocation.includes('anywhere')
}

function getShortPlatformName(title: string): string {
    if (!title) return 'Apply'
    if (title.toLowerCase().includes('linkedin')) return 'LinkedIn'
    if (title.toLowerCase().includes('jobstreet')) return 'JobStreet'
    if (title.toLowerCase().includes('indeed')) return 'Indeed'
    if (title.toLowerCase().includes('glints')) return 'Glints'
    if (title.toLowerCase().includes('kalibrr')) return 'Kalibrr'
    if (title.toLowerCase().includes('karir')) return 'Karir'
    return title.length > 10 ? title.substring(0, 10) + '...' : title
}

function viewJob(job: Job) {
    selectedJob.value = job
    showModal.value = true
}

function bookmarkJob(job: Job) {
    // Add bookmark functionality here
    console.log('Bookmarking job:', job.title || job.job_title)
    // You can implement local storage or API call to save bookmarks
}

function showApplyOptions(job: Job) {
    selectedJob.value = job
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    selectedJob.value = null
}

function openApplyLink(link: string) {
    if (link) {
        window.open(link, '_blank', 'noopener,noreferrer')
    }
}

// Initialize on component mount
onMounted(() => {
    // You can add initial data loading here if needed
    console.log('Get Jobs page loaded')
})
</script>

<style type="text/tailwindcss">
:root {
    --primary-color: #19b2e5;
    --primary-hover-color: #148cb4;
    --secondary-color: #f0f3f4;
    --text-primary-color: #111618;
    --text-secondary-color: #637f88;
    --white-color: #ffffff;
    --border-color: #dce3e5;
    --background-color: #f9fafb;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom animations */
@keyframes bounce {

    0%,
    20%,
    53%,
    80%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
        transform: translate3d(0, -8px, 0);
    }

    70% {
        transform: translate3d(0, -4px, 0);
    }

    90% {
        transform: translate3d(0, -2px, 0);
    }
}

.animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Modal backdrop */
.modal-backdrop {
    backdrop-filter: blur(4px);
}
</style>