/**
 * Formatting utilities
 */

// Date formatting
export const formatDate = (date: string | Date, locale: string = 'id-ID'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(dateObj)
}

export const formatDateTime = (date: string | Date, locale: string = 'id-ID'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(dateObj)
}

export const formatTimeAgo = (date: string | Date, locale: string = 'id-ID'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

    if (diffInSeconds < 60) return 'Baru saja'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit yang lalu`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} hari yang lalu`

    return formatDate(dateObj, locale)
}

// File size formatting
export const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'

    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Text formatting
export const truncateText = (text: string, maxLength: number = 100): string => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
}

export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const titleCase = (text: string): string => {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => capitalize(word))
        .join(' ')
}

// Phone number formatting
export const formatPhoneNumber = (phone: string): string => {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '')

    // Indonesian phone number formatting
    if (cleaned.startsWith('62')) {
        return `+${cleaned}`
    } else if (cleaned.startsWith('0')) {
        return `+62${cleaned.substring(1)}`
    } else if (cleaned.startsWith('8')) {
        return `+62${cleaned}`
    }

    return phone
}

// URL formatting
export const ensureHttps = (url: string): string => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return `https://${url}`
    }
    return url
}

export const extractDomain = (url: string): string => {
    try {
        const urlObj = new URL(ensureHttps(url))
        return urlObj.hostname
    } catch {
        return url
    }
}