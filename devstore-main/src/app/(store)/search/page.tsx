import { GET } from '@/app/api/products/route'
import { productType } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getProduts(): Promise<productType[]> {
  const response = await GET()
  const products = response.json()

  return products
}

export default async function Home() {
  const products: productType[] = await getProduts()

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultado para: <span className="font-semibold">Moltetom</span>
      </p>
      <div className="grid grid-cols-6 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/produts/${product.slug}`}
              className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            >
              <Image
                className="group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                alt={product.desciption}
                width={450}
                height={450}
                quality={100}
              />
              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-AO', {
                    style: 'currency',
                    currency: 'AOA',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
