import type { Product } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface PriceComparisonProps {
  products: Product[]
}

export function PriceComparison({ products }: PriceComparisonProps) {
  // Ordenar produtos por preço (do mais barato para o mais caro)
  const sortedProducts = [...products].sort((a, b) => a.price - b.price)

  // Produto mais barato
  const cheapestProduct = sortedProducts[0]

  // Calcular economia em relação ao produto mais barato
  const savings = sortedProducts.slice(1).map((product) => {
    const saving = product.price - cheapestProduct.price
    const savingPercentage = (saving / product.price) * 100

    return {
      id: product.id,
      store: product.store,
      saving,
      savingPercentage,
    }
  })

  return (
    <div className="bg-[#222222] text-white rounded-md p-6 mb-6">
      <h3 className="text-lg font-bold mb-3">Comparação de Preços</h3>
      <p className="mb-2">
        <span className="font-semibold">{cheapestProduct.store}</span> tem o melhor preço:{" "}
        {formatCurrency(cheapestProduct.price)}
      </p>

      {savings.length > 0 && (
        <div className="space-y-2 mt-3">
          <p className="text-sm font-medium">Economia comprando na {cheapestProduct.store}:</p>
          <ul className="space-y-1">
            {savings.map((item) => (
              <li key={item.id} className="text-sm flex justify-between">
                <span>vs. {item.store}:</span>
                <span className="font-medium text-green-400">
                  {formatCurrency(item.saving)} ({item.savingPercentage.toFixed(0)}%)
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
