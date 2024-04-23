"use client";

import React, { useEffect } from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import CategoryWidget from '@/components/widget/CategoryWidget'
import FilterWidget from '@/components/widget/FilterWidget'
import NewProductsWidget from '@/components/widget/NewProductsWidget'
import ProductDescription from './ProductDescription'
import RelatedProducts from './RelatedProducts'
import FooterBanner from '@/components/footer/FooterBanner'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { getProductBySlug, getRelatedProducts } from '@/redux/features/productSlice'
import Button from '@/components/Button';
import Link from 'next/link';

type SlugType = {
    slug: string;
}

const Product = ({ slug }: SlugType) => {
    const dispatch = useDispatch<AppDispatch>();
    const { product, error, related_products } = useAppSelector((state) => state.product);

    useEffect(() => {
        if(typeof(window) !== undefined){
            dispatch(getProductBySlug(slug));
            dispatch(getRelatedProducts(slug))
        }
    }, [])
  return (
    <>
    <section  className='padding-container max-container py-10'>
    {error !== "" ? 
            (<div className='text-center justify-center flex items-center py-20 w-full'>
                <div>
                    <h2 className='text-3xl font-[600] text-green-30 mb-4'>Product Not Found</h2>
                    <Link href="/"><Button type='button' variant='btn_green' >Back to Home</Button></Link>
                </div>
            </div>)
            : (
        <div className='lg:px-24 flex flex-col lg:flex-row gap-4'>
            <div className='text-gray-10 text-sm'>
                <div className='flex flex-col md:flex-row gap-4 py-10'>
                    <ProductImage product_images={product.product_images} />
                    <ProductInfo product={product} />
                </div>
                <ProductDescription />
                <RelatedProducts related_products={related_products} />
            </div>
            {/* Widget div */}
            <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4'>
                <CategoryWidget />
                <FilterWidget />
                <NewProductsWidget />
            </div>
        </div>
         )}
    </section>
    <FooterBanner image='/footer-banner-1.png'/>
    </>
  )
}

export default Product
