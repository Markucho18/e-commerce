import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart.tsx'
import { IS_DEVELOPMENT } from './config.ts'
import { useFiltersContext } from './contexts/FiltersContext.tsx'
import { CartContextProvider } from './contexts/CartContext.tsx'

function App(): JSX.Element {

  const { filterProducts } = useFiltersContext()

  const [ products ] = useState(initialProducts)

  const filteredProducts = filterProducts(products)

  return (
    <CartContextProvider>
      <div className="bg-black min-h-screen min-w-screen relative">
        <Header/>
        <Products products={filteredProducts}/>
        <Cart />
        {IS_DEVELOPMENT && <Footer/>}
      </div>
    </CartContextProvider>
  )
}

export default App
