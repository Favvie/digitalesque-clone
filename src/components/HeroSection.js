import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

function HeroSection({title}) {
  return (
    <section className='max-w-[1400px] p-4 md:w-[75%] mx-auto'>
        <h1 className='text-[2.5rem] leading-tight md:text-7xl mt-[54vh] md:leading-none font-heading tracking-wide font-black max-w-[20ch] p-2'>
          {title}
        </h1>
        <div className='w-full bg-black h-[2px] mb-6 mt-10'></div>

        <div>
          <div className='mb-10'>
            
             <Swiper
              className="my-swiper-container"
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    spaceBetween={50}
                    
                   
                >
                    <SwiperSlide>
                      <div className='h-[80vh] bg-purpose bg-cover bg-center bg-no-repeat flex'>
                  <p className=" self-end px-6 md:px-8 py-14 md:py-24 text-white text-xl md:text-3xl max-w-[40ch] font-heading font-semibold tracking-wide">Our PURPOSE is to improve AFrican lives through the digital transformation of Africa one project at a time.</p>
                      </div>
              </SwiperSlide>
                    <SwiperSlide>
                      <div className='h-[80vh] bg-mission bg-cover bg-center bg-no-repeat flex'>
                  <p className=" self-end px-6 md:px-8 py-14 md:py-24 text-white text-xl md:text-3xl max-w-[40ch] font-heading font-semibold tracking-wide">Our MISSION is to offer bespoke, trusted advanced digital solutions to the challenges of individuals, businesses, and governments in Africa by transforming systems.</p>
                      </div>
              </SwiperSlide>
                    <SwiperSlide>
                      <div className='h-[80vh] bg-vision bg-cover bg-center bg-no-repeat flex'>
                  <p className=" self-end px-6 md:px-8 py-14 md:py-24 text-white text-xl md:text-3xl max-w-[40ch] font-heading font-semibold tracking-wide">Our VISION is to be the premier human-centric digital transformation agency in Africa.</p>
                      </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
                    
            </Swiper>
            

          </div>
        </div>
      </section>
  )
}

export default HeroSection