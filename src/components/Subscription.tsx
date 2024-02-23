import SearchIcon from '@/svg/SearchIcon'
import React from 'react'
import Button from './Button'
import SendIcon from '@/svg/SendIcon'

const Subscription = () => {
  return (
    <div className='my-2 bg-white rounded-full pl-2 flex gap-2 items-center justify-between lg:max-w-[380px]'>
        <SendIcon color='gray-50' />
        <input className='w-full p-2 focus:outline-none bg-transparent text-[#6A6A6A]' placeholder='Your email address' />
        <Button type='button' variant='btn_green_round' >Subscribe</Button>
    </div>
  )
}

export default Subscription
