import { products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import { useState } from 'react'
import { ProductProps, Filters } from './types'

function App(): JSX.Element {

  const [ products ] = useState(initialProducts)
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products: ProductProps[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <div className="bg-black min-h-screen min-w-screen">
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
    </div>
  )
}

export default App
