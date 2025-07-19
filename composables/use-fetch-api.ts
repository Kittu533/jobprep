import type { HttpMethod, ApiRequestOptions, ApiError } from '~/types'
import { useAuthStore } from '@/stores/auth'

export const useApi = async <T>(
    url: string,
    options: ApiRequestOptions = {}
): Promise<T> => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()

    // Get base URL from config
    const baseUrl = config.public.apiBaseUrl
    if (!baseUrl) throw new Error('API base URL is not configured')

    // Token support for SSR & client
    const token = import.meta.client ? localStorage.getItem('token') : authStore.token

    // Compose headers
    const headers: HeadersInit = {
        ...(options.headers ?? {}),
        ...(token && !options.skipAuth ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.body &&
            typeof options.body === 'object' &&
            !(options.body instanceof FormData)
            ? { 'Content-Type': 'application/json' }
            : {})
    }

    // Serialize body if object & not FormData
    let body: BodyInit | null | undefined
    if (
        options.body &&
        typeof options.body === 'object' &&
        !(options.body instanceof FormData)
    ) {
        body = JSON.stringify(options.body)
    } else {
        body = options.body as BodyInit | null | undefined
    }

    try {
        const response = await $fetch<T>(`${baseUrl}${url}`, {
            method: options.method ?? 'GET',
            query: options.query,
            body,
            headers
        })
        return response
    } catch (error: unknown) {
        // Enhanced error handling
        let statusCode = 500
        let message = 'An unexpected error occurred'
        let data: unknown = undefined

        if (
            typeof error === 'object' &&
            error !== null &&
            'response' in error
        ) {
            const errObj = error as {
                response?: { status?: number; _data?: unknown }
                statusCode?: number
                data?: { message?: string }
                message?: string
            }
            statusCode = errObj.response?.status || errObj.statusCode || 500
            data = errObj.response?._data
            message =
                (errObj.response?._data as { message?: string })?.message ||
                errObj.data?.message ||
                errObj.message ||
                'An unexpected error occurred'
        }

        const apiError: ApiError = {
            statusCode,
            message,
            data,
            url: `${baseUrl}${url}`
        }

        throw apiError
    }
}

// Helper methods
export const useGet = <T>(url: string, options: Omit<ApiRequestOptions, 'method'> = {}) =>
    useApi<T>(url, { ...options, method: 'GET' })

export const usePost = <T>(url: string, body?: Record<string, unknown> | FormData, options: Omit<ApiRequestOptions, 'method' | 'body'> = {}) =>
    useApi<T>(url, { ...options, method: 'POST', body })

export const usePut = <T>(url: string, body?: Record<string, unknown> | FormData, options: Omit<ApiRequestOptions, 'method' | 'body'> = {}) =>
    useApi<T>(url, { ...options, method: 'PUT', body })

export const useDelete = <T>(url: string, options: Omit<ApiRequestOptions, 'method'> = {}) =>
    useApi<T>(url, { ...options, method: 'DELETE' })

export const usePatch = <T>(url: string, body?: Record<string, unknown> | FormData, options: Omit<ApiRequestOptions, 'method' | 'body'> = {}) =>
    useApi<T>(url, { ...options, method: 'PATCH', body })

export const useUpload = <T>(url: string, formData: FormData, options: Omit<ApiRequestOptions, 'method' | 'body'> = {}) =>
    useApi<T>(url, {
        ...options,
        method: 'POST',
        body: formData,
        headers: { ...options.headers }
        // Don't set Content-Type for FormData, browser handles automatically
    })