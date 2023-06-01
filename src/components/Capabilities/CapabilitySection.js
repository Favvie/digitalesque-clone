import React from 'react'
import {HiPlus} from 'react-icons/hi'


function CapabilitySection() {
  return (
    <section className='flex flex-col'>
        <div className="px-6 md:px-44 py-10 md:col-span-3"><span className="block"><h3 className="text-xl md:text-3xl font-title tracking-wide font-bold">Our Capabilities</h3></span></div>
         <div className='flex flex-col w-full md:flex-row'>
          <div className=' min-h-[55vh] md:min-h-[80vh] h-full inset-0 z-0 bg-da bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
            <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black  w-full">
            <h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center"> Digital Advisory <HiPlus/></h2>

            </div>

          </div>
          <div className=' min-h-[55vh] md:min-h-[80vh] h-full bg-ds bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
 <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black w-full">
            <h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center">Data Science Consulting <HiPlus/></h2>

            </div>
          </div>
          <div className=' min-h-[55vh]  md:min-h-[80vh] h-full bg-culture bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
 <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black w-full">
            <h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center"> Digital Culture Advisory   <HiPlus/></h2>

                  </div>
              </div>
          <div className=' min-h-[55vh]  md:min-h-[80vh] h-full bg-pe bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
 <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black w-full">
            <h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center"> Process Reengineering   <HiPlus/></h2>

                  </div>
              </div>
         
        </div>
        <div className='flex flex-col w-[70%] mx-auto py-6 mr-0 md:mr-auto'>
        <p className='underline font-extrabold text-lg p-2 self-end hover:text-gray-500'>All Capabilities</p>
        </div>
      </section>
    )
}

export default CapabilitySection