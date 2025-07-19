<template>
    <main class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="text-center">
                <h1 class="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">Create your account
                </h1>
                <p class="mt-4 text-md text-[var(--text-secondary)]">
                    Join JobPrep today. Sign up to get started!
                </p>
            </div>
            <div class="bg-[var(--surface-primary)] p-8 shadow-xl rounded-2xl space-y-6">
                <Loading v-if="loading" class="fixed inset-0 z-50 bg-white/80 flex items-center justify-center" />

                <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                    <UFormField label="Email" name="email" class="space-y-2">
                        <UInput v-model="state.email" placeholder="Email address" size="xl"
                            class="block w-full appearance-none rounded-md border shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)] sm:text-sm" />
                    </UFormField>

                    <div class="space-y-2">
                        <UFormField label="Password">
                            <UInput v-model="state.password" placeholder="Password" :color="color"
                                :type="show ? 'text' : 'password'" :aria-invalid="score < 4" size="xl"
                                aria-describedby="password-strength" :ui="{ trailing: 'pe-1' }" class="w-full">
                                <template #trailing>
                                    <UButton color="neutral" variant="link" size="sm"
                                        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                        :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                                        aria-controls="password" @click="show = !show" />
                                </template>
                            </UInput>
                        </UFormField>

                        <UProgress :color="color" :indicator="text" :model-value="score" :max="4" size="sm" />

                        <p id="password-strength" class="text-sm font-medium">
                            {{ text }}. Must contain:
                        </p>

                        <ul class="space-y-1" aria-label="Password requirements">
                            <li v-for="(req, index) in strength" :key="index" class="flex items-center gap-0.5"
                                :class="req.met ? 'text-success' : 'text-muted'">
                                <UIcon :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
                                    class="size-4 shrink-0" />

                                <span class="text-xs font-light">
                                    {{ req.text }}
                                    <span class="sr-only">
                                        {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <UFormField label="Confirm Password" name="confirmPassword" class="space-y-2">
                        <UInput v-model="state.confirmPassword" type="password" placeholder="Confirm Password" size="xl"
                            class="block w-full appearance-none rounded-md border shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)] sm:text-sm" />
                    </UFormField>

                    <p class="text-end text-xs text-[var(--text-secondary)]">
                        Already have an account?
                        <NuxtLink class="font-medium text-[var(--brand-primary)] hover:underline" to="/auth/signin">
                            Sign in
                        </NuxtLink>
                    </p>

                    <UButton type="submit"
                        class="flex w-full justify-center rounded-lg bg-[var(--brand-primary)] px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
                        Sign Up
                    </UButton>
                </UForm>
                <p class="text-center text-xs text-[var(--text-secondary)]">
                    By signing in, you agree to our
                    <a class="font-medium text-[var(--brand-primary)] hover:underline" href="#">Terms of Service</a> and
                    <a class="font-medium text-[var(--brand-primary)] hover:underline" href="#">Privacy Policy</a>.
                </p>
            </div>
        </div>
    </main>

</template>
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const show = ref(false)
// const password = ref('')
import Loading from '~/components/loading.vue'
const loading = ref(false) // local loading state

const { register } = useAuth()

definePageMeta({
    title: 'Sign Up - JobPrep'
})

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Must be at least 8 characters'),
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            code: z.ZodIssueCode.custom,
            message: 'Passwords must match',
        })
    }
})

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined,
    confirmPassword: undefined
})

const toast = useToast()

// password input
function checkStrength(str: string) {
    const requirements = [
        { regex: /.{8,}/, text: 'At least 8 characters' },
        { regex: /\d/, text: 'At least 1 number' },
        { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
        { regex: /[A-Z]/, text: 'At least 1 uppercase letter' }
    ]

    return requirements.map(req => ({ met: req.regex.test(str), text: req.text }))
}

const strength = computed(() => checkStrength(state.password || ''))
const score = computed(() => strength.value.filter(req => req.met).length)


const color = computed(() => {
    if (score.value === 0) return 'neutral'
    if (score.value <= 1) return 'error'
    if (score.value <= 2) return 'warning'
    if (score.value === 3) return 'warning'
    return 'success'
})

const text = computed(() => {
    if (score.value === 0) return 'Enter a password'
    if (score.value <= 2) return 'Weak password'
    if (score.value === 3) return 'Medium password'
    return 'Strong password'
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true
    const start = Date.now()
    try {
        await register({
            email: event.data.email,
            password: event.data.password,
            confirm_password: event.data.confirmPassword
        })
        toast.add({ title: 'Success', description: 'Registration successful!', color: 'success' })
        await navigateTo('/auth/signin')
    } catch (err: any) {
        let message = err.message || 'Registration failed'
        if (err.data && Array.isArray(err.data.detail)) {
            message = err.data.detail.map((d: any) => d.msg).join(', ')
        }
        toast.add({ title: 'Error', description: message, color: 'error' })
    } finally {
        // hitung waktu berlalu
        const elapsed = Date.now() - start
        // Jika kurang dari 2 detik (2000 ms), tunggu sisa waktunya
        if (elapsed < 2000) {
            await new Promise(resolve => setTimeout(resolve, 2000 - elapsed))
        }
        loading.value = false
    }
}


</script>


<style type="text/tailwindcss">
:root {
    --brand-primary: #1993e5;
    --brand-secondary: #e7eef3;
    --text-primary: #0e161b;
    --text-secondary: #4e7a97;
    --surface-primary: #ffffff;
    --surface-secondary: #f8fafc;
    --border-primary: #d0dee7;
}
</style>
