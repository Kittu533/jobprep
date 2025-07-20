<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import { Radar } from 'vue-chartjs'
Chart.register(...registerables)

const props = defineProps<{ detail: Record<string, number> }>()
const data = {
    labels: Object.keys(props.detail).map(k => k.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
    datasets: [{
        label: 'Score',
        data: Object.values(props.detail),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff'
    }]
}
const options = {
    responsive: true,
    plugins: {
        legend: { display: false }
    },
    scales: {
        r: {
            min: 0,
            max: 100,
            ticks: { stepSize: 20 }
        }
    }
}
</script>

<template>
    <Radar :data="data" :options="options" />
</template>
