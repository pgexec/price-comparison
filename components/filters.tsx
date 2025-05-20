"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Estado para os filtros
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [minRating, setMinRating] = useState<number>(0)
  const [freeShipping, setFreeShipping] = useState<boolean>(false)
  const [deliveryTime, setDeliveryTime] = useState<string>("")
  const [sellerType, setSellerType] = useState<string>("")

  // Inicializar filtros a partir da URL
  useEffect(() => {
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    if (minPrice && maxPrice) {
      setPriceRange([Number(minPrice), Number(maxPrice)])
    }

    const rating = searchParams.get("minRating")
    if (rating) setMinRating(Number(rating))

    setFreeShipping(searchParams.get("freeShipping") === "true")

    const delivery = searchParams.get("deliveryTime")
    if (delivery) setDeliveryTime(delivery)

    const seller = searchParams.get("sellerType")
    if (seller) setSellerType(seller)
  }, [searchParams])

  // Aplicar filtros
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Atualizar parâmetros
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    if (minRating > 0) {
      params.set("minRating", minRating.toString())
    } else {
      params.delete("minRating")
    }

    if (freeShipping) {
      params.set("freeShipping", "true")
    } else {
      params.delete("freeShipping")
    }

    if (deliveryTime) {
      params.set("deliveryTime", deliveryTime)
    } else {
      params.delete("deliveryTime")
    }

    if (sellerType) {
      params.set("sellerType", sellerType)
    } else {
      params.delete("sellerType")
    }

    // Manter a consulta de pesquisa
    const query = searchParams.get("q")
    if (query) {
      params.set("q", query)
    }

    router.push(`/search?${params.toString()}`)
  }

  // Limpar todos os filtros
  const clearFilters = () => {
    const params = new URLSearchParams()
    const query = searchParams.get("q")
    if (query) {
      params.set("q", query)
    }
    router.push(`/search?${params.toString()}`)

    // Resetar estados
    setPriceRange([0, 5000])
    setMinRating(0)
    setFreeShipping(false)
    setDeliveryTime("")
    setSellerType("")
  }

  // Renderizar estrelas para o filtro de avaliação
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
        <span className="ml-1 text-sm">ou mais</span>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="flex flex-row items-center justify-between pb-4 border-b border-gray-200 mb-4">
        <h3 className="text-xl font-bold text-[#222222]">Filtros</h3>
        <button onClick={clearFilters} className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          <X className="h-4 w-4 mr-1" />
          Limpar
        </button>
      </div>

      <div className="space-y-6">
        {/* Faixa de preço */}
        <div className="space-y-2">
          <h4 className="font-medium text-[#222222]">Faixa de Preço</h4>
          <Slider
            defaultValue={priceRange}
            min={0}
            max={5000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="my-6"
          />
          <div className="flex justify-between text-sm">
            <span>{formatCurrency(priceRange[0])}</span>
            <span>{formatCurrency(priceRange[1])}</span>
          </div>
        </div>

        {/* Avaliação mínima */}
        <div className="space-y-3">
          <h4 className="font-medium text-[#222222]">Avaliação Mínima</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={`rating-${rating}`}
                  value={rating.toString()}
                  checked={minRating === rating}
                  onClick={() => setMinRating(rating)}
                />
                <Label htmlFor={`rating-${rating}`} className="flex items-center">
                  {renderStars(rating)}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Frete Grátis */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="freeShipping"
            checked={freeShipping}
            onCheckedChange={(checked) => setFreeShipping(checked as boolean)}
          />
          <Label htmlFor="freeShipping">Frete Grátis</Label>
        </div>

        {/* Prazo de Entrega */}
        <div className="space-y-3">
          <h4 className="font-medium text-[#222222]">Prazo de Entrega</h4>
          <RadioGroup value={deliveryTime} onValueChange={setDeliveryTime}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express">Express (até 24h)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1-2" id="1-2" />
              <Label htmlFor="1-2">1-2 dias</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3-5" id="3-5" />
              <Label htmlFor="3-5">3-5 dias</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5-7" id="5-7" />
              <Label htmlFor="5-7">5-7 dias</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Tipo de Vendedor */}
        <div className="space-y-3">
          <h4 className="font-medium text-[#222222]">Tipo de Vendedor</h4>
          <RadioGroup value={sellerType} onValueChange={setSellerType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="official" id="official" />
              <Label htmlFor="official">Marketplace Oficial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="authorized" id="authorized" />
              <Label htmlFor="authorized">Revendedor Autorizado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small">Pequeno Lojista</Label>
            </div>
          </RadioGroup>
        </div>

        <Button className="w-full bg-[#222222] hover:bg-[#333333]" onClick={applyFilters}>
          Aplicar Filtros
        </Button>
      </div>
    </div>
  )
}
