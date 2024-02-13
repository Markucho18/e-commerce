import { useEffect } from "react"
import { useCartContext } from "../contexts/CartContext"
import { ProductProps } from "../types"

interface CartItemProps {
/*   onAdd: (product: ProductProps) => void 
  onRemove: (product: ProductProps) => void  */
  product: ProductProps
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {

  const { addToCart, removeFromCart } = useCartContext()

  useEffect(()=>{
    const { quantity } = product
    console.log({ quantity })
  },[product.quantity])

  return (
    <li className="flex flex-col gap-4 text-white py-2 px-4 cursor-pointer select-none hover:bg-sky-800">
      <div className="flex w-full items-center gap-4">
        <img
          className="size-10 object-cover object-center rounded-full"
          src={product.thumbnail}
          alt="img"
        />
        <p className="grow truncate" >{product.title}</p>
        <p className="opacity-50 text-xl">${product.price}</p>
      </div>
      <div className="flex justify-center w-full items-center gap-4 px-1">
        <p>Quantity:</p>
        <p className="bg-zinc-500/50 py-1 px-3 rounded-lg">{product.quantity}</p>
        <button
          className="bg-black/50 font-bold py-1 px-2 rounded-lg active:translate-y-1 transition-transform ease-in-out duration-100"
          onClick={() => addToCart(product)}
        >
          +
        </button>
        <button
          className="bg-black/50 font-bold py-1 px-2 rounded-lg active:translate-y-1 transition-transform ease-in-out duration-100"
          onClick={() => removeFromCart(product)}
        >
          -
        </button>
      </div>
    </li>
  )
}

export default CartItem