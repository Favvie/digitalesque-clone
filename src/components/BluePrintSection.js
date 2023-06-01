import React from 'react'

import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';


function BluePrintSection() {
  const animationVariants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <section className='mt-20 md:mt-10 max-w-[1400px] p-6 md:w-[75%] mx-auto mb-12'>

        
        <h1 data-aos='fade-down' data-aos-duration='2000' className="text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold">Our blueprint for digital transformation below gives an overview of the sequence, checklist, and guides at all levels of the organization through the journey ensuring that no area of the strategy is left unattended during the period of change:</h1>
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-10'>
          <div>
            <div className='w-full h-[2px] bg-black my-4'></div>
            <div className='p-2 md:p-8'>
              <h2 className='text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold'>Technology</h2>
              <p className=" leading-[30px] tracking-wide text-black md:line-clamp- mt-4">Digital transformation involves using digital technologies to remake a process to become more efficient or effective. The idea is to use technology not just to replicate an existing service in a digital form, but to use technology to transform that service into something significantly better.</p>
            </div>
            
          </div>
          <div>
            <div className='w-full h-[2px] bg-black my-4'></div>
            <div className='p-2 md:p-8'>
            <h2 className='text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold'>Data</h2>
              <p className="leading-[30px] tracking-wide text-black md:line-clamp- mt-4">Big Data is at the heart of digital transformation because it brings all the points together in one place for a more comprehensive and holistic view of the entire organization's ecosystem. Big data has to enable both the digitization and automation of operations which improves efficiency, spur innovation, and leads to new business models.</p>
              </div>
          </div>
          <div>
            <div className='w-full h-[2px] bg-black my-4'></div>
            <div className='p-2 md:p-8'>
            <h2 className='text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold'>Process</h2>
              <p className="leading-[30px] tracking-wide text-black md:line-clamp- mt-4">Digital transformation requires an end-to-end mindset, a rethinking of ways to meet customer needs, seamless connection of work activities, and the ability to manage across silos going forward. Process orientation is a natural fit with these needs necessitating radical process (re)engineering.</p>
              </div>
          </div>
          <div>
            <div className='w-full h-[2px] bg-black my-4'></div>
            <div className='p-2 md:p-8'>
            <h2 className='text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold'>Culture</h2>
              <p className="leading-[30px] tracking-wide text-black md:line-clamp- mt-4">The core driver of digital transformation is a digital culture because it empowers people to deliver results faster by increasing adoption, creating the right organizational alignment needed for the strategy to thrive dramatically reducing the gap between strategy and execution.</p>
              </div>
          </div>
        </div>
      </section>
    )
}

export default BluePrintSection