<template>
    <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <button @click="toggleAudio" :disabled="audioState.isLoading"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all transform hover:scale-105 disabled:opacity-50">
            <svg v-if="audioState.isLoading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
            <svg v-else-if="!audioState.isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
        </button>

        <div class="flex-1">
            <div class="text-sm text-slate-600 mb-1 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                AI Voice Response
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${audioState.progress}%` }"></div>
            </div>
        </div>

        <div class="text-xs text-slate-500 flex items-center gap-1">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ formatTime(audioState.duration) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useInterviewStore } from '~/stores/interview'

interface Props {
    audioUrl: string
    messageId: string
}

const props = defineProps<Props>()
const store = useInterviewStore()

const audioState = computed(() =>
    store.audioStates[props.messageId] || {
        isPlaying: false,
        progress: 0,
        duration: 0,
        isLoading: false,
        element: null as HTMLAudioElement | null
    }
)

const toggleAudio = async () => {
    if (!props.audioUrl) return

    try {
        store.setAudioState(props.messageId, { isLoading: true })

        // Stop other audio
        Object.keys(store.audioStates).forEach(key => {
            if (key !== props.messageId) {
                const state = store.audioStates[key]
                if (state.element && !state.element.paused) {
                    state.element.pause()
                    store.setAudioState(key, { isPlaying: false })
                }
            }
        })

        let audio = audioState.value.element

        if (!audio) {
            audio = new Audio(props.audioUrl)
            store.setAudioState(props.messageId, { element: audio })

            audio.addEventListener('loadedmetadata', () => {
                store.setAudioState(props.messageId, { duration: audio!.duration })
            })

            audio.addEventListener('timeupdate', () => {
                const progress = (audio!.currentTime / audio!.duration) * 100
                store.setAudioState(props.messageId, { progress })
            })

            audio.addEventListener('ended', () => {
                store.setAudioState(props.messageId, { isPlaying: false, progress: 0 })
            })

            audio.addEventListener('error', () => {
                alert('Failed to load audio')
                store.setAudioState(props.messageId, { isLoading: false })
            })
        }

        if (audio.paused) {
            await audio.play()
            store.setAudioState(props.messageId, { isPlaying: true })
        } else {
            audio.pause()
            store.setAudioState(props.messageId, { isPlaying: false })
        }

    } catch (error) {
        alert('Failed to play audio')
    } finally {
        store.setAudioState(props.messageId, { isLoading: false })
    }
}

const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

onUnmounted(() => {
    const audio = audioState.value.element
    if (audio && !audio.paused) {
        audio.pause()
    }
})
</script>
