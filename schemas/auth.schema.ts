import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.string()
})

export const loginResponseSchema = z.object({
  message: z.string(),
  user: z.object({
    user: z.string(),
    access_token: z.string(),      // ← tambahkan access_token!
    token_type: z.string(),
    refresh_token: z.string()
  })
})

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirm_password: z.string()
})

export const registerResponseSchema = loginResponseSchema

export const refreshTokenSchema = z.object({
  refresh_token: z.string()
})
export const refreshTokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string()
})

export type LoginPayload = z.infer<typeof loginSchema>
export type LoginResponse = z.infer<typeof loginResponseSchema>
export type RegisterPayload = z.infer<typeof registerSchema>
export type RegisterResponse = z.infer<typeof registerResponseSchema>
export type RefreshTokenPayload = z.infer<typeof refreshTokenSchema>
export type RefreshTokenResponse = z.infer<typeof refreshTokenResponseSchema>
