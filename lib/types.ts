export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  store: string
  link: string
  rating: number
  reviews: number
  freeShipping: boolean
  deliveryTime?: string
  sellerType?: string
  category: string
  specs?: { name: string; value: string }[]
}

export interface FilterOptions {
  minPrice?: number
  maxPrice?: number
  minRating?: number
  freeShipping?: boolean
  deliveryTime?: string
  sellerType?: string
}
