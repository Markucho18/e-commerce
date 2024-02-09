import { ProductProps } from "../types";
import { AddToCartIcon } from "./Icons"


interface Props {
  productData: ProductProps
}

const Product: React.FC<Props> = ({ productData }) => {

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  } = productData

  return (
    <li className="flex flex-col items-center text-white border-2 border-white p-4 gap-2">
      <img src={thumbnail} alt="thumbnail" className="h-1/3 object-cover object-center rounded aspect-video"/>
      <span className="text-2xl">{title}</span>
      <span className="text-lg">${price}</span>
      <span className="text-lg font-thin">{description}</span>
      <button>
        <AddToCartIcon />
      </button>
    </li>
  )
}

export default Product