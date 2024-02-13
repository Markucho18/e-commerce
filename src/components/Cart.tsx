import { useId, useState } from "react"
import CartItem from "./CartItem"
import { AddToCartIcon, ClearCartIcon } from "./Icons"
import { useCartContext } from "../contexts/CartContext"

interface CartProps {
}

const Cart: React.FC<CartProps> = ({}) => {

  const { cart, addToCart, removeFromCart, clearCart } = useCartContext()
  
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const cartCheckboxId = useId()

  return (
    <div className="flex flex-col items-center fixed top-0 right-4 p-2 gap-2">
     <div className="flex relative self-end">
      <span className="text-white text-lg mr-2">{cart.length}</span>
       <input
         className="absolute top-0 left-0 size-12 opacity-0 cursor-pointer cartHover z-10"
         id={cartCheckboxId}
         type="checkbox"
         onChange={() => setCartIsOpen(prevOpen => !prevOpen)}
       />
       <label
        className="bg-sky-500 rounded-full p-2 max-w-min text-white"
        htmlFor={cartCheckboxId}
      >
        <AddToCartIcon size={30}/>
      </label>
     </div>
     <aside className={`flex flex-col w-[300px] bg-sky-800/75 rounded-lg text-lg overflow-hidden ${cart.length > 0 && cartIsOpen ? "openModal" : "closeModal"}`}>
      <ul className="divide-y-[2px] divide-black">
        {cart.map((product, i)=>(
          <CartItem
            key={i}
            product={product}
          />
        ))}
      </ul>
     <footer className=" p-2 w-full">
        <button
          className="flex justify-center gap-2 w-full text-white bg-white/10 rounded-md py-2"
          onClick={clearCart}
        >
          <ClearCartIcon size={30}/>
          Clear Cart
        </button>
     </footer>
    </aside>
    </div>
  )
}

export default Cart