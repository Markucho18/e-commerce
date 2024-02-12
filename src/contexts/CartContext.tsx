import { useState, createContext, useContext } from "react";
import { ProductProps } from "../types";

interface CartContext {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const FiltersContext = createContext<CartContext | null>(null)

export function CartContextProvider ({ children }: CartProviderProps){

  const [cart, setCart] = useState<ProductProps[]>([])


  //AQUI TENEMOS UN PROBLEMA CON LA CANTIDAD
  const addToCart = (product: ProductProps) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(productInCartIndex >= 0){
      //One way or another
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity ? + 1 : 1;
      return setCart(newCart)
    }
    setCart(prevCart => [
      ...prevCart, {...product, quantity: 1}
    ])
  }

  const clearCart = () => setCart([])

  return (
    <FiltersContext.Provider value={{
      cart,
      addToCart
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

