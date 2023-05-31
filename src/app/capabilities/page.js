'use client'

import BusinessSection from '@/components/BusinessSection'
import CapabilitySection from '@/components/Capabilities/CapabilitySection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

function page() {
  return (
      <main>
          <HeroSection title='Our Capabilities' />
          <CapabilitySection />
          <BusinessSection />
    </main>
  )
}

export default page