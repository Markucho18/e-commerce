import { type ProductProps } from "../types"
import Product from "./Product"

interface ProductsProps {
  products: ProductProps[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="flex justify-center items-center w-full ">
      <ul
        className="grid gap-4"
        style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}
      >
        {products.map(product => (
          <Product productData={product}/>
        ))}
      </ul>
    </main>
  )
}

export default Products