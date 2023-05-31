'use client'
import BluePrintSection from '@/components/About/BluePrintSection'
import TeamSection from '@/components/About/TeamSection'
import BusinessSection from '@/components/BusinessSection'
import CapabilitySection from '@/components/CapabilitySection'
import HeroSection from '@/components/HeroSection'

import React from 'react'

const page = () => {
  return (
      <main>
          <HeroSection title='The Company'/>
          <BluePrintSection />
          <CapabilitySection />
          <TeamSection />
           <BusinessSection />
    </main>
  )
}

export default page