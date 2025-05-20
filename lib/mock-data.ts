import type { Product, FilterOptions } from "@/lib/types"

// Dados de exemplo para simular uma API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone Galaxy S23 Ultra 256GB",
    description:
      "O Galaxy S23 Ultra é o smartphone mais avançado da Samsung, com câmera de 200MP, S Pen integrada e processador Snapdragon 8 Gen 2.",
    price: 5499.99,
    originalPrice: 6999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Samsung Store",
    link: "https://example.com/product1",
    rating: 4.8,
    reviews: 1245,
    freeShipping: true,
    deliveryTime: "express",
    sellerType: "official",
    category: "Smartphones",
    specs: [
      { name: "Processador", value: "Snapdragon 8 Gen 2" },
      { name: "Memória RAM", value: "12GB" },
      { name: "Armazenamento", value: "256GB" },
      { name: "Tela", value: "6.8 polegadas AMOLED" },
      { name: "Câmera", value: "200MP + 12MP + 10MP + 10MP" },
      { name: "Bateria", value: "5000mAh" },
    ],
  },
  {
    id: "2",
    name: "Smartphone Galaxy S23 Ultra 256GB",
    description:
      "O Galaxy S23 Ultra é o smartphone mais avançado da Samsung, com câmera de 200MP, S Pen integrada e processador Snapdragon 8 Gen 2.",
    price: 5699.99,
    originalPrice: 6999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Magazine Luiza",
    link: "https://example.com/product2",
    rating: 4.7,
    reviews: 876,
    freeShipping: true,
    deliveryTime: "1-2",
    sellerType: "authorized",
    category: "Smartphones",
    specs: [
      { name: "Processador", value: "Snapdragon 8 Gen 2" },
      { name: "Memória RAM", value: "12GB" },
      { name: "Armazenamento", value: "256GB" },
      { name: "Tela", value: "6.8 polegadas AMOLED" },
      { name: "Câmera", value: "200MP + 12MP + 10MP + 10MP" },
      { name: "Bateria", value: "5000mAh" },
    ],
  },
  {
    id: "3",
    name: "Smartphone Galaxy S23 Ultra 256GB",
    description:
      "O Galaxy S23 Ultra é o smartphone mais avançado da Samsung, com câmera de 200MP, S Pen integrada e processador Snapdragon 8 Gen 2.",
    price: 5899.99,
    originalPrice: 6999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Amazon",
    link: "https://example.com/product3",
    rating: 4.6,
    reviews: 1532,
    freeShipping: true,
    deliveryTime: "1-2",
    sellerType: "official",
    category: "Smartphones",
    specs: [
      { name: "Processador", value: "Snapdragon 8 Gen 2" },
      { name: "Memória RAM", value: "12GB" },
      { name: "Armazenamento", value: "256GB" },
      { name: "Tela", value: "6.8 polegadas AMOLED" },
      { name: "Câmera", value: "200MP + 12MP + 10MP + 10MP" },
      { name: "Bateria", value: "5000mAh" },
    ],
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max 256GB",
    description:
      "O iPhone 15 Pro Max é o smartphone mais avançado da Apple, com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.",
    price: 9499.99,
    originalPrice: 10999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "iPlace",
    link: "https://example.com/product4",
    rating: 4.9,
    reviews: 987,
    freeShipping: true,
    deliveryTime: "express",
    sellerType: "official",
    category: "Smartphones",
    specs: [
      { name: "Processador", value: "A17 Pro" },
      { name: "Memória RAM", value: "8GB" },
      { name: "Armazenamento", value: "256GB" },
      { name: "Tela", value: "6.7 polegadas Super Retina XDR" },
      { name: "Câmera", value: "48MP + 12MP + 12MP" },
      { name: "Bateria", value: "4422mAh" },
    ],
  },
  {
    id: "5",
    name: "iPhone 15 Pro Max 256GB",
    description:
      "O iPhone 15 Pro Max é o smartphone mais avançado da Apple, com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.",
    price: 9699.99,
    originalPrice: 10999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Fast Shop",
    link: "https://example.com/product5",
    rating: 4.8,
    reviews: 654,
    freeShipping: true,
    deliveryTime: "1-2",
    sellerType: "authorized",
    category: "Smartphones",
    specs: [
      { name: "Processador", value: "A17 Pro" },
      { name: "Memória RAM", value: "8GB" },
      { name: "Armazenamento", value: "256GB" },
      { name: "Tela", value: "6.7 polegadas Super Retina XDR" },
      { name: "Câmera", value: "48MP + 12MP + 12MP" },
      { name: "Bateria", value: "4422mAh" },
    ],
  },
  {
    id: "6",
    name: 'Smart TV LG OLED 65" 4K',
    description:
      "Smart TV LG OLED com resolução 4K, HDR, Dolby Vision e Dolby Atmos, perfeita para assistir filmes e jogar.",
    price: 7999.99,
    originalPrice: 9499.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Casas Bahia",
    link: "https://example.com/product6",
    rating: 4.7,
    reviews: 432,
    freeShipping: true,
    deliveryTime: "3-5",
    sellerType: "authorized",
    category: "TVs",
    specs: [
      { name: "Tamanho", value: "65 polegadas" },
      { name: "Resolução", value: "4K UHD (3840 x 2160)" },
      { name: "Tipo de Tela", value: "OLED" },
      { name: "Taxa de Atualização", value: "120Hz" },
      { name: "Sistema", value: "webOS" },
      { name: "Conexões", value: "4x HDMI 2.1, 3x USB, Wi-Fi, Bluetooth" },
    ],
  },
  {
    id: "7",
    name: "Notebook Dell XPS 13",
    description:
      "Notebook premium com processador Intel Core i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e produtividade.",
    price: 8499.99,
    originalPrice: 9999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Dell",
    link: "https://example.com/product7",
    rating: 4.8,
    reviews: 765,
    freeShipping: true,
    deliveryTime: "express",
    sellerType: "official",
    category: "Notebooks",
    specs: [
      { name: "Processador", value: "Intel Core i7 12ª Geração" },
      { name: "Memória RAM", value: "16GB DDR5" },
      { name: "Armazenamento", value: "512GB SSD NVMe" },
      { name: "Tela", value: "13.4 polegadas Full HD+" },
      { name: "Placa de Vídeo", value: "Intel Iris Xe" },
      { name: "Sistema Operacional", value: "Windows 11 Home" },
    ],
  },
  {
    id: "8",
    name: "Notebook Dell XPS 13",
    description:
      "Notebook premium com processador Intel Core i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e produtividade.",
    price: 8699.99,
    originalPrice: 9999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Amazon",
    link: "https://example.com/product8",
    rating: 4.7,
    reviews: 543,
    freeShipping: true,
    deliveryTime: "1-2",
    sellerType: "authorized",
    category: "Notebooks",
    specs: [
      { name: "Processador", value: "Intel Core i7 12ª Geração" },
      { name: "Memória RAM", value: "16GB DDR5" },
      { name: "Armazenamento", value: "512GB SSD NVMe" },
      { name: "Tela", value: "13.4 polegadas Full HD+" },
      { name: "Placa de Vídeo", value: "Intel Iris Xe" },
      { name: "Sistema Operacional", value: "Windows 11 Home" },
    ],
  },
  {
    id: "9",
    name: "Fone de Ouvido Sony WH-1000XM5",
    description:
      "Fone de ouvido sem fio com cancelamento de ruído, até 30 horas de bateria e qualidade de áudio excepcional.",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Sony Store",
    link: "https://example.com/product9",
    rating: 4.9,
    reviews: 876,
    freeShipping: true,
    deliveryTime: "express",
    sellerType: "official",
    category: "Áudio",
    specs: [
      { name: "Tipo", value: "Over-ear" },
      { name: "Conexão", value: "Bluetooth 5.2" },
      { name: "Bateria", value: "Até 30 horas" },
      { name: "Cancelamento de Ruído", value: "Sim, adaptativo" },
      { name: "Microfone", value: "Sim, com redução de ruído" },
      { name: "Controles", value: "Touch e botões físicos" },
    ],
  },
  {
    id: "10",
    name: "Fone de Ouvido Sony WH-1000XM5",
    description:
      "Fone de ouvido sem fio com cancelamento de ruído, até 30 horas de bateria e qualidade de áudio excepcional.",
    price: 2599.99,
    originalPrice: 2999.99,
    image: "/placeholder.svg?height=400&width=400",
    store: "Magazine Luiza",
    link: "https://example.com/product10",
    rating: 4.8,
    reviews: 654,
    freeShipping: false,
    deliveryTime: "1-2",
    sellerType: "authorized",
    category: "Áudio",
    specs: [
      { name: "Tipo", value: "Over-ear" },
      { name: "Conexão", value: "Bluetooth 5.2" },
      { name: "Bateria", value: "Até 30 horas" },
      { name: "Cancelamento de Ruído", value: "Sim, adaptativo" },
      { name: "Microfone", value: "Sim, com redução de ruído" },
      { name: "Controles", value: "Touch e botões físicos" },
    ],
  },
]

