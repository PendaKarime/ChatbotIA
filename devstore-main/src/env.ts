import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const pasedEnv = envSchema.safeParse(process.env)

if (!pasedEnv.success) {
  console.error(
    'invalid enviroment varible',
    pasedEnv.error.flatten().fieldErrors,
  )

  throw new Error('invalid enviroment varible')
}

export const env = pasedEnv.data
