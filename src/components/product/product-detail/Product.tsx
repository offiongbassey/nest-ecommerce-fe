import React from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import CategoryWidget from '@/components/widget/CategoryWidget'
import FilterWidget from '@/components/widget/FilterWidget'
import NewProductsWidget from '@/components/widget/NewProductsWidget'
import ProductDescription from './ProductDescription'
import RelatedProducts from './RelatedProducts'
import FooterBanner from '@/components/footer/FooterBanner'

const Product = () => {
  return (
    <>
    <section  className='padding-container max-container py-10'>
        <div className='lg:px-24 flex flex-col lg:flex-row gap-4'>
            <div className='text-gray-10 text-sm'>
                <div className='flex flex-col md:flex-row gap-4 py-10'>
                    <ProductImage />
                    <ProductInfo />
                </div>
                <ProductDescription />
                <RelatedProducts />
            </div>
            {/* Widget div */}
            <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4'>
                <CategoryWidget />
                <FilterWidget />
                <NewProductsWidget />
            </div>
        </div>
    </section>
    <FooterBanner image='/footer-banner-1.png'/>
    </>
  )
}

export default Product
