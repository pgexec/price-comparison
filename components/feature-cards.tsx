import { Search, DollarSign, SearchCheck } from "lucide-react"

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#222222] text-white rounded-md p-8 text-center flex flex-col items-center">
        <div className="bg-[#333333] p-4 rounded-full mb-4">
          <Search className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-3">Busque preços em diversas lojas</h3>
        <p className="text-gray-300 text-sm">
          Nossos robôs vasculham lojas parceiras instantaneamente para trazer o preço mais atualizado de cada item.
        </p>
      </div>

      <div className="bg-[#222222] text-white rounded-md p-8 text-center flex flex-col items-center">
        <div className="bg-[#333333] p-4 rounded-full mb-4">
          <DollarSign className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-3">Veja o quanto você economiza</h3>
        <p className="text-gray-300 text-sm">
          Compare o valor do produto na loja mais cara e na mais barata e descubra sua economia instantânea.
        </p>
      </div>

      <div className="bg-[#222222] text-white rounded-md p-8 text-center flex flex-col items-center">
        <div className="bg-[#333333] p-4 rounded-full mb-4">
          <SearchCheck className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-3">Encontre a oferta ideal</h3>
        <p className="text-gray-300 text-sm">
          Filtre por frete grátis, prazo de entrega e reputação da loja para tomar a melhor decisão de compra.
        </p>
      </div>
    </div>
  )
}
