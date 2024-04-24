import Link from "next/link";

interface WrapCardProps {
    image: string;
    children: React.ReactNode;
    potriate?: boolean;
    slug?: string;
}

const WrapCard = ({ image, children, potriate, slug }: WrapCardProps) => {
  return (
    <>
      <Link href={`/product/${slug}`}>
          <div style={{ backgroundImage: `url(${image})`}} className={`px-20 ${potriate ? "py-40 md:py-44" : "py-32"} bg-cover bg-center bg-no-repeat rounded-2xl`}/>
      </Link>
      <div className="p-3 lg:p-6 rounded-2xl m-4 -mt-20 bg-white shadow-xl text-gray-50">
            {children}
      </div>
     </>
  )
}

export default WrapCard
