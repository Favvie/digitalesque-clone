'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Vision from '../../public/VISION.webp'

// import React, { useEffect, useState } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

// import Purpose from '../../public/PURPOSE.webp'
// import Mission from '../../public/MISSION.webp'

// const DotButton = (props) => {
//   const { selected, onClick } = props

//   return (
//     <button
//       className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
//       type="button"
//       onClick={onClick}
//     />
//   )
// }


// export const EmblaCarousel = () => {
//   const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [Autoplay()])
//   const [scrollSnaps, setScrollSnaps] = useState([])

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//          <div className="embla__slide">
//                 <div>
//                     <Image src={Vision}/>
//                 </div>
//             </div>
//             <div className="embla__slide">
//                 <div>
//                     <Image src={Purpose}/>
//                 </div>
//             </div>
//             <div className="embla__slide">
//                 <div>
//                     <Image src={Mission}/>
//                 </div>
//             </div>
//       </div>
//       <div className="embla__dots">
//         {scrollSnaps.map((_, index) => (
//           <DotButton
//             key={index}
//             selected={index === selectedIndex}
//             onClick={() => scrollTo(index)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


const Carousel = () => {
   <Swiper
      className="my-swiper-container"
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={50}
                    
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div>
         <Image src={Vision} />
         <p>hey pic</p>
                 </div>
                    </SwiperSlide>
                </Swiper>

}

export default Carousel