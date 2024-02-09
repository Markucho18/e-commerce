import { products } from './mocks/products.json'
import Products from "./components/Products"

function App(): JSX.Element {
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <Products products={products}/>
    </div>
  )
}

export default App
