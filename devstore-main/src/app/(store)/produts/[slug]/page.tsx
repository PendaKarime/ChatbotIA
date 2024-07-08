import data from '@/app/api/products/data.json'
import { productType } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProdutsProps {
  params: {
    slug: string
  }
}

async function getFeaturedProduts(slug: string): Promise<productType> {
  const response = data.product.find((produt) => produt.slug === slug)

  if (response) return response
  else throw new Error('Promise é undefined em determinada condição')
}

export async function generateMetadata({
  params,
}: ProdutsProps): Promise<Metadata> {
  return {
    title: params.slug,
  }
}

export default async function Products({ params }: ProdutsProps) {
  const produt = await getFeaturedProduts(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={produt.image}
          alt="elemento1"
          width={800}
          height={800}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{produt.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {produt.desciption}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 font-semibold rounded-full bg-violet-500">
            {produt.price.toLocaleString('pt-AO', {
              style: 'currency',
              currency: 'AOA',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            {(produt.price / 12).toLocaleString('pt-AO', {
              style: 'currency',
              currency: 'AOA',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4 ">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
