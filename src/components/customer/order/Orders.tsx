import React from 'react'
import Sidebar from '../Sidebar'
import Link from 'next/link'
import FooterBanner from '@/components/footer/FooterBanner'
import FooterFeatures from '@/components/footer/FooterFeatures'

const Orders = () => {
  return (
    <>
    <section className='padding-container max-container py-16'>
        <div className='lg:px-24 flex flex-col md:flex-row gap-6 md:gap-14'>
            <Sidebar />
            <div className='w-full'>
                <h2 className='text-green-30 text-2xl font-[600] mb-4'>Your Orders</h2>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left border border-gray-20'>
                        <thead className='border-b border-gray-20'>
                            <tr>
                                <th className='px-2 py-3'>Order</th>
                                <th className='px-6 py-3'>Date</th>
                                <th className='px-6 py-3'>Status</th>
                                <th className='px-6 py-3'>Total</th>
                                <th className='px-6 py-3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-gray-20'>
                                <td className='px-2 py-4'>#1357</td>
                                <td className='px-6 py-4'>March 24, 2020</td>
                                <td className='px-6 py-4'>Processing</td>
                                <td className='px-6 py-4'>$125.00 for 2 item</td>
                                <td className='px-6 py-4 text-green-10 font-[500]'><Link href="/">View</Link></td>
                            </tr>
                            <tr className='border-b border-gray-20'>
                                <td className='px-2 py-4'>#1357</td>
                                <td className='px-6 py-4'>March 24, 2020</td>
                                <td className='px-6 py-4'>Processing</td>
                                <td className='px-6 py-4'>$125.00 for 2 item</td>
                                <td className='px-6 py-4 text-green-10 font-[500]'><Link href="/">View</Link></td>
                            </tr>
                            <tr className='border-b border-gray-20'>
                                <td className='px-2 py-4'>#1357</td>
                                <td className='px-6 py-4'>March 24, 2020</td>
                                <td className='px-6 py-4'>Processing</td>
                                <td className='px-6 py-4'>$125.00 for 2 item</td>
                                <td className='px-6 py-4 text-green-10 font-[500]'><Link href="/">View</Link></td>
                            </tr>
                            <tr className='border-b border-gray-20'>
                                <td className='px-2 py-4'>#1357</td>
                                <td className='px-6 py-4'>March 24, 2020</td>
                                <td className='px-6 py-4'>Processing</td>
                                <td className='px-6 py-4'>$125.00 for 2 item</td>
                                <td className='px-6 py-4 text-green-10 font-[500]'><Link href="/">View</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </section>
    <FooterBanner image='/footer-banner-2.png' />
    <FooterFeatures />
   </>
  )
}

export default Orders
