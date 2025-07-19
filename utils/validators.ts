import { z } from 'zod'
import type { ZodSchema } from 'zod'

/**
 * Validation utilities using Zod schemas
 */

export const validateData = <T>(schema: ZodSchema<T>, data: unknown): T => {
    try {
        return schema.parse(data)
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessage = error.errors
                .map(err => `${err.path.join('.')}: ${err.message}`)
                .join(', ')
            throw new Error(`Validation error: ${errorMessage}`)
        }
        throw error
    }
}

export const validateDataSafe = <T>(schema: ZodSchema<T>, data: unknown) => {
    return schema.safeParse(data)
}

// Common validation patterns
export const emailValidation = z.string().email('Please enter a valid email address')
export const passwordValidation = z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least one letter and one number')

export const phoneValidation = z.string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, 'Please enter a valid Indonesian phone number')

export const urlValidation = z.string().url('Please enter a valid URL')

// File validation helpers
export const validateFileSize = (file: File, maxSizeMB: number = 5): boolean => {
    const maxSize = maxSizeMB * 1024 * 1024 // Convert MB to bytes
    return file.size <= maxSize
}

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
    return allowedTypes.includes(file.type)
}

export const validateImageFile = (file: File): boolean => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    const maxSize = 5 // 5MB

    return validateFileType(file, allowedTypes) && validateFileSize(file, maxSize)
}

export const validateDocumentFile = (file: File): boolean => {
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
    const maxSize = 10 // 10MB

    return validateFileType(file, allowedTypes) && validateFileSize(file, maxSize)
}