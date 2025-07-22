<template>
    <div class="min-h-screen bg-[var(--background-color)] relative">
        <!-- Mobile menu overlay -->
        <div v-if="mobileMenuOpen" class="fixed inset-0 bg-transparent bg-opacity-50 z-40 lg:hidden"
            @click="mobileMenuOpen = false">
        </div>

        <!-- Mobile header -->
        <header class="lg:hidden bg-white shadow-sm border-b px-4 py-3 sticky top-0 z-30">
            <div class="flex items-center justify-between">
                <h1 class="text-xl font-bold text-gray-900">Lowongan Kerja</h1>
                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'">
                        </path>
                    </svg>
                </button>
            </div>

            <!-- Mobile quick search -->
            <div class="mt-3 flex gap-2">
                <input v-model="mobileSearch" type="text" placeholder="Cari pekerjaan..."
                    class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none">
                <button @click="quickSearch"
                    class="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-hover-color)] transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                </button>
            </div>
        </header>

        <div class="flex">
            <!-- Sidebar filter -->
            <aside :class="[
                'fixed lg:static inset-y-0 left-0 z-20 w-80 bg-white shadow-xl lg:shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto',
                mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            ]">
                <div class="p-6 lg:p-8 h-full">
                    <!-- Mobile close button -->
                    <div class="flex items-center justify-between mb-6 lg:hidden">
                        <h2 class="text-lg font-semibold">Filter Pencarian</h2>
                        <button @click="mobileMenuOpen = false"
                            class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <form class="space-y-6" @submit.prevent="fetchJobs">
                        <div>
                            <label class="block text-sm font-semibold mb-2 text-gray-700">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6">
                                    </path>
                                </svg>
                                What Job?
                            </label>
                            <div class="relative">
                                <input v-model="filters.job_tipe" type="text" placeholder="Enter job keyword"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all" />
                                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold mb-2 text-gray-700">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                                    </path>
                                </svg>
                               Where?
                            </label>
                            <div class="relative">
                                <input v-model="filters.provinsi" type="text" placeholder="Enter city or province"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all" />
                                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full py-3 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-hover-color)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                            :disabled="loading">
                            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            {{ loading ? 'Searching...' : 'Find Jobs' }}
                        </button>

                        <button type="button" @click="clearFilters"
                            class="w-full py-2 text-sm text-gray-600 hover:text-[var(--primary-color)] transition-colors">
                            Reset Filter
                        </button>
                    </form>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1 lg:ml-0 min-h-screen">
                <div class="p-4 sm:p-6 lg:p-12">
                    <!-- Desktop Header -->
                    <div class="hidden lg:block mb-8">
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Job Vacancies</h1>
                        <p class="text-gray-600">Find your dream job</p>
                    </div>

                    <!-- Enhanced Loading state -->
                    <div v-if="loading" class="flex flex-col items-center justify-center py-16 sm:py-24">
                        <div class="relative mb-6">
                            <div
                                class="w-16 h-16 border-4 border-gray-200 border-t-[var(--primary-color)] rounded-full animate-spin">
                            </div>
                            <div
                                class="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[var(--primary-color)] rounded-full animate-pulse">
                            </div>
                        </div>
                        <p class="text-lg font-medium text-[var(--primary-color)] animate-pulse mb-2">
                            Searching for job vacancies for you...
                        </p>
                        <div class="flex space-x-1">
                            <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                                style="animation-delay: 0ms"></div>
                            <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                                style="animation-delay: 150ms"></div>
                            <div class="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
                                style="animation-delay: 300ms"></div>
                        </div>
                    </div>

                    <!-- Error state -->
                    <div v-if="error" class="text-center py-12 px-4">
                        <div class="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
                            <div
                                class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
                                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </div>
                            <p class="mb-4 font-medium text-red-800">{{ error }}</p>
                            <button @click="fetchJobs"
                                class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
                                Try Again
                            </button>
                        </div>
                    </div>

                    <!-- No results -->
                    <div v-if="!loading && !error && jobs.length === 0 && hasSearched" class="text-center py-12 px-4">
                        <div class="max-w-md mx-auto">
                            <div
                                class="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                    </path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2 text-gray-900">No results found</h3>
                            <p class="text-gray-600 mb-4">Try changing your keywords or search location.</p>
                            <button @click="clearFilters"
                                class="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-hover-color)] transition-colors">
                                Reset Filter
                            </button>
                        </div>
                    </div>

                    <!-- Jobs results -->
                    <div v-if="!loading && !error && jobs.length > 0" class="space-y-6">
                        <!-- Results header with sorting -->
                        <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <p class="text-gray-700 flex items-center">
                                    <svg class="w-5 h-5 mr-2 text-[var(--primary-color)]" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6">
                                        </path>
                                    </svg>
                                    <span class="text-sm sm:text-base">
                                        Found <span class="font-bold text-[var(--primary-color)]">{{ jobs.length
                                            }}</span> jobs
                                        <span v-if="filters.job_tipe" class="hidden sm:inline">for "<span
                                                class="font-medium">{{ filters.job_tipe }}</span>"</span>
                                        <span v-if="filters.provinsi" class="hidden sm:inline">in <span
                                                class="font-medium">{{ filters.provinsi }}</span></span>
                                    </span>
                                </p>

                                <div class="flex items-center gap-3">
                                    <label class="text-sm text-gray-600">Sort by:</label>
                                    <select v-model="sortBy" @change="sortJobs"
                                        class="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                                        <option value="newest">Newest</option>
                                        <option value="relevant">Most Relevant</option>
                                        <option value="company">Company Name</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Jobs Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                            <article v-for="job in jobs" :key="job.job_id || job.id"
                                class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between group border border-gray-100 hover:border-[var(--primary-color)] hover:-translate-y-1">

                                <!-- Job Header -->
                                <div class="mb-4">
                                    <div class="flex items-start justify-between mb-4">
                                        <div
                                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-color)] to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                                            <span class="text-lg font-bold text-white">
                                                {{ getCompanyInitials(job.company_name || job.company || 'U') }}
                                            </span>
                                        </div>

                                        <div class="flex gap-2 ml-3">
                                            <button @click="viewJob(job)"
                                                class="p-2 rounded-lg text-gray-400 hover:text-[var(--primary-color)] hover:bg-blue-50 transition-all"
                                                title="Lihat Detail">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button @click="bookmarkJob(job)" :class="[
                                                'p-2 rounded-lg transition-all',
                                                isBookmarked(job) ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                            ]" title="Simpan">
                                                <svg class="w-5 h-5" :fill="isBookmarked(job) ? 'currentColor' : 'none'"
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Job Info -->
                                    <h3
                                        class="text-lg font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-[var(--primary-color)] transition-colors leading-tight">
                                        {{ job.title || job.job_title || 'Untitled Position' }}
                                    </h3>

                                    <div class="space-y-2 text-sm">
                                        <div class="flex items-center text-gray-600">
                                            <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                                </path>
                                            </svg>
                                            <span class="font-medium truncate">{{ job.company_name || job.company ||
                                                'Unknown Company' }}</span>
                                        </div>

                                        <div v-if="job.location || job.provinsi"
                                            class="flex items-center text-gray-500">
                                            <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                                                </path>
                                            </svg>
                                            <span class="truncate">{{ job.location || job.provinsi }}</span>
                                        </div>
                                    </div>

                                    <!-- Job Tags -->
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span v-if="getJobType(job.title || job.job_title)"
                                            class="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                                            {{ getJobType(job.title || job.job_title) }}
                                        </span>
                                        <span v-if="isRemote(job.location || job.provinsi)"
                                            class="inline-flex items-center px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                            Remote
                                        </span>
                                        <span v-if="job.salary || job.gaji"
                                            class="inline-flex items-center px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                                            {{ job.salary || job.gaji }}
                                        </span>
                                    </div>

                                    <!-- Description Preview -->
                                    <p v-if="job.description"
                                        class="text-sm text-gray-600 line-clamp-2 mt-3 leading-relaxed">
                                        {{ job.description }}
                                    </p>
                                </div>

                                <!-- Action Button -->
                                <div class="pt-4 border-t border-gray-100 space-y-2">
                                    <button @click="showApplyOptions(job)"
                                        class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover-color)] transition-all duration-200 flex items-center justify-center group-hover:shadow-lg">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                        {{ job.apply_options?.length ? `Lihat Platform (${job.apply_options.length})` :
                                            'Lihat Detail' }}
                                    </button>

                                    <div v-if="job.apply_options && job.apply_options.length > 0"
                                        class="flex flex-wrap gap-1">
                                        <span v-for="(option, index) in job.apply_options.slice(0, 3)" :key="index"
                                            class="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                                            {{ getShortPlatformName(option.title) }}
                                        </span>
                                        <span v-if="job.apply_options.length > 3"
                                            class="inline-flex items-center px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-md">
                                            +{{ job.apply_options.length - 3 }}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <!-- Load More Button -->
                        <div v-if="hasMoreJobs" class="text-center pt-8">
                            <button @click="loadMoreJobs" :disabled="loadingMore"
                                class="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors disabled:opacity-50">
                                {{ loadingMore ? 'Memuat...' : 'Muat Lebih Banyak' }}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- Apply Options Modal -->
        <div v-if="showModal"
            class="fixed inset-0 bg-transparent bg-opacity-40 modal-backdrop flex items-center justify-center z-50 p-4"
            @click="closeModal">
            <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <!-- Modal Header -->
                <div class="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-xl">
                    <div class="flex items-center justify-between">
                        <div class="min-w-0 flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Platform Apply</h3>
                            <p class="text-sm text-gray-600 truncate">{{ selectedJob?.title || selectedJob?.job_title }}
                            </p>
                        </div>
                        <button @click="closeModal"
                            class="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Modal Content -->
                <div class="p-6">
                    <div v-if="selectedJob?.apply_options && selectedJob.apply_options.length > 0" class="space-y-3">
                        <div v-for="(option, index) in selectedJob.apply_options" :key="index" class="group">
                            <button @click="openApplyLink(option.link)"
                                class="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[var(--primary-color)] hover:bg-blue-50 transition-all">
                                <div class="flex items-center min-w-0 flex-1">
                                    <div
                                        class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors flex-shrink-0">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="text-left min-w-0 flex-1">
                                        <p class="font-semibold text-gray-900 mb-1">{{ option.title }}</p>
                                        <p class="text-sm text-gray-500 truncate">{{ option.link }}</p>
                                    </div>
                                </div>
                                <div class="ml-4 flex-shrink-0">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-[var(--primary-color)] transition-colors"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- No apply options available -->
                    <div v-else class="text-center py-12">
                        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                </path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-medium text-gray-900 mb-2">Tidak ada platform apply</h4>
                        <p class="text-gray-600">Platform apply untuk lowongan ini belum tersedia.</p>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-xl border-t border-gray-200">
                    <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
                        <button @click="bookmarkJob(selectedJob)"
                            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z">
                                </path>
                            </svg>
                            {{ isBookmarked(selectedJob) ? 'Tersimpan' : 'Simpan Lowongan' }}
                        </button>
                        <button @click="closeModal"
                            class="px-6 py-2 text-sm font-medium text-white bg-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-hover-color)] transition-colors">
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Action Button (Mobile) -->
        <button v-if="!mobileMenuOpen" @click="mobileMenuOpen = true"
            class="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary-color)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-30">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4">
                </path>
            </svg>
        </button>

        <!-- Back to top button -->
        <button v-show="showBackToTop" @click="scrollToTop"
            class="fixed bottom-6 left-6 w-12 h-12 bg-white border border-gray-200 text-gray-600 rounded-full shadow-lg hover:shadow-xl hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200 flex items-center justify-center z-30">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12">
                </path>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
