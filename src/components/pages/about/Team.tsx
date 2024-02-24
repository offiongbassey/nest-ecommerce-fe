import React from 'react'
import Title from './Title'
import Button from '@/components/Button'
import WrapCard from '@/components/card/WrapCard'
import FacebookIcon from '@/svg/FacebookIcon'
import TwitterIcon from '@/svg/TwitterIcon'
import InstagramIcon from '@/svg/InstagramIcon'
import YoutubeIcon from '@/svg/YoutubeIcon'

const Team = () => {
  return (
    <>
        <Title title='Our Team'/>
        <div className='py-10 flex flex-col md:flex-row gap-6 lg:px-24'>
            <div className='flex flex-col flex-1'>
                <h6 className='text-green-10 text-xs font-[600]'>Our Team</h6>
                <h2 className='text-green-30 font-[800] text-3xl mb-3'>Meet Our Expert Team</h2>
                <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                <br/>
                <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                <br/>
                <div className='max-w-44'>
                <Button type='button' variant='btn_green' short={true}>View All Members</Button>
                </div>
            </div>
            <div className='flex flex-1 flex-col'>
                <WrapCard potriate={true} image='"/about-ceo.png"'>
                    <div className='items-center text-center'>
                        <h4 className='text-green-30 font-[600] text-xl'>H. Merinda</h4>
                        <p className='text-sm'>CEO & Co-Founder</p>
                        <div className='flex gap-2 items-center justify-center'>
                            <FacebookIcon className='fill-green-10' />
                            <TwitterIcon className='fill-green-10' />
                            <InstagramIcon className='fill-green-10' />
                            <YoutubeIcon className='fill-green-10' />
                        </div>
                    </div>
                </WrapCard>
            </div>
            <div className='flex flex-1 flex-col'>
                <WrapCard potriate={true} image='"/about-head-eng.png"'>
                    <div className='items-center text-center'>
                        <h4 className='text-green-30 font-[600] text-xl'>Dilan Specter</h4>
                        <p className='text-sm'>Head Engineer</p>
                        <div className='flex gap-2 items-center justify-center'>
                            <FacebookIcon className='fill-green-10' />
                            <TwitterIcon className='fill-green-10' />
                            <InstagramIcon className='fill-green-10' />
                            <YoutubeIcon className='fill-green-10' />
                        </div>
                    </div>
                </WrapCard>
            </div>
        </div>
    </>
  )
}

export default Team
