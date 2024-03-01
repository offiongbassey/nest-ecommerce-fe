import Image from 'next/image'
import React from 'react'
import WidgetCard from './WidgetCard'

const CategoryWidget = () => {
  return (
    <WidgetCard title='Category'>
      <div className='flex gap-2 items-center justify-between border border-gray-90 rounded-xl px-3 py-1 mb-3'>
        <div className='flex gap-2 items-center justify-between'>
            <Image
                src="/icon/cat-milk.png"
                alt='milk'
                width={10}
                height={30}
            />
            <p>Milks & Dairies</p>
        </div>
        <p className='px-3 py-[5px] text-sm bg-green-20 rounded-full'>5</p>
      </div>
      <div className='flex gap-2 items-center justify-between border border-gray-90 rounded-xl px-3 py-1 mb-3'>
        <div className='flex gap-2 items-center justify-between'>
            <Image
                src="/icon/cat-milk.png"
                alt='milk'
                width={10}
                height={30}
            />
            <p>Milks & Dairies</p>
        </div>
        <p className='px-3 py-[5px] text-sm bg-green-20 rounded-full'>5</p>
      </div>
      <div className='flex gap-2 items-center justify-between border border-gray-90 rounded-xl px-3 py-1 mb-3'>
        <div className='flex gap-2 items-center justify-between'>
            <Image
                src="/icon/cat-milk.png"
                alt='milk'
                width={10}
                height={30}
            />
            <p>Milks & Dairies</p>
        </div>
        <p className='px-3 py-[5px] text-sm bg-green-20 rounded-full'>5</p>
      </div>
      
      </WidgetCard>
  )
}

export default CategoryWidget
