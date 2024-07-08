import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProdut = data.product.filter((proddut) => proddut.featured)

  return Response.json(featuredProdut)
}