// Função para obter produtos em destaque
export function getFeaturedProducts(): Product[] {
  // Em um cenário real, isso seria baseado em popularidade, promoções, etc.
  return mockProducts.slice(0, 6)
}

// Função para pesquisar produtos com filtros
export function searchProducts(query: string, filters?: FilterOptions): Product[] {
  if (!query) return []

  let results = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  )

  // Aplicar filtros
  if (filters) {
    if (filters.minPrice !== undefined) {
      results = results.filter((product) => product.price >= filters.minPrice!)
    }

    if (filters.maxPrice !== undefined) {
      results = results.filter((product) => product.price <= filters.maxPrice!)
    }

    if (filters.minRating !== undefined) {
      results = results.filter((product) => product.rating >= filters.minRating!)
    }

    if (filters.freeShipping) {
      results = results.filter((product) => product.freeShipping)
    }

    if (filters.deliveryTime) {
      results = results.filter((product) => product.deliveryTime === filters.deliveryTime)
    }

    if (filters.sellerType) {
      results = results.filter((product) => product.sellerType === filters.sellerType)
    }
  }

  return results
}

// Função para obter um produto pelo ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id)
}

// Função para obter produtos similares
export function getSimilarProducts(productId: string, category: string): Product[] {
  return mockProducts.filter((product) => product.id !== productId && product.category === category).slice(0, 4)
}
