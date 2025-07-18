<template class="bg-[var(--background-color)] text-[var(--text-color)]">
    <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <header
                class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4 bg-white">
                <div class="flex items-center gap-3 text-slate-800">
                    <div
                        class="w-8 h-8 bg-[var(--primary-color)] text-white flex items-center justify-center rounded-lg">
                        <span class="material-symbols-outlined"> summarize </span>
                    </div>
                    <h2 class="text-slate-900 text-xl font-bold tracking-tighter">JobPrep</h2>
                </div>
                <nav class="hidden md:flex items-center gap-6">
                    <a class="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors"
                        href="#">Dashboard</a>
                    <a class="text-[var(--primary-color)] text-sm font-semibold" href="#">Resume</a>
                    <a class="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors"
                        href="#">Cover Letter</a>
                    <a class="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors"
                        href="#">Portfolio</a>
                    <a class="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors"
                        href="#">Interview</a>
                </nav>
                <div class="flex flex-1 justify-end items-center gap-4">
                    <button
                        class="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                        <span class="material-symbols-outlined"> help </span>
                    </button>
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk07SZl1K-VDJd8s-tuaIK6-jG1v0dkd5Ozu499eXgday_yDSA47v8gm_1dhOmM9tpUliYnwpSe_uecpXjhtagFsE_VNsBEL8vbBvVhvjS4q9Vwv4oXBZTccc5MRPaVpjc_fVlNldftfKScFKKj2gevKKR1G7QkS5ZMBZqKDvZNje-Cnd2346PPf6qFc9gAu6aE9qIHZgGscVDAM9J1G7AiUpMRxOZLtQvZ4awDxcOgJQTX4K9Tk7ojh4U6WWmaz115vApgrU3hq-P");'>
                    </div>
                </div>
            </header>
            <main class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
                <div class="layout-content-container flex flex-col max-w-4xl flex-1 gap-8">
                    <div class="flex flex-col gap-2">
                        <h1 class="text-slate-900 text-4xl font-bold tracking-tighter">Improve Your Resume</h1>
                        <p class="text-[var(--secondary-color)] text-base font-normal">Get instant feedback and see how
                            you stack up against the competition.</p>
                    </div>
                    <div
                        class="flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-[var(--primary-color)] bg-white hover:bg-[var(--primary-color-light)] transition-all duration-300 px-6 py-16 text-center">
                        <div class="flex flex-col items-center gap-4">
                            <div
                                class="w-16 h-16 rounded-full bg-[var(--primary-color-light)] flex items-center justify-center text-[var(--primary-color)]">
                                <span class="material-symbols-outlined text-4xl"> cloud_upload </span>
                            </div>
                            <p class="text-slate-800 text-xl font-semibold">Drag &amp; drop your resume to get started
                            </p>
                            <p class="text-slate-500 text-sm">Supported formats: PDF, DOC, DOCX. Max file size: 5MB.</p>
                        </div>
                        <button
                            class="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold hover:bg-blue-600 transition-colors shadow-sm">
                            <span class="material-symbols-outlined"> upload_file </span>
                            <span>Upload Resume</span>
                        </button>
                    </div>
                    <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-6">
                        <div class="flex items-center justify-between">
                            <h2 class="text-slate-900 text-2xl font-bold tracking-tight">Your Results</h2>
                            <div class="flex items-center gap-2 text-[var(--warning-color)] font-semibold">
                                <span class="material-symbols-outlined"> warning </span>
                                <span>Needs Improvement</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="relative w-24 h-24">
                                <svg class="w-full h-full" viewBox="0 0 36 36">
                                    <path class="text-slate-200"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currentColor" stroke-width="3"></path>
                                    <path class="text-[var(--warning-color)]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currentColor" stroke-dasharray="70, 100"
                                        stroke-linecap="round" stroke-width="3"></path>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-2xl font-bold text-slate-800">70%</span>
                                </div>
                            </div>
                            <p class="text-[var(--secondary-color)] text-base flex-1">Your resume score is below the
                                recommended 75%. We've identified some areas for improvement to help you stand out.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                                <div class="score-badge bg-[var(--warning-color)]">70</div>
                                <div>
                                    <p class="font-semibold text-slate-800">Formatting</p>
                                    <p class="text-sm text-slate-500">Inconsistent</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                                <div class="score-badge bg-[var(--success-color)]">80</div>
                                <div>
                                    <p class="font-semibold text-slate-800">Content</p>
                                    <p class="text-sm text-slate-500">Looks good</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                                <div class="score-badge bg-[var(--danger-color)]">60</div>
                                <div>
                                    <p class="font-semibold text-slate-800">Keywords</p>
                                    <p class="text-sm text-slate-500">Missing relevant terms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h2 class="text-slate-900 text-2xl font-bold tracking-tight">Recommended Templates</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div class="flex flex-col gap-3 group">
                                <div
                                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-md transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                                    <img alt="Resume Template 1" class="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbA_GsEig9MsFs7288084Uv-lDysPHSGKiDT3vT_yiiPdMB03mRiSm4a948_FSt64wCRgFylkcz8sYnNucOpja4C6ewImxsk7vua4Q1iOqlVCRDL8A2JX1Ks8kk8Ss01H_dJnu12B2Nz3PtjJxi_N7iRvffDD3JszZTERBpPgzXHa4o9S0nOQ-HdmTWwavLyvHfa1qYWsTfY3zc5dycjiDgR_e2HbsalnndaDGuAT3TbitU0xuUnIQDWmkT1VxKTn8UhtZb2LrodDT" />
                                </div>
                                <p class="text-slate-800 text-base font-semibold">Modern Chronological</p>
                            </div>
                            <div class="flex flex-col gap-3 group">
                                <div
                                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-md transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                                    <img alt="Resume Template 2" class="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvaKEjjyUyjeciE71SkQOxCopLDnnSKutqO4QOoDLU2BukgaYwrCYVW_WLuRzKiGpTJ2LU50lt705aI1b0vuOXHzjDQ2B-C-Cf3P2YiCbANDnXfcWl05mNRgsLVoxwloLlRbktIv_aD70_d0yLF2cVBgIDqDcRZN8hevArEfdlGOqk-0paJkZECgnXfYum0cC7d6SnZidMRf3vAgldJuL6gPWA9l6ZK4Itv7DMhglEoFEQZCxML93cVmoYug8dOV3TjzOD-kimIo1J" />
                                </div>
                                <p class="text-slate-800 text-base font-semibold">Creative Infographic</p>
                            </div>
                            <div class="flex flex-col gap-3 group">
                                <div
                                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-md transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                                    <img alt="Resume Template 3" class="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKMxBcbXMNJmWHbRA6drqhEHXh0JRFHVbUEWbcjfoaMZCtagLZlWaRViTR9Rfzay1hYXsm0C9bPHQtIT8S-XhLZkAOTTHvzlU5uiRpMam07sr8kr9FFN-zx2l2BumRc3VYiReQmz5gqAwR3s1FfVFYPBPbWDHOyoOjE0mpjY-f9DEYdROh0mFNy52FzykY-CBtoPFrkuUNTWzb356f7E1Bm_uKMRo1XWEnlJoTayapiBTzaEQn0bGkn1RywFOPQtxAQIN9LV-RGwcv" />
                                </div>
                                <p class="text-slate-800 text-base font-semibold">Professional Minimalist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>

<style type="text/tailwindcss">
:root {
    --primary-color: #0c7ff2;
    --primary-color-light: #e7f2fe;
    --secondary-color: #64748b;
    --background-color: #f8fafc;
    --text-color: #0f172a;
    --danger-color: #ef4444;
    --warning-color: #f97316;
    --success-color: #22c55e;
}

body {
    font-family: 'Inter', sans-serif;
}

.score-badge {
    @apply w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg;
}
</style>