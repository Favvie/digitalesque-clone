'use client'

import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <header className=' bg-white md:py-4 fixed w-full z-50'>
      <div className='flex justify-between items-center max-w-[1200px] mx-auto p-6 md:w-[78%]'>
        <div data-aos='fade-down'>
          <svg className="w-auto h-[1.75rem] translate-y-[0.25rem]" viewBox="0 0 151.35 25.68"><path d="M30.67,4.87a6.36,6.36,0,0,1,3.87,1.31l.93-1.33h3.12L36.34,8.34a6.36,6.36,0,0,1-2.14,8.2l-3.05,3.52a18.38,18.38,0,0,1,8.09,2v3.55c-7.91-5.27-10.41-1-14.78-4.76L24.52,17A8.2,8.2,0,0,0,28,19.56l1.51-1.67.36-.34a6.37,6.37,0,0,1,.84-12.68Zm0,3.1a3.28,3.28,0,1,1-3.28,3.28h0A3.26,3.26,0,0,1,30.67,8h0Z" fill="#029e8e" fillRule="evenodd"></path><path d="M20.85,0a2,2,0,1,1-2,2A2,2,0,0,1,20.85,0Z" fill="#029e8e" fillRule="evenodd"></path><polygon points="19.13 4.87 22.56 4.87 22.56 17.61 19.13 17.61 19.13 4.87" fill="#029e8e" fillRule="evenodd"></polygon><polygon points="48.75 0 52.18 0 52.18 4.87 56.9 4.87 56.9 8.31 52.18 8.31 52.18 17.5 48.75 17.5 48.75 8.31 45.25 8.31 45.25 4.87 48.75 4.87 48.75 0" fill="#029e8e" fillRule="evenodd"></polygon><path d="M64.93,4.87a6.31,6.31,0,0,1,3.45,1V4.72h3.44V17.5H68.38v-.91A6.37,6.37,0,1,1,64.93,4.87Zm0,3.22a3.16,3.16,0,1,1-3.16,3.16h0a3.15,3.15,0,0,1,3.15-3.15Z" fill="#029e8e" fillRule="evenodd"></path><polygon points="74.42 0 77.86 0 77.86 17.61 74.42 17.61 74.42 0" fill="#029e8e" fillRule="evenodd"></polygon><path d="M92,13.1H83.4A3.14,3.14,0,0,0,86,14.4a3.09,3.09,0,0,0,1-.17h4.61A6.55,6.55,0,1,1,92,13.1ZM83.18,9.67h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,83.18,9.67Z" fill="#029e8e" fillRule="evenodd"></path><path d="M115.24,4.87a6.37,6.37,0,1,0,3.32,11.81v9H122V4.87h-3.43V5.8A6.41,6.41,0,0,0,115.24,4.87Zm0,3.21a3.16,3.16,0,1,0,3.16,3.16,3.15,3.15,0,0,0-3.16-3.16Z" fill="#029e8e" fillRule="evenodd"></path><path d="M133.45,4.87h3.44v6.49h0a6.37,6.37,0,0,1-12.51,1.57h0a6.63,6.63,0,0,1-.21-1.26h0V4.87h3.44V12.4a3.15,3.15,0,0,0,5.86,0V4.87Z" fill="#029e8e" fillRule="evenodd"></path><path d="M103.39,13H97.66l-3,.14A6.37,6.37,0,0,1,105.4,6.93l-2.2,2.33a3.16,3.16,0,0,0-5.1.26h8.78a6.66,6.66,0,0,1,.23,1.72,6.36,6.36,0,0,1-10.83,4.54l2.25-2.29a3.17,3.17,0,0,0,4.48-.06,2.89,2.89,0,0,0,.38-.47Z" fill="#029e8e" fillRule="evenodd"></path><path d="M41.88,0a2,2,0,1,1-2,2A2,2,0,0,1,41.88,0Z" fill="#029e8e" fillRule="evenodd"></path><polygon points="40.16 4.87 43.6 4.87 43.6 17.61 40.16 17.61 40.16 4.87" fill="#029e8e" fillRule="evenodd"></polygon><path d="M151,13.1h-8.6a3.14,3.14,0,0,0,2.6,1.3,3.09,3.09,0,0,0,1-.17h4.6a6.37,6.37,0,1,1,.47-1.13Zm-8.79-3.43h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,142.21,9.67Z" fill="#029e8e" fillRule="evenodd"></path><path d="M9.35,0A8.76,8.76,0,1,1,0,8.76,9.17,9.17,0,0,1,.2,6.88H3.78a5.32,5.32,0,1,0,6.86-3.1,5.41,5.41,0,0,0-1.86-.34H0V0Z" fill="#029e8e" fillRule="evenodd"></path></svg>
        </div>

          <nav className='flex items-center gap-2  cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <span className='font-medium'>Menu</span>
              <svg className="w-auto h-[0.625rem]" viewBox="0 0 39.52 5.8"><rect width="39.52" height="0.84" fill="inherit"></rect><rect y="4.96" width="39.52" height="0.84" fill="inherir"></rect></svg>
        </nav>
        </div>
        {/* mobile nav */}

        {isOpen && (
        <div data-aos={isOpen ? 'fade-up': 'fade-down'} data-aos-duration='1000' className='w-screen h-screen bg-[#148F7C] fixed z-10 top-0 text-white overflow-y-scroll ' onClick={() => { setIsOpen(false);  }}>
          <section className='max-w-[1400px] w-[90%] md:w-[80%] mx-auto'>
            <Link href='/'>

          <div className='flex justify-between py-8'>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold mt-12 md:mt-0">The Digitalesque Website Menu</h2>
          <div className='flex items-center gap-2 text-lg font-medium  absolute right-5 top-4 md:relative md:right-0 md:top-0 ' onClick={() => setIsOpen(!isOpen)}>Close <IoMdClose className='text-white text-[40px]'/></div>

          </div>
            </Link>
        <div className='w-full h-[2px] bg-white mb-6'></div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='md:col-start-2'>
                <Link href='/about'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">The Company</h2>
              <section>
                <div></div>
              </section>
              <p className="md:text-lg">Everything you need to know about our brand core.</p>
              <section>
                <div></div>
              </section>
        <div className='w-full h-[2px] bg-white my-6'></div>
                  </div>
                </Link>
                <Link href='/blueprint'>
                
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">The Blueprint</h2>
              <p className="md:text-lg">Our detailed plan on how we engage in business.</p>
        <div className='w-full h-[2px] bg-white my-6'></div>
                  </div>
                </Link>
                <Link href='/'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">The Clientele</h2>
              <p className="md:text-lg">The individuals and organizations we have served.</p>
        <div className='w-full h-[2px] bg-white my-6'></div>
                  </div>
                </Link>
                <Link href='/capabilities'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">Our Capabilities</h2>
                  <p className="md:text-lg">More details on the kind of workload we can carry.</p>
                          <div className='w-full h-[2px] bg-white my-6'></div>

                  </div>
                </Link>
                <Link href='/insights'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">Our Insights</h2>
                  <p className="md:text-lg">Thoughts from us or our friends in the industry.</p>
                          <div className='w-full h-[2px] bg-white my-6'></div>

                  </div>
                </Link>
                <Link href='/contacts'>
            <div>
              <h2 className="text-xl md:text-3xl font-title tracking-wide font-extrabold hover:underline">Our Contacts</h2>
                  <p className="md:text-lg">A list of options to connect with our firm.</p>
                          <div className='w-full h-[2px] bg-white my-6'></div>

                  </div>
                  </Link>
          </div>
        </div>
      </section>
          </div>
        )}
    </header>
  )
}

export default Header