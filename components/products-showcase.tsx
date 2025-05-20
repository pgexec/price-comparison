"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/mock-data"
import type { Product } from "@/lib/types"

export function ProductsShowcase() {
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
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Produtos em Destaque</h2>
        <p className="text-gray-500">Nenhum produto encontrado. Tente uma pesquisa.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
