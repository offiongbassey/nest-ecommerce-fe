const ProductImage = ({ product_images }: { product_images: [{ id: number, image_url: string}]}) => {

  return (
    <div className="">
        <div style={{ backgroundImage: `url(${product_images?.length > 0 && product_images[0]?.image_url})`}} className="bg-cover bg-center p-36 border-2 border-green-10 mb-6">
        </div>
        <div className="flex gap-2">
          {product_images?.map((img) => (
            <div key={img.id} style={{backgroundImage: `url(${img.image_url})`}} className="bg-cover bg-center p-6 md:p-10 border border-green-10 rounded-2xl" />
          ))}
        </div>
    </div>
  )
}

export default ProductImage
