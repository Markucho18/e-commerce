export interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number 
  stock: number
  brand: string //Cambiarlo despues hacer un tipo brand
  category: string //Cambiarlo despues hacer un tipo category
  thumbnail: string
  images: string[]
}

export interface Filters {
  category: string
  minPrice: number
}