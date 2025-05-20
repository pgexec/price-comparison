import Image from "next/image"
import Link from "next/link"
import { Star, Truck } from "lucide-react"
import type { Product } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{product.store}</span>
          {product.freeShipping && (
            <span className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              <Truck className="h-3 w-3" />
              <span>Frete Grátis</span>
            </span>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="mt-2">
          <div className="text-2xl font-bold text-[#222222]">{formatCurrency(product.price)}</div>
          {product.originalPrice && (
            <div className="text-sm text-gray-500 line-through">{formatCurrency(product.originalPrice)}</div>
          )}
        </div>
        <Link
          href={`/product/${product.id}`}
          className="mt-4 block w-full text-center py-2 bg-[#222222] text-white rounded-md hover:bg-[#333333] transition-colors"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}
