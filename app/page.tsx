import { Search } from "@/components/search"
import { FeatureCards } from "@/components/feature-cards"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <main>
      <div className="bg-[#f0f0f0] min-h-screen">
        {/* Header */}
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <button className="bg-[#222222] text-white rounded-md px-6 py-2 font-medium hover:bg-[#333333] transition-colors">
            Create free account
          </button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Os <span className="text-[#222222]">melhores preços</span> do mercado ao alcance de{" "}
              <span className="text-[#222222]">um clique.</span>
            </h1>
            <p className="text-xl text-gray-700">
              Compare preços em <span className="font-bold">segundos</span>, sem abrir mil abas.
            </p>
          </div>

          <Search />

          <div className="mt-16 md:mt-24">
            <FeatureCards />
          </div>

          <div className="mt-16 md:mt-24">
            <FeaturedProducts />
          </div>
        </div>
      </div>
    </main>
  )
}
