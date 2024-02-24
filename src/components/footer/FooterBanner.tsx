import Subscription from '../Subscription'
import Image from 'next/image';

interface FooterBannerProps {
  image: string;
}

const FooterBanner = ({ image }: FooterBannerProps) => {
  return (
    <section className='padding-container max-container py-6 '>
        <div className='rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 bg-footer-banner bg-cover bg-center bg-no-repeat'>
            <div className='py-20 lg:py-14 px-6 md:px-14'>
                <h2 className='text-3xl text-green-30 font-[600]'>Stay home & get your daily needs from our shop</h2>
                <br/>
                <p className='text-gray-10 mb-10'>Start You'r Daily Shopping with <span className='text-green-10'>Nest Mart</span></p>
                <Subscription />
            </div>
            <div className='hidden md:block md:-ml-40 md:mt-40 lg:mt-40 lg:mr-6'>
                <Image
                src={image}
                alt="footer-banner"
                width={750}
                height={400}
                />
            </div>
        </div>
    </section>
  )
}

export default FooterBanner
