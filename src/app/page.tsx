import Banner from "@/components/banner/Banner";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import FooterBanner from "@/components/footer/FooterBanner";
import FooterFeatures from "@/components/footer/FooterFeatures";
import DailyBestSells from "@/components/product/DailyBestSells";
import DealsOfDay from "@/components/product/DealsOfDay";
import PopularProducts from "@/components/product/PopularProducts";
import TopAndTrending from "@/components/product/TopAndTrending";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedCategory />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfDay />
      <TopAndTrending />
      <FooterBanner />
      <FooterFeatures />
    </main>
  );
}
