import Image from 'next/image';
import WhatWeProvide from './WhatWeProvide';
import Performance from './Performance';

const Welcome = () => {
  return (
    <div className='lg:px-24 py-10'>
        <div className='flex gap-10'>
            <Image
            src="/about-1.png"
            alt='about'
            width={450}
            height={550}
            className='rounded-2xl hidden lg:flex flex-1'
            />

            <div className='flex flex-1 items-center justify-between'>
                <div>
                <h2 className='text-green-30 text-3xl font-[800]'>Welcome to Nest</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.
                <br/>
                <br/>
                
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.
                </p>
                <div className='flex md:gap-4 py-10 items-center'>
                    <Image 
                    src="/about-2.png"
                    alt='about'
                    width={90}
                    height={120}
                    />
                     <Image 
                    src="/about-3.png"
                    alt='about'
                    width={90}
                    height={120}
                    />
                     <Image 
                    src="/about-4.png"
                    alt='about'
                    width={90}
                    height={120}
                    />
                </div>

                </div>
            </div>
        </div>

        {/* What we provide */}
        <WhatWeProvide />
        <Performance />
    </div>
  )
}

export default Welcome
