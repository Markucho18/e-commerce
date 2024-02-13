import { useCartContext } from "../contexts/CartContext";
import { ProductProps } from "../types";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"


interface Props {
  productData: ProductProps
}

const Product: React.FC<Props> = ({ productData }) => {

  const { cart, addToCart, removeFromCart } = useCartContext()

  const checkCartInProduct = (product: ProductProps) => {
    return cart.some(item => item.id === product.id)
  }

  const {
/*     id, */
    title,
    description,
    price,
/*     discountPercentage,
    rating,
    stock,
    brand,
    category, */
    thumbnail,
/*     images */
  } = productData

  return (
    <li className="flex flex-col items-center text-white border-2 border-white p-4 gap-2">
      <img src={thumbnail} alt="thumbnail" className="h-1/3 object-cover object-center rounded aspect-video"/>
      <p className="text-2xl w-full truncate text-center">{title}</p>
      <p className="text-lg">${price}</p>
      <p className="grow text-lg font-thin">{description}</p>
      <button
        style={{backgroundColor: checkCartInProduct(productData) ? "#ef4444" : "#0ea5e9"}}
        className="flex justify-center w-full border-white border-2 rounded p-2 hover:bg-zinc-700 active:translate-y-1 transition-transform ease-in-out duration-100"
        onClick={() => checkCartInProduct(productData) ? removeFromCart(productData) : addToCart(productData)}
      >
        {checkCartInProduct(productData) ? <RemoveFromCartIcon size={30}/> : <AddToCartIcon size={30}/>}
      </button>
    </li>
  )
}

export default Product