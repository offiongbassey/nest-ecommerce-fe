interface ProductCardProps {
    variant: string;
    product_images: [{ id: number, image_url: string}];
    type: string;
    children: React.ReactNode;
}

const ProductCard = ({ variant, product_images, type, children }: ProductCardProps) => {
  return (
    <div className='border border-gray-30 rounded-2xl text-gray-60 overflow-hidden'>
    {type !== "" ? 
        <span style={{ backgroundColor: `${variant}`}} className={`text-white text-sm px-6 py-2 rounded-br-2xl rounded-tl-2xl`}>{type}</span> : null
        }
        <br/>
        <div style={{ backgroundImage: `url(${product_images?.length > 0 && product_images[0]?.image_url})`}} className='bg-cover bg-center bg-no-repeat py-16 md:py-32 flex'/> 
            {children}
    </div>
  )
}

export default ProductCard
