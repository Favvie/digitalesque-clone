import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-[#148F7C] w-full text-white  py-6  overflow-hidden'>
          <div className=' mx-auto md:w-[80%] grid grid-cols-1 md:grid-cols-[1fr_0.5fr_0.5fr_1fr_0.75fr] gap-y-6 md:gap-x-4 pt-16 px-6 pb-16 '>
            {/* <section> */}
                <div className="border-t-2 border-white py-4"><span className="block flex-shrink-0"><p className="tracking-wider">The Digital<br/>Transformation Agency</p></span></div>
                  <div className='border-t-2 border-white py-4 space-y-2 md:col-start-4'>
                      <p className='tracking-wider'>Instagram</p>
                      <p className='tracking-wider'>Twitter</p>
                      <p className='tracking-wider'>LinkedIn</p>
                </div>
                  <div className='border-t-2 border-white py-4 space-y-2'>
                      <p className='tracking-wider'>Privacy Policy</p>
                      <p className='tracking-wider'>Terms & Conditions</p>
                      <p className='tracking-wider'>Site by Austere</p>
                </div>
              {/* </section> */}
              {/* <section> */}
                  <div className="border-t-2 border-white py-4 md:mt-44"><span className="block flex-shrink-0"><p className="tracking-wider">For new business enquiries <br />
office@thecorporation.xyz</p></span></div>
                  <div className='border-t-2 border-white py-4 space-y-2 md:col-start-4 md:mt-44'>
                      <p className='tracking-wider'>8 IBM Haruna Str, Utako District, Abuja 900211</p>
                </div>
                  <div className='border-t-2 border-white py-4 space-y-2 md:mt-44'>
                      <p className='tracking-wider'>All Rights Reserved 2023</p>
                </div>
              {/* </section> */}
          </div>
          
    </footer>
  )
}

export default Footer