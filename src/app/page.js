'use client'
import { useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

import HeroSection from '@/components/HeroSection';
import BluePrintSection from '@/components/BluePrintSection';
import CapabilitySection from '@/components/CapabilitySection';
import ClientSection from '@/components/ClientSection';
import InsightSection from '@/components/InsightSection';
import BusinessSection from '@/components/BusinessSection';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
   useEffect(() => {
    AOS.init({}); // Initialize AOS with default options
  }, []);
  return (
    <main className="">
      <HeroSection title='The Digital Transformation Agency' />
      <BluePrintSection />
      
      <CapabilitySection />
      <ClientSection />
      

     <InsightSection />
      
      <BusinessSection />
    </main>
  )
}
