<template>
  <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
    <div class="text-center space-y-6">
      <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      
      <div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2">Wawancara Selesai!</h3>
        <p class="text-slate-600">Berikut ringkasan performa Anda:</p>
      </div>

      <!-- Overall Score -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
        <h4 class="font-semibold text-slate-800 mb-2">Skor Keseluruhan</h4>
        <div class="text-3xl font-bold text-blue-600 mb-2">{{ summary.overall_score }}/10</div>
        <div class="w-full bg-slate-200 rounded-full h-3">
          <div 
            class="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
            :style="{ width: `${(summary.overall_score / 10) * 100}%` }"
          ></div>
        </div>
      </div>

      <!-- Suggestions -->
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-left">
        <h4 class="font-semibold text-slate-800 mb-3">Saran untuk Perbaikan</h4>
        <ul class="space-y-2">
          <li 
            v-for="(suggestion, index) in summary.suggestions" 
            :key="index"
            class="flex items-start gap-2 text-slate-700"
          >
            <svg class="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{ suggestion }}</span>
          </li>
        </ul>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="$emit('restart')"
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Mulai Wawancara Baru
        </button>
        <button 
          @click="downloadReport"
          class="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Unduh Laporan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InterviewSummary } from '~/types/interview'

interface Props {
  summary: InterviewSummary
}

const props = defineProps<Props>()
const emit = defineEmits<{
  restart: []
}>()

const downloadReport = () => {
  const reportData = {
    skorKeseluruhan: props.summary.overall_score,
    saran: props.summary.suggestions,
    detailJawaban: props.summary.answers_summary,
    selesaiPada: new Date().toISOString()
  }

  const dataStr = JSON.stringify(reportData, null, 2)
  const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
  const exportFileDefaultName = `laporan-wawancara-${new Date().toISOString().split('T')[0]}.json`
  
  const linkElement = document.createElement('a')
  linkElement.setAttribute('href', dataUri)
  linkElement.setAttribute('download', exportFileDefaultName)
  linkElement.click()
}
</script>
