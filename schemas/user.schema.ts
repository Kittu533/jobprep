import { z } from 'zod'

export const userProfileSchema = z.object({
    student_id: z.string(),
    email: z.string().email(),
    password: z.string(),
    major: z.string(),
    username: z.string(),
    university: z.string(),
    profile_image: z.string().nullable().optional()
})

export const getProfileResponseSchema = z.object({
    message: z.string(),
    user: userProfileSchema
})

export type UserProfile = z.infer<typeof userProfileSchema>
export type GetProfileResponse = z.infer<typeof getProfileResponseSchema>
