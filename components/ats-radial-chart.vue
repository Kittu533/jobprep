<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend)

const props = defineProps<{ score: number }>()

const data = {
  labels: ['Score', 'Remainder'],
  datasets: [{
    data: [props.score, 100 - props.score],
    backgroundColor: ['#22c55e', '#e5e7eb'],
    borderWidth: 0
  }]
}
const options = {
  cutout: '70%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
}
</script>

<template>
  <div style="width:60px; height:60px; position:relative;">
    <Pie :data="data" :options="options" />
    <div class="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-600">
      {{ score }}%
    </div>
  </div>
</template>
