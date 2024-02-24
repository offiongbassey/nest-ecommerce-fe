import React from 'react'

const Achievement = () => {
  return (
    <div className='bg-achievement bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden'>
        <div className='bg-[#4B675A] bg-opacity-75 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white font-[600] py-10'>
            <div className='px-10 py-6 text-center'>
                 <h2 className='font-[800] text-4xl'>4+</h2>
                 <p>Glorious years</p>
            </div>
            <div className='px-10 py-6 text-center'>
                 <h2 className='font-[800] text-4xl'>102+</h2>
                 <p>Happy clients</p>
            </div>
            <div className='px-10 py-6 text-center'>
                 <h2 className='font-[800] text-4xl'>23+</h2>
                 <p>Countries</p>
            </div>
            <div className='px-10 py-6 text-center'>
                 <h2 className='font-[800] text-4xl'>9+</h2>
                 <p>Team advisor</p>
            </div>
            <div className='px-10 py-6 text-center'>
                 <h2 className='font-[800] text-4xl'>95%</h2>
                 <p>Products Sale</p>
            </div>
      </div>
    </div>
  )
}

export default Achievement
