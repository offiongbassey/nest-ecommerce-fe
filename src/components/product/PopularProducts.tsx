import Link from "next/link"
import { POPULAR_PRODUCTS } from "@/context/Context"
import ProductItem from "./ProductItem"

const PopularProducts = () => {
  return (
    <section className='padding-container max-container'>
        <div className='text-green-30 text-xs lg:text-sm font-[600] flex flex-col lg:flex-row lg:gap-4 lg:items-center justify-between'>
            <h3 className='text-2xl'>Popular Products</h3>
            <div className='grid grid-cols-3 md:flex gap-2 md:gap-4'>
                <Link href="/" className='text-green-10'>All</Link>
                <Link href="/">Milks & Dairies</Link>
                <Link href="/">Coffes & Teas</Link>
                <Link href="/">Pet Foods</Link>
                <Link href="/">Meats</Link>
                <Link href="/">Vegetables</Link>
                <Link href="/">Fruits</Link>
            </div>
        </div>
        {/* List of Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6'>
        {POPULAR_PRODUCTS.map((product, index) => (
            <ProductItem 
            index={index} 
            product={product}
            alternative={false}
            />
        ))}
        </div>
    </section>
  )
}

export default PopularProducts
