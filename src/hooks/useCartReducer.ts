import { useReducer } from "react"
import { ProductProps } from "../types"
import { reducer, initialState } from "../reducers/cartReducer"

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product: ProductProps) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product: ProductProps) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({type: 'CLEAR_CART'})
  
  return {state, addToCart, removeFromCart, clearCart}
}