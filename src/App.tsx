import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import Footer from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from 'config.ts'

function App(): JSX.Element {

  const {filters, setFilters, filterProducts} = useFilters()

  const [ products ] = useState(initialProducts)

  const filteredProducts = filterProducts(products)

  return (
    <div className="bg-black min-h-screen min-w-screen relative">
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </div>
  )
}

export default App
