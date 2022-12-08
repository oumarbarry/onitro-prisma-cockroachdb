import { useValidatedBody, z } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const { title, description } = await useValidatedBody(event, z.object({
    title: z.string().min(1).max(50),
    description: z.string().optional(),
  }))

  try {
    return await prisma.movie.create({ data: { title, description } })
  }
  catch {
    return createError({ statusCode: 500, statusMessage: 'SOMETHING WENT WRONG' })
  }
})
