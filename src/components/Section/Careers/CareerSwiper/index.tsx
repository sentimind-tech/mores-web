'use client'
import Image from 'next/image'
import { MouseEvent, useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Swiper as SwiperType } from 'swiper/types' // Importing Swiper types for TypeScript
import SwiperClass from 'swiper'
const imageList = [
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
  '/images/careers/career-slider-1.png',
]

const CareerSwiper = () => {
  const handleSlideChange = (swiper: SwiperType) => {
    if (window.innerWidth > 768) {
      setTimeout(function () {
        // Remove existing classes from all slides
        const allSlides = swiper.el.querySelectorAll('.swiper-slide')
        allSlides.forEach((slide) => {
          slide.classList.remove(
            'career-image-prev-active',
            'career-image-active',
            'career-image-next-active'
          )
        })

        // Add new classes to the active slides
        const element = swiper.el.querySelector('.swiper-slide-active')
        const activeSlide = element?.nextElementSibling
        const nextSlide = activeSlide?.nextElementSibling
        const nextNextSlide = nextSlide?.nextElementSibling

        if (activeSlide) activeSlide.classList.add('career-image-prev-active')
        if (nextSlide) nextSlide.classList.add('career-image-active')
        if (nextNextSlide)
          nextNextSlide.classList.add('career-image-next-active')
      }, 100)
    }
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const slide = event.currentTarget
    console.log(slide.classList)
    if (slide.classList.contains('career-image-next-active')) {
      swiperRef.current?.swiper?.slideNext()
    } else if (slide.classList.contains('career-image-prev-active')) {
      swiperRef.current?.swiper?.slidePrev()
    }
  }

  const swiperRef = useRef<SwiperRef | null>(null)
  return (
    <div className="pt-50 career-swiper">
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        className="mySwiper"
      >
        {imageList.map((image, index) => {
          return (
            <SwiperSlide key={`slide-${index}`} onClick={handleClick}>
              <Image
                src={image}
                alt={'career-slider'}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full object-cover"
                priority={true}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CareerSwiper
