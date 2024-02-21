import Banner from "@/components/banner/Banner";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedCategory />
    </main>
  );
}