const loadingMore = ref(false)
const error = ref('')
const hasSearched = ref(false)
const hasMoreJobs = ref(false)
const showModal = ref(false)
const selectedJob = ref<Job | null>(null)

// Responsive state
const mobileMenuOpen = ref(false)
const mobileSearch = ref('')
const sortBy = ref('newest')
const showBackToTop = ref(false)
const bookmarkedJobs = ref<string[]>([])

// Filter state
const filters = ref({
    job_tipe: '',
    provinsi: '',
    jobType: '',
    remoteOnly: false
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
        // Ambil pesan yang proper, tanpa menampilkan URL
        if (err.statusCode === 400) {
            error.value = 'Permintaan tidak valid. Cek kata kunci pencarian kamu.'
        } else if (err.statusCode === 404) {
            error.value = 'Data tidak ditemukan. Silakan cek filter pencarian.'
        } else if (err.statusCode === 500) {
            error.value = 'Server sedang bermasalah. Coba lagi nanti.'
        } else if (err.message) {
            // Cek jika error.message mengandung URL, hapus
            const apiUrlPattern = /(http|https):\/\/[^\s"]+/g
            error.value = err.message.replace(apiUrlPattern, '').replace(/["'\[\]]/g, '').trim()
            // Atau tampilkan pesan default jika masih terlalu teknis
            if (!error.value || error.value.length > 120) {
                error.value = 'Gagal mengambil data lowongan. Silakan coba lagi.'
            }
        } else {
            error.value = 'Gagal mengambil data lowongan. Silakan coba lagi.'
        }
        jobs.value = []
    }
    finally {
        loading.value = false
    }
}

// Responsive methods
function quickSearch() {
    filters.value.job_tipe = mobileSearch.value
    fetchJobs()
    mobileMenuOpen.value = false
}

function clearFilters() {
    filters.value = {
        job_tipe: '',
        provinsi: '',
        jobType: '',
        remoteOnly: false
    }
    mobileSearch.value = ''
    hasSearched.value = false
    jobs.value = []
}

function sortJobs() {
    if (!jobs.value.length) return

    const sorted = [...jobs.value]

    switch (sortBy.value) {
        case 'newest':
            // Sort by newest (assuming you have a date field)
            break
        case 'relevant':
            // Sort by relevance
            break
        case 'company':
            sorted.sort((a, b) => {
                const companyA = (a.company_name || a.company || '').toLowerCase()
                const companyB = (b.company_name || b.company || '').toLowerCase()
                return companyA.localeCompare(companyB)
            })
            break
    }

    jobs.value = sorted
}

function loadMoreJobs() {
    loadingMore.value = true
    // Implementation for loading more jobs
    setTimeout(() => {
        loadingMore.value = false
        hasMoreJobs.value = false // Set to false when no more jobs
    }, 1000)
}

function bookmarkJob(job: Job) {
    const jobId = job.job_id || job.id
    if (!jobId) return

    const index = bookmarkedJobs.value.indexOf(jobId)

    if (index > -1) {
        bookmarkedJobs.value.splice(index, 1)
    } else {
        bookmarkedJobs.value.push(jobId)
    }

    saveBookmarkedJobs()
}

function isBookmarked(job: Job): boolean {
    const jobId = job.job_id || job.id
    return jobId ? bookmarkedJobs.value.includes(jobId) : false
}

function loadBookmarkedJobs() {
    try {
        const saved = localStorage.getItem('bookmarked-jobs')
        if (saved) {
            bookmarkedJobs.value = JSON.parse(saved)
        }
    } catch (error) {
        console.error('Error loading bookmarked jobs:', error)
    }
}

function saveBookmarkedJobs() {
    try {
        localStorage.setItem('bookmarked-jobs', JSON.stringify(bookmarkedJobs.value))
    } catch (error) {
        console.error('Error saving bookmarked jobs:', error)
    }
}

function handleScroll() {
    showBackToTop.value = window.scrollY > 300
}

function handleResize() {
    if (window.innerWidth >= 1024) {
        mobileMenuOpen.value = false
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function viewJob(job: Job) {
    selectedJob.value = job
    showModal.value = true
    document.body.style.overflow = 'hidden'
}

function showApplyOptions(job: Job) {
    selectedJob.value = job
    showModal.value = true
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    showModal.value = false
    selectedJob.value = null
    document.body.style.overflow = 'auto'
}

function openApplyLink(link: string) {
    if (link) {
        window.open(link, '_blank', 'noopener,noreferrer')
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

// Initialize on component mount
onMounted(() => {
    // Handle scroll events
    window.addEventListener('scroll', handleScroll)

    // Load bookmarked jobs from localStorage
    loadBookmarkedJobs()

    // Auto-hide mobile menu on larger screens
    window.addEventListener('resize', handleResize)

    console.log('Get Jobs page loaded')
})

// Cleanup on component unmount
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    document.body.style.overflow = 'auto'
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

/* Custom line clamp utilities */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
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

/* Smooth transitions for mobile menu */
@media (max-width: 1023px) {
    aside {
        box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

/* Focus styles for accessibility */
button:focus,
input:focus,
select:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Smooth hover animations */
.group:hover .group-hover\:shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Loading animation improvements */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.job-card-enter {
    animation: fadeIn 0.3s ease-out;
}
</style>