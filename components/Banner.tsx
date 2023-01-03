import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>Taifa-Hub Weekly Blog</h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to {""} 
                <span className='underline decoration-4 decoration-[#F7ABOA]'>Every Developer</span>
                Favourite blog in the Devosphere
            </h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            New product features | the latest in tech | weekly debugging and chatGpt
        </p>
    </div>
  )
}

export default Banner