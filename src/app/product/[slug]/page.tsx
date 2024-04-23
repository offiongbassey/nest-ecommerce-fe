import Product from "@/components/product/product-detail/Product"

const page = ({ params }: {
  params: { slug: string}
}) => {
  return (
    <>
      <Product slug={params.slug}/>
    </>
  )
}

export default page
