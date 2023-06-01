import BusinessSection from '@/components/BusinessSection'
import InsightSection from '@/components/InsightSection'
import React from 'react'

function page() {
    return (
      <>
    <section className='max-w-[1400px] p-4 md:w-[75%] mx-auto'>
        <h1 className='text-[2.5rem] leading-tight md:text-7xl mt-[54vh] md:leading-none font-title tracking-wide font-black max-w-[20ch] p-2'>
          Our Insights
        </h1>
                <div className='w-full bg-black h-[2px] mb-6 mt-10'></div>
        
        <div className='mb-10'>
        <h1 className="text-2xl md:text-4xl md:leading-tight md:pr-10 font-title tracking-wide font-black md:font-extrabold">We discuss and share ideas that will change your business and our society. The Our insights cover topics ranging from AI, data and transformation to major industry developments, present tech innovations and other issues that impact the digital future of Africa.</h1>
          </div>
            </section>
          <InsightSection />
          <BusinessSection />
            </>
  )
}

export default page