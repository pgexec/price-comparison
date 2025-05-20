"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function Search() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
      <div className="flex w-full items-center">
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-14 px-4 rounded-l-md text-lg border-0 focus:outline-none focus:ring-0 shadow-md"
        />
        <button
          type="submit"
          className="h-14 px-8 bg-[#222222] text-white font-bold rounded-r-md hover:bg-[#333333] transition-colors shadow-md"
        >
          Search
        </button>
      </div>
    </form>
  )
}
