import Filters from "./Filters"

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center gap-2 text-white w-full p-2">
      <h1 className="text-6xl">React Shop</h1>
      <Filters/>
    </header>
  )
}

export default Header