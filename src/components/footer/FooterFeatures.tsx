import { FOOTER_FEATURES } from '@/context/Context'
import Image from 'next/image'
import React from 'react'

const FooterFeatures = () => {
  return (
    <div className='padding-container max-container py-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center'>
                {FOOTER_FEATURES.map((item,index) => (
                <div className='flex gap-4 bg-gray-91 rounded-2xl px-2 py-4 items-center' key={index}>
                    <Image
                    src={item.image}
                    alt={item.image_tag}
                    width={50}
                    height={56}
                    />
                    <div>
                        <h3 className='font-[600] text-green-30'>{item.title}</h3>
                        <p className='text-sm text-gray-60'>{item.desc}</p>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}

export default FooterFeatures
