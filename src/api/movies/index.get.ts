export default defineEventHandler(async () => {
  try {
    return await prisma.movie.findMany()
  }
  catch {
    return createError({ statusCode: 500, statusMessage: 'SOMETHING WENT WRONG' })
  }
})
