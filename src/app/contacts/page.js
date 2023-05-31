import React from 'react'

function page() {
  return (
     <section className='max-w-[1400px] p-4 md:w-[75%] mx-auto'>
        <h1 className='text-[2.5rem] leading-tight md:text-7xl mt-[54vh] md:leading-none font-heading tracking-wide font-black max-w-[20ch] p-2'>
          Our Contacts
        </h1>
          <div className='w-full bg-black h-[2px] mb-6 mt-10'></div>
          <h2>Leave us a message</h2>
          <form action="">
              <div>
                  
              <div>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id='name'/>
              </div>
              <div>
                  <label htmlFor="name">Your Email</label>
                  <input type="email" id='email'/>
              </div>
              </div>
              d
          </form>
   </section>     
  )
}

export default page