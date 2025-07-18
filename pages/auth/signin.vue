<template>
    <main class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">Sign in to your
                    account</h1>
                <p class="mt-4 text-lg text-[var(--text-secondary)]">
                    Welcome back! Please sign in to continue.
                </p>
            </div>
            <div class="bg-[var(--surface-primary)] p-8 shadow-xl rounded-2xl space-y-6">

                <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                    <UFormField label="Email" name="email" class="space-y-2">
                        <UInput v-model="state.email" placeholder="Email address"  size="xl"
                            class="block w-full appearance-none rounded-md border shadow-sm focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)] sm:text-sm" />
                    </UFormField>

                    <UFormField label="Password" name="password" class="space-y-2">
                        <UInput v-model="state.password" type="password" placeholder="Password" size="xl"
                            class="block w-full appearance-none rounded-md border shadow-sm  sm:text-sm" />
                    </UFormField>

                    <p class="text-end text-xs text-[var(--text-secondary)]">
                        Don't have an account?
                        <a class="font-medium text-[var(--brand-primary)] hover:underline" href="/auth/signup">Sign
                            up</a>
                    </p>

                    <UButton type="submit"
                        class="flex w-full justify-center rounded-lg bg-[var(--brand-primary)] px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
                        Sign in
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
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
    title: 'Sign In - JobPrep'
})

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ name: 'email', message: 'Required' })
    if (!state.password) errors.push({ name: 'password', message: 'Required' })
    return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
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
