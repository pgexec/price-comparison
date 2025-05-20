"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/mock-data"
import type { Product } from "@/lib/types"

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula uma chamada de API
    const loadProducts = async () => {
      setLoading(true)
      try {
        // Em um cenário real, isso seria uma chamada de API
        const data = getFeaturedProducts()
        setProducts(data)
      } catch (error) {
        console.error("Erro ao carregar produtos:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222222]"></div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center text-[#222222]">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
