import Image from "next/image";
import Arrow from "../Arrow";

const SearchItem = () => {
  return (
    <div className="hidden md:flex gap-2 border-2 border-green-20 rounded-lg p-2 items-center justify-between">
        <p className="text-md font-[600] text-green-30">All Categories</p> <Arrow/> <span>|</span>
        <input className="primary-input" placeholder="Search for items..." />
        <Image 
        src="/search.svg"
        alt="search"
        width={24}
        height={24}
        />
    </div>
  )
}

export default SearchItem
