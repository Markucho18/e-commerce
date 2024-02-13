import { useState, createContext, useContext } from "react";
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

  const [cart, setCart] = useState<ProductProps[]>([])


  //AQUI TENEMOS UN PROBLEMA CON LA CANTIDAD
  const addToCart = (product: ProductProps) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(productInCartIndex >= 0){
      setCart(prevCart => {
        const newCart = prevCart.map((product, i)=>{
          if(i === productInCartIndex && product.quantity){
            return {...product, quantity: product.quantity + 1}
          }
          return product
        })
        return newCart
      })
    }
    else{
      setCart(prevCart => [
        ...prevCart, {...product, quantity: 1}
      ])
    }
  }

  const removeFromCart = (product: ProductProps) => {

    if(product.quantity && product.quantity > 1){
      const { quantity } = product
      setCart(prevCart => {
        const newCart = prevCart.map(prevProduct => {
          if(prevProduct.id === product.id){
            return {...prevProduct, quantity: quantity - 1}
          }
          return prevProduct
        })
        return newCart
      })
    }  else setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    
  }

  const clearCart = () => setCart([])

  return (
    <FiltersContext.Provider value={{
      cart,
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

