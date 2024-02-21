type SearchIconProps = {
    color: string;
    width: number
}
const SearchIcon = ({ color, width}: SearchIconProps) => {
  return (
    <svg width={width} height={width} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75 7.75L10 10" stroke={color} stroke-linecap="round" strokeLinejoin="round"/>
    <path d="M1 4.85714C1 6.98738 2.7269 8.71429 4.85714 8.71429C5.92409 8.71429 6.88992 8.28107 7.58819 7.58093C8.28409 6.88324 8.71429 5.92043 8.71429 4.85714C8.71429 2.7269 6.98738 1 4.85714 1C2.7269 1 1 2.7269 1 4.85714Z" stroke={color} stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default SearchIcon
