import { useState, useId, useEffect } from "react"
import { Filters as FiltersType } from "../types"

interface FiltersProps {
  onChange: React.Dispatch<React.SetStateAction<FiltersType>>
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    setMinPrice(value)
    onChange(prevState => ({
      ...prevState,
      minPrice: value
    }))
  }
  
  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  useEffect(()=>{
    console.log({
      minPriceFilterId,
      categoryFilterId
    })
  },[])

  return (
    <section className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-4">
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={2000}
          value={minPrice}
          onChange={handleMinPrice}
          />
          <p>{minPrice}</p>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="category">Category</label>
        <select
          id={categoryFilterId}
          onChange={handleCategory}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters