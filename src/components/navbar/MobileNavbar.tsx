import DashIcon from '@/svg/DashIcon'
import HomeIcon from '@/svg/HomeIcon'
import SearchIcon from '@/svg/SearchIcon'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from 'postcss'
import React from 'react'
import Button from '../Button';
import { IoIosCloseCircleOutline } from "react-icons/io";


const MobileNavbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-screen md:hidden px-6 py-6 bg-white'>
     <div className='flex justify-between items-start'>
        <Image
            src="/logo.svg"
            alt='logo'
            width={161}
            height={46}
            className='pb-6'
        />
        <IoIosCloseCircleOutline className='text-green-30' size={40} />
     </div>

      <div className='my-2 bg-gray-40 rounded-full pl-2 flex gap-2 items-center justify-between'>
        <SearchIcon color='#6A6A6A' width={40} />
        <input className='w-full p-2 focus:outline-none bg-gray-40 text-[#6A6A6A]' placeholder='Search for Items' />
        <Button type='button' variant='btn_green_round' >Search</Button>
      </div>
      <ul className='flex flex-col gap-4 text-md font-[700] text-green-30'>
        <Link href="/">
            <li className='px-2 py-3 rounded-md bg-green-20 flex items-center'><HomeIcon className='fill-black' /> Home</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Home</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Shop</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Vendors</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Mega Menu</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Blog</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Pages</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Language</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Reviews</li>
        </Link>
        <Link href="/">
            <li className='px-2 py-3 flex items-center'><DashIcon /> Brands</li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileNavbar
