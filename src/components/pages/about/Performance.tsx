import Image from 'next/image'
import React from 'react'

const Performance = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-8 py-10'>
        <Image
            src="/about-5.png"
            alt='performance'
            width={150}
            height={100}
            className='flex flex-1'
        />
        <div className='flex flex-1'>
           <div>
                <h4 className='font-[600] mb-3'>Our performance</h4>
                <h1 className='text-green-30 text-3xl font-[600] mb-6'>Your Partner for e-commerce grocery solution</h1>
                <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                <br/>
                <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
           </div>
        </div>
    </div>
    {/* ABout Classification who we are, history & mission */}
    <div className='flex flex-col md:flex-row gap-6'>
        <div>
            <h3 className='text-green-30 text-2xl font-[600] mb-3'>Who we are</h3>
            <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
            <h3 className='text-green-30 text-2xl font-[600] mb-3'>Our history</h3>
            <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
            <h3 className='text-green-30 text-2xl font-[600] mb-3'>Our mission</h3>
            <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
        </div>
    </div> 
    </> 
  )
}

export default Performance
