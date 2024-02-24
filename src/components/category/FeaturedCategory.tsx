import { FEATURED_CATEGORY, FEATURED_CATEGORY_BANNER } from "@/context/Context"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import { url } from "inspector"

const FeaturedCategory = () => {
  return (
    <section className="padding-container max-container py-6">
        <div className="hidden lg:flex gap-6 items-center justify-start text-green-30 font-[500]">
        <h3 className="text-2xl font-[600]">Featured Categories</h3>
        <Link href="/">Cake & Milk</Link>
        <Link href="/">Coffes & Teas</Link>
        <Link href="/" className="text-green-10">Pet Foods</Link>
        <Link href="/">Vegetables</Link>
        </div>

        {/* Featured Category Cards */}
        <div className="hidden lg:flex gap-4 items-center justify-between pt-6">
            {FEATURED_CATEGORY.map((item, index) => (
            <div style={{ backgroundColor: `${item.variant}` }} key={index} className={`w-full py-4 rounded-2xl items-center justify-center flex flex-col`}>
                <Image 
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                />
                <p className="text-sm font-[800] text-green-30">{item.title}</p>
                <p className="text-xs text-gray-10">{item.items} Items</p>
            </div>
            ))}
        </div>

        {/* Featured Category Banner */}
        <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-between py-6">
            {FEATURED_CATEGORY_BANNER.map((banner, index) => (
            <div key={index} style={{ backgroundImage: `url(${banner.image})`}} className="px-4 lg:px-10 py-16 rounded-2xl bg-center bg-no-repeat bg-cover w-full">
                <p className="text-green-30 font-[600] text-2xl lg:max-w-[250px] py-4">{banner.title}</p>
                {banner.title.length < 38  ? <br/> : null }
                <Button variant="btn_green" short={true} type="button">Shop Now</Button>
            </div>
            ))}
        </div>
    </section>
  )
}

export default FeaturedCategory
