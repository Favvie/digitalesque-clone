'use client'
import React, {useState} from 'react'
import { HiPlus } from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'


function CapabilitySection() {
  const [advisoryOpen, setAdvisoryOpen] = useState(false)
  const [dsOpen, setDSOpen] = useState(false)
  const [cultureOpen, setCultureOpen] = useState(false)
  return (
    <section className='flex flex-col'>
        <div className="px-6 md:px-44 py-10 md:col-span-3"><span className="block"><h3 className="text-xl md:text-3xl font-title tracking-wide font-bold">Our Capabilities</h3></span></div>
         <div className='flex flex-col w-full md:flex-row'>
          <div className=' min-h-[55vh] md:min-h-[80vh] h-full inset-0 z-0 bg-da bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
          <div  class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black  w-full">
            <div className='accordion_header'>
              < h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center cursor-pointer" onClick={() => setAdvisoryOpen(!advisoryOpen)}> Digital Advisory <HiPlus className={`${advisoryOpen ? 'rotate-90 ': 'rotate-0'}`}/></h2>
            </div>
            {advisoryOpen && (
              <div data-aos='fade-up' className='accordion_content space-y-3 text-white text-sm font-medium leading-7 my-3 mt-6'>
              <p>
                Our digital advisory services are to help companies and organizations achieve their goals in innovation and digital transformation in the most efficient way and stay relevant using information technology and digital channels.
              </p>

              <p>
                The range of IT consulting services spans from building a long-term digital innovation strategy to immediate transformations like integrations with third-party services, cloud migration, business process automation, consulting on big data, and custom software development.
              </p>
            </div>
            )}
          </div>

          </div>
          <div className=' min-h-[55vh] md:min-h-[80vh] h-full bg-ds bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
              <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black  w-full">
            <div className='accordion_header'>
            < h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center cursor-pointer" onClick={() => setDSOpen(!dsOpen)}> Data Science Consulting <HiPlus className={`${dsOpen ? 'rotate-90 ': 'rotate-0'}`}/></h2>
            </div>
            {dsOpen && (
              <div className='accordion_content space-y-3 text-white text-sm font-medium leading-7 my-3 mt-6'>
              <p>
                Digitalesque renders data science consulting leveraging Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet our clients’ most deliberate analytics needs. We can share and implement data science best practices to drive your decision-making with careful forecasting and effective root-cause analysis.
              </p>

              
            </div>
            )}
          </div>
          </div>
        <div className=' min-h-[55vh]  md:min-h-[80vh] h-full bg-culture bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-end'>
          <div class="z-10 p-6 md:p-10 md:py-12 bg-gradient-to-t from-black  w-full">
            <div className='accordion_header'>
            < h2 className="text-xl md:text-2xl z-10 font-title tracking-wide font-extrabold text-white  flex justify-between items-center cursor-pointer" onClick={() => setCultureOpen(!cultureOpen)}> Digital Culture Advisory <HiPlus className={`${cultureOpen ? 'rotate-90 ': 'rotate-0'}`}/></h2>
            </div>
            {cultureOpen && (
              <div className='accordion_content space-y-3 text-white text-sm font-medium leading-7 my-3 mt-6'>
                <p>
                  This involves providing training and advice on different digital areas and empowering employees to be able to work within this environment. It also includes developing a strategy that allows companies and organizations to capitalize on the digital world and changing the mindset of employees to explore the ways that technology can help improve prospects.
              </p>

              <p>
Our Digital Culture specialists also help support teams to work collaboratively and to share ideas on digital strategy ensuring everyone is on board and embracing technology.              </p>
            </div>
            )}
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