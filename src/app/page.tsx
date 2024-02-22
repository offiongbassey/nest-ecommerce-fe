import Banner from "@/components/banner/Banner";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import DailyBestSells from "@/components/product/DailyBestSells";
import DealsOfDay from "@/components/product/DealsOfDay";
import PopularProducts from "@/components/product/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedCategory />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfDay />
    </main>
  );
}
