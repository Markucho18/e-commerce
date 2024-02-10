import { type ProductProps } from "../types"
import Product from "./Product"

interface ProductsProps {
  products: ProductProps[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="flex justify-center items-center w-full ">
      <ul className="grid gap-4 grid-cols-auto-fit" >
        {products.slice(0, 8).map(product => (
          <Product productData={product}/>
        ))}
      </ul>
    </main>
  )
}

export default Products