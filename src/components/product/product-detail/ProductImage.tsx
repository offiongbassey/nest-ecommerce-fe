const ProductImage = () => {
  return (
    <div className="">
        <div style={{ backgroundImage: 'url("/product-img1.png")'}} className="bg-cover bg-center p-36 border-2 border-green-10 mb-6">
        </div>
        <div className="flex gap-2">
            <div style={{backgroundImage: 'url("/product-img2.png")'}} className="bg-cover bg-center p-6 md:p-10 border border-green-10 rounded-2xl" />
            <div style={{backgroundImage: 'url("/product-img3.png")'}} className="bg-cover bg-center p-6 md:p-10" />
            <div style={{backgroundImage: 'url("/product-img4.png")'}} className="bg-cover bg-center p-6 md:p-10" />
            <div style={{backgroundImage: 'url("/product-img5.png")'}} className="bg-cover bg-center p-6 md:p-10" />
        </div>
    </div>
  )
}

export default ProductImage
