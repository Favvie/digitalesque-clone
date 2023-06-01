import React from 'react'
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

function ClientSection() {
   const animationVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <section>
       
        
        <section data-aos='fade-down' data-aos-duration='2000' className="px-6 md:px-44 mx-auto pt-32 pb-14 bg-white"><span className="block"><h3 className="text-2xl md:text-4xl md:leading-tight max-w-[40ch] font-title tracking-wide font-extrabold">We have worked closely and successfully with government departments and major companies, and pride ourselves on meeting and exceeding our client’s high expectations. Here, you can find a selection of the many client organisations we already work closely alongside:</h3></span></section>

        <section className='max-w-[1400px] p-6 md:w-[75%] mx-auto'>
        <div className='w-full h-[2px] bg-black mb-6'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-2 mt-10'>
          <div className='md:col-start-2'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold">The Central Bank of Nigeria</h2>
              <section>
                <div></div>
              </section>
              <p className="md:text-lg text-black">Set-up of the eNaira New Media Infrastructure. Built eNaira.gov.ng and the Web App.</p>
              <section>
                <div></div>
              </section>
        <div className='w-full h-[2px] bg-black my-6'></div>
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold">Titan Trust Bank</h2>
              <p class="md:text-lg text-black">Web portal Development and Brand Identity</p>
        <div className='w-full h-[2px] bg-black my-6'></div>
            </div>
            <div>
              <h2 class="text-xl md:text-3xl font-title tracking-wide font-extrabold">The Securities and Exchange Commission (SEC)</h2>
              <p class="md:text-lg text-black">Website Redesign and Administrative Portals Development (Ongoing)</p>
        <div className='w-full h-[2px] bg-black my-6'></div>
            </div>
            <div>
              <h2 class="text-xl md:text-3xl font-title tracking-wide font-extrabold">The Infrastructural Corporation (InfraCo)</h2>
              <p class="md:text-lg text-black">Brand Identity, ICT Infrastructure and Website Development</p>
            </div>
          <div className='border-b-2 border-black  w-[80px] ml-auto my-6 hover:text-gray-500 hover:border-gray-500 hover:cursor-pointer font-extrabold'>See More</div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ClientSection