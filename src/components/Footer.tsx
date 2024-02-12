import { useFiltersContext } from "../contexts/FiltersContext"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  const { filters } = useFiltersContext()

  const {minPrice, category} = filters

  return (
    <footer className="flex gap-2 fixed left-0 bottom-0 p-2 rounded-lg bg-zinc-500/25 text-white ">
      <span>MinPrice: ${minPrice}</span>
      <span>Category: {category}</span>
    </footer>
  )
}

export default Footer