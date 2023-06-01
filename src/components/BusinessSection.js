import React from 'react'
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';


const BusinessSection = () => {
  
  return (
    <section>
       

          <section data-aos='fade-down' data-aos-duration='2000' className="px-6 md:px-44 mx-auto pt-32 bg-white"><span className="block"><h3 className="font-extrabold text-2xl md:text-3xl md:leading-tight font-title tracking-wide md:max-w-[47ch]">If you’re interested in working with us and want to find out more about the results we’ve achieved, we’d love to hear from you.</h3></span></section>
      <section className='p-6 md:w-[75%] mx-auto mb-10'>
        <div className='w-full h-[2px] bg-black my-6'></div>
           
        <div data-aos='fade-up' data-aos-duration='2000' className="ml-auto w-2/3 md:w-2/5 px-2 md:px-8 py-8"><span className="block"><h4 className="text-xl md:text-2xl max-w-[40ch] font-title tracking-wide font-bold">Can we do business?</h4></span><a href="mailto:office@thecorporation.xyz" className="underline text-lg md:text-xl hover:text-gray-500 text-black">Click this link to give us a shout.</a></div>
      </section>
    </section>
  )
}

export default BusinessSection