import { useState, createContext, useContext } from "react";
import { Filters as FiltersType, ProductProps } from "../types";

interface FiltersContext {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
  filterProducts: (products: ProductProps[]) => ProductProps[]
}

interface FiltersProviderProps {
  children: React.ReactNode
}

const FiltersContext = createContext<FiltersContext | null>(null)

export function FiltersContextProvider ({ children }: FiltersProviderProps){

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

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      filterProducts
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

export function useFiltersContext(){
  const context = useContext(FiltersContext)
  if(!context){
    throw new Error("FiltersContext debe ser usado en FiltersContextProvider")
  }
  else return context
} 

