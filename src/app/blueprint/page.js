'use client'
import BluePrintSection from '@/components/BluePrintSection'
import BusinessSection from '@/components/BusinessSection'
import HeroSection from '@/components/HeroSection'
import InsightSection from '@/components/InsightSection'
import React from 'react'

function page() {
  return (
    <main> 
          <HeroSection title='The Blueprint' />
          <BluePrintSection />
          <InsightSection />
          <BusinessSection />
    </main>
  )
}

export default page