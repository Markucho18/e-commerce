import { Filters as FiltersType } from "../types"

interface FooterProps {
  filters: FiltersType
}

const Footer: React.FC<FooterProps> = ({ filters }) => {

  const {minPrice, category} = filters

  return (
    <footer className="flex gap-2 fixed left-0 bottom-0 p-2 rounded-lg bg-zinc-500/25 text-white ">
      <span>MinPrice: ${minPrice}</span>
      <span>Category: {category}</span>
    </footer>
  )
}

export default Footer