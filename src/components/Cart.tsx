import { useId, useState } from "react"
import { AddToCartIcon } from "./Icons"
import { useCartContext } from "../contexts/CartContext"

interface CartProps {
}

const Cart: React.FC<CartProps> = ({}) => {

  const { cart } = useCartContext()
  
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const cartCheckboxId = useId()

  return (
    <div className="flex flex-col items-center fixed top-0 right-4 p-2 gap-2">
     <div className="flex relative self-end">
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
     <aside className={`flex flex-col max-w-[300px] bg-sky-800/75 rounded-lg text-lg overflow-hidden ${cart.length > 0 && cartIsOpen ? "openModal" : "closeModal"}`}>
      <ul className="divide-y-[2px] divide-black">
        {cart.map((product, i)=>(
          <li className="flex items-center gap-4 text-white py-2 px-4 cursor-pointer select-none hover:bg-sky-800" key={i}>
            <img
              className="size-10 object-cover object-center rounded-full"
              src={product.thumbnail}
              alt="img"
            />
            <span className="grow truncate" >({product.quantity}) {product.title}</span>
            <span className="opacity-50 text-xl">${product.price}</span>
          </li>
        ))}
      </ul>
    </aside>
    </div>
  )
}

export default Cart