import Link from 'next/link'
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { AlertDialogDemo } from './modal'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          <Image
            src="/logo.png"
            className="h-12 w-23"
            alt="anderson"
            width={100}
            height={100}
            quality={100}
          />
        </Link>
        <form className="flex items-center gap-3 w-[320px] rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            placeholder="Bucar produtos.."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <AlertDialogDemo />
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link
          className="flex items-center gap-2 hover-underline"
          href="/search"
        >
          <span className="text-sm">produtos</span>
          <ShoppingBag className="h-4 w-4" />
        </Link>

        <div className="w-px h-4 bg-zinc-700" />

        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link className="flex items-center gap-2 hover-underline" href="/">
          <span className="text-sm">Accoutn</span>
          <Image
            src="https://github.com/andersonigfrancisco.png"
            className="h-4 w-4 rounded-full"
            alt="anderson"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
