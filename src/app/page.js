'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Vision from '../../public/VISION.webp'
import {HiPlus} from 'react-icons/hi'
import HeroSection from '@/components/HeroSection';
import BluePrintSection from '@/components/BluePrintSection';
import CapabilitySection from '@/components/CapabilitySection';
import ClientSection from '@/components/ClientSection';
import InsightSection from '@/components/InsightSection';
import BusinessSection from '@/components/BusinessSection';

// import  Carousel  from '@/components/Carousel'
// import Image from 'next/image'

export default function Home() {
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
