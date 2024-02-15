import { ProductProps } from "../types"

interface Action {
  type: string
  payload: ProductProps
}

// CUANDO USAR USEREDUCER:
  // CUANDO  TENGO MUCHO USESTATE (ESTADO FRAGMENTADO)
  // NECESITO ALTERAR PARTES ESPECIFICAS DEL ESTADO
  // PUEDO SEPARAR LA LOGICA DEL REDUCER (VENTAJA) [CARPETA REDUCERS/ e.g]

export const initialState: ProductProps[] | null = JSON.parse(window.localStorage.getItem('cart') || '[]') 

export const updateLocalStorage = (state: ProductProps[]) => {
  window.localStorage.setItem('cart', JSON.parse(JSON.stringify(state)))
}

export const reducer = (state: ProductProps[], action: Action) => {
  const { type: actionType, payload: actionPayload } = action

  switch(actionType){
    case 'ADD_TO_CART':{
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if(productInCartIndex >= 0){
        const newState = state.map( item => {
          if(item.id === id){
            return {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : item.quantity
            }
          }
          return item
        })
        updateLocalStorage(newState)
        return newState
      }
      else {
        const newState = [
          ...state,
          {...actionPayload, quantity: 1}
        ]
        updateLocalStorage(newState)
        return newState
      }
    }
    case 'REMOVE_FROM_CART':{
      const { id, quantity } = actionPayload
      if(quantity && quantity > 1){
        const newState = [
          ...state,
          {...actionPayload, quantity: quantity - 1}
        ]
        updateLocalStorage(newState)
        return newState
      }
      else{
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
      }
    }
    case 'CLEAR_CART':{
      updateLocalStorage([])
      return initialState
    }
  }
}