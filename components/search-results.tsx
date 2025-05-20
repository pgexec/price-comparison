"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { PriceComparison } from "@/components/price-comparison"
import { searchProducts } from "@/lib/mock-data"
import type { Product } from "@/lib/types"
import { useSearchParams } from "next/navigation"

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  // Extrair filtros dos parâmetros de URL
  const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined
  const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined
  const minRating = searchParams.get("minRating") ? Number(searchParams.get("minRating")) : undefined
  const freeShipping = searchParams.get("freeShipping") === "true"
  const deliveryTime = searchParams.get("deliveryTime") || undefined
  const sellerType = searchParams.get("sellerType") || undefined

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        // Em um cenário real, isso seria uma chamada de API com os filtros
        const results = searchProducts(query, {
          minPrice,
          maxPrice,
          minRating,
          freeShipping,
          deliveryTime,
          sellerType,
        })
        setProducts(results)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [query, minPrice, maxPrice, minRating, freeShipping, deliveryTime, sellerType])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222222]"></div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4 text-[#222222]">Nenhum resultado encontrado</h2>
        <p className="text-gray-500">
          Não encontramos produtos para "{query}". Tente outra pesquisa ou ajuste os filtros.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#222222]">
        Resultados para "{query}" ({products.length})
      </h2>

      {products.length > 1 && <PriceComparison products={products} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
