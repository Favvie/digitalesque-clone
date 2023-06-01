import React from 'react'

function InsightSection() {
  return (
     <section>
        <div className="px-6 md:px-44 py-10 md:col-span-3"><span className="block"><h3 className="text-xl md:text-3xl font-title tracking-wide font-bold">Our Insights</h3></span></div>
        <div className='flex flex-col gap-x-1 w-full md:flex-row'>
          <div className=' min-h-[55vh] h-full bg-art1 bg-cover bg-center bg-no-repeat p-6 flex-1 flex flex-col justify-end'>
            {/* <div className='absolute h-full w-full top-0 bg-black left-0 opacity-5'></div> */}
            <h2 className="text-xl md:text-3xl z-10 font-title tracking-wide font-extrabold text-white hover:underline hover:text-gray-400"> Tuning into Africa's digital transformation</h2>
            <p className='text-white text-xs py-3'>LEARN MORE</p>
          </div>
          <div className=' min-h-[55vh] bg-art2 bg-center bg-cover bg-no-repeat p-6 flex-1 flex flex-col justify-end'>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold text-white hover:underline hover:text-gray-400 ">Digital transformation in Africa: three lessons from India's experience</h2>
            <p className='text-white text-xs py-3'>LEARN MORE</p>

          </div>
          <div className=' min-h-[55vh] bg-art3 bg-center bg-cover bg-no-repeat p-6 flex-1 flex flex-col justify-end'>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold text-white hover:underline hover:text-gray-400 ">The promises and perils of Africa's digital revolution</h2>
            <p className='text-white text-xs py-3'>LEARN MORE</p>

          </div>
          <div className=' min-h-[55vh] bg-art4 bg-center bg-cover bg-no-repeat p-6 flex-1 flex flex-col justify-end'>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold text-white hover:underline hover:text-gray-400">Improving Africa's digital and innovation ecosystems: five ways forward</h2>
            <p className='text-white text-xs py-3'>LEARN MORE</p>
          </div>
          
        </div>
<div className='flex flex-col w-[70%] mx-auto py-6 mr-0 md:mr-auto'>
        <p className='underline font-extrabold text-lg p-2 self-end hover:text-gray-500 hover:cursor-pointer'>More Insights</p>
        </div>
      </section>
  )
}

export default InsightSection