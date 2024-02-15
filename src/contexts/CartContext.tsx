import { createContext, useContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer"
import { ProductProps } from "../types";

interface CartContext {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
  clearCart: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const FiltersContext = createContext<CartContext | null>(null)

export function CartContextProvider ({ children }: CartProviderProps){

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <FiltersContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

export function useCartContext(){
  const context = useContext(FiltersContext)
  if(!context){
    throw new Error("FiltersContext debe ser usado en FiltersContextProvider")
  }
  else return context
} 

