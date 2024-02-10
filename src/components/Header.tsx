import Filters from "./Filters"
import { Filters as FiltersType } from "../types"

interface HeaderProps {
  changeFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}

const Header: React.FC<HeaderProps> = ({ changeFilters }) => {
  return (
    <header className="flex flex-col items-center gap-2 text-white w-full p-2">
      <h1 className="text-6xl">React Shop</h1>
      <Filters onChange={changeFilters}/>
    </header>
  )
}

export default Header