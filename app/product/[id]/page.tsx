import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Truck, ArrowLeft, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, getSimilarProducts } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/utils"
import { ProductCard } from "@/components/product-card"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const similarProducts = getSimilarProducts(product.id, product.category)

  return (
    <main className="bg-[#f0f0f0] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#222222] mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para pesquisa
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Imagem do produto */}
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Detalhes do produto */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">{product.name}</h1>

              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">({product.reviews} avaliações)</span>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Vendido por</p>
                  <p className="font-medium">{product.store}</p>
                </div>
                {product.freeShipping && (
                  <span className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    <Truck className="h-3 w-3" />
                    <span>Frete Grátis</span>
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-[#222222]">{formatCurrency(product.price)}</div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">{formatCurrency(product.originalPrice)}</div>
                )}
                {product.originalPrice && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    Economia de {formatCurrency(product.originalPrice - product.price)}(
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
                  </div>
                )}
              </div>

              <button className="w-full py-3 bg-[#222222] text-white rounded-md hover:bg-[#333333] transition-colors flex items-center justify-center mb-2">
                Ir para a loja
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>

              <p className="text-xs text-gray-500 text-center">Você será redirecionado para o site da loja</p>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="specs">Especificações</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-700">{product.description}</p>
              </TabsContent>
              <TabsContent value="specs" className="bg-white p-4 rounded-md shadow-sm">
                <ul className="space-y-2">
                  {product.specs?.map((spec, index) => (
                    <li key={index} className="flex">
                      <span className="font-medium min-w-[120px]">{spec.name}:</span>
                      <span className="text-gray-700">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-700">
                  Este produto tem {product.reviews} avaliações com média de {product.rating} estrelas.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Produtos similares */}
        {similarProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#222222]">Produtos Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
