import { z } from 'zod'
import data from '../data.json'
import { NextRequest } from 'next/server'

export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const produt = data.product.find((produt) => produt.slug === slug)

  if (!produt) {
    return Response.json({ message: 'produt not found' }, { status: 400 })
  }

  return Response.json(produt)
}
