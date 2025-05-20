import { Suspense } from "react"
import { Search } from "@/components/search"
import { SearchResults } from "@/components/search-results"
import { Filters } from "@/components/filters"

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  return (
    <main className="bg-[#f0f0f0] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#222222]">Comparador de Preços</h1>
        <Search />

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="w-full md:w-1/4">
            <Filters />
          </div>
          <div className="w-full md:w-3/4">
            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>}>
              <SearchResults query={query} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
