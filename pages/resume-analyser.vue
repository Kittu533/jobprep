<template>
    <div class="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-slate-50 text-slate-900">
        <div class="layout-container flex h-full grow flex-col">
            <main class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
                <div class="layout-content-container flex flex-col max-w-4xl flex-1 gap-8">

                    <!-- Judul & Deskripsi -->
                    <div class="flex flex-col gap-2">
                        <h1 class="text-slate-900 text-4xl font-bold tracking-tighter">Improve Your Resume</h1>
                        <p class="text-gray-400 text-base font-normal">
                            Get instant feedback and see how you stack up against the competition.
                        </p>
                    </div>

                    <!-- Upload Card -->
                    <div
                        class="flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 px-6 py-16 text-center">
                        <div class="flex flex-col items-center gap-4">
                            <div
                                class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <span class="material-symbols-outlined text-4xl">Upload</span>
                            </div>
                            <p class="text-slate-800 text-xl font-semibold">Drag &amp; drop your resume to get started
                            </p>
                            <p class="text-slate-500 text-sm">Supported formats: PDF, DOC, DOCX. Max file size: 5MB.</p>
                        </div>
                        <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" class="hidden"
                            @change="onFileChange" />
                        <label for="resume-upload"
                            class="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">
                            <NuxtIcon name="material-symbols:upload" />
                            <span>Choose File</span>
                        </label>
                        <span v-if="file" class="text-slate-700 text-sm font-medium mt-2">{{ file?.name }}</span>
                        <button :disabled="!file || loading" @click="handleUpload"
                            class="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                            <NuxtIcon name="material-symbols:rocket-launch" class="text-xl" />
                            <span>{{ loading ? 'Analyzing...' : 'Analyze Resume' }}</span>
                        </button>
                        <Loading v-if="loading"
                            class="fixed inset-0 z-50 bg-white/80 flex items-center justify-center" />
                    </div>

                    <!-- HASIL ANALISIS -->
                    <div v-if="atsScore !== null && detailReview"
                        class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-6 mt-6">
                        <div class="flex items-center justify-between">
                            <h2 class="text-slate-900 text-2xl font-bold tracking-tight">Your Results</h2>
                            <div class="flex items-center gap-2"
                                :class="atsScore >= 75 ? 'text-green-500' : atsScore >= 60 ? 'text-orange-500' : 'text-red-500'">
                                <NuxtIcon v-if="atsScore >= 75" name="material-symbols:check-circle" />
                                <NuxtIcon v-else name="material-symbols:warning" />
                                <span>{{ atsScore >= 75 ? 'Good Resume' : atsScore >= 60 ? 'Needs Improvement' : 'PoorResume' }}</span>
                            </div>
                        </div>

                        <!-- ATS SCORE RADIAL CHART (kecilkan di komponen chart-nya) -->
                        <div class="flex gap-8 items-center justify-center flex-wrap">
                            <ClientOnly>
                                <AtsRadialChart :score="atsScore" />
                            </ClientOnly>
                            <div>
                                <h3 class="text-lg font-semibold">
                                    ATS Score:
                                    <span
                                        :class="atsScore >= 75 ? 'text-green-500' : atsScore >= 60 ? 'text-orange-500' : 'text-red-500'">
                                        {{ atsScore }}%
                                    </span>
                                </h3>
                                <p class="text-gray-500 text-sm">An ATS score of 75%+ is recommended for best results.
                                </p>
                            </div>
                        </div>

                        <!-- Radar Chart Detail -->
                        <div class="my-6">
                            <ClientOnly>
                                <AtsRadarChart :detail="detailReview" />
                            </ClientOnly>
                        </div>

                        <!-- Detail + Tips -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <div v-for="(score, name) in detailReview" :key="name"
                                class="flex flex-col gap-2 p-4 rounded-lg border" :class="{
                                    'bg-green-50 border-green-100': score >= 75,
                                    'bg-orange-50 border-orange-100': score >= 60 && score < 75,
                                    'bg-red-50 border-red-100': score < 60
                                }">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base"
                                        :class="score >= 75 ? 'bg-green-500' : score >= 60 ? 'bg-orange-500' : 'bg-red-500'">
                                        {{ score }}
                                    </div>
                                    <div>
                                        <p class="font-semibold text-slate-800 capitalize">{{ getLabel(name) }}</p>
                                    </div>
                                    <NuxtIcon v-if="score < 75" name="material-symbols:priority-high" class="text-red-400 text-base ml-1" />
                                </div>
                                <p class="text-xs text-slate-500">
                                    <template v-if="score >= 75">Excellent</template>
                                    <template v-else-if="score >= 60">Good, but can be improved</template>
                                    <template v-else>Needs Improvement</template>
                                </p>
                                <div v-if="score < 75" class="text-xs text-red-600 mt-1 font-medium">
                                    {{ tips[name] || 'Consider improving this section for a higher score.' }}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ResumeApi } from '~/composables/consume-api/resume.api'
import Loading from '~/components/loading.vue'
import AtsRadialChart from '~/components/ats-radial-chart.vue'
import AtsRadarChart from '~/components/ats-radar-chart.vue'

const loading = ref(false)
const file = ref<File | null>(null)
const atsScore = ref<number | null>(null)
const detailReview = ref<any>(null)
const fileUrl = ref<string | null>(null)
const toast = useToast()

const tips: Record<string, string> = {
    ats_parse_rate: "Pastikan resume Anda mudah dibaca oleh mesin (ATS). Gunakan struktur sederhana.",
    impact_score: "Ceritakan pencapaian, bukan hanya tugas. Gunakan angka, misal: 'meningkatkan penjualan 30%'.",
    spelling_grammar_score: "Periksa ejaan dan grammar. Gunakan Grammarly atau minta teman mereview.",
    format_score: "Pastikan format konsisten dan mudah dibaca. Hindari terlalu banyak warna/ikon.",
    skills_score: "Tambahkan skill relevan, gunakan kata kunci sesuai lowongan.",
    experience_score: "Tulis pengalaman detail, fokus ke hasil, bukan hanya deskripsi kerja."
}
function getLabel(name: string) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement
    if (target.files && target.files[0]) {
        file.value = target.files[0]
    }
}

async function handleUpload() {
    if (!file.value) {
        toast.add({ title: 'No file selected', color: 'error' })
        return
    }
    loading.value = true
    atsScore.value = null
    detailReview.value = null
    fileUrl.value = null
    try {
        const res = await ResumeApi.analyzeResume(file.value)
        const result = res.data ?? res
        const resultObj = JSON.parse(result.result)
        atsScore.value = resultObj.ats_score ?? null
        detailReview.value = resultObj.detail_review ?? null
        fileUrl.value = result.file_url
        toast.add({ title: 'Analysis Success', color: 'success' })
    } catch (err: any) {
        let message = err.message || 'Upload failed'
        if (err.data?.error) message = err.data.error
        if (err.data && Array.isArray(err.data.detail)) {
            message = err.data.detail.map((d: any) => d.msg).join(', ')
        }
        toast.add({ title: 'Error', description: message, color: 'error' })
    } finally {
        loading.value = false
    }
}
</script>
