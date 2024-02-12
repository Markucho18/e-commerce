import { useState } from "react"
import { Filters as FiltersType, ProductProps } from "../types"

interface useFiltersReturn {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
  filterProducts: (products: ProductProps[]) => ProductProps[]
}

export const useFilters = (): useFiltersReturn => {
  const [filters, setFilters] = useState<FiltersType>({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products: ProductProps[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  
  return { filters, setFilters, filterProducts }
}