'use client'
import Image from 'next/image'
import { MouseEvent, useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Swiper as SwiperType } from 'swiper/types' // Importing Swiper types for TypeScript
import SwiperClass from 'swiper'
import { Autoplay } from 'swiper/modules'
import { TGalleryWorkLifeAtMores } from '@/types/gallery_work_at_mores'
import { customConfig } from '../../../../../config'

type TCareerSwiperProps = {
  images: TGalleryWorkLifeAtMores[] | null
}

const CareerSwiper = ({ images }: TCareerSwiperProps) => {
  const handleSlideChange = (swiper: SwiperType) => {
    if (window.innerWidth > 768) {
      setTimeout(function () {
        // Remove existing classes from all slides
        const allSlides = swiper.el?.querySelectorAll('.swiper-slide')
        allSlides?.forEach((slide) => {
          slide.classList.remove(
            'career-image-prev-active',
            'career-image-active',
            'career-image-next-active'
          )
        })

        // Add new classes to the active slides
        const firstSlide = swiper.el?.querySelector('.swiper-slide-active')
        const secondSlide = firstSlide?.nextElementSibling
        const thirdSlide = secondSlide?.nextElementSibling
        const fourthSlide = thirdSlide?.nextElementSibling
        const fifthSlide = fourthSlide?.nextElementSibling
        if (firstSlide) firstSlide.classList.add('career-image-prev-active')
        if (secondSlide) secondSlide.classList.add('career-image-prev-active')
        if (thirdSlide) thirdSlide.classList.add('career-image-active')
        if (fourthSlide) fourthSlide.classList.add('career-image-next-active')
        if (fifthSlide) fifthSlide.classList.add('career-image-next-active')
      }, 100)
    } else {
      setTimeout(function () {
        // Remove existing classes from all slides
        const allSlides = swiper.el?.querySelectorAll('.swiper-slide')
        allSlides.forEach((slide) => {
          slide.classList.remove(
            'career-image-prev-active',
            'career-image-active',
            'career-image-next-active'
          )
        })

        // Add new classes to the active slides
        const firstSlide = swiper.el?.querySelector('.swiper-slide-active')
        const secondSlide = firstSlide?.nextElementSibling
        const thirdSlide = secondSlide?.nextElementSibling
        if (firstSlide) firstSlide.classList.add('career-image-prev-active')
        if (secondSlide) secondSlide.classList.add('career-image-active')
        if (thirdSlide) thirdSlide.classList.add('career-image-next-active')
      }, 100)
    }
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const slide = event.currentTarget
    if (slide.classList.contains('career-image-next-active')) {
      swiperRef.current?.swiper?.slideNext()
    } else if (slide.classList.contains('career-image-prev-active')) {
      swiperRef.current?.swiper?.slidePrev()
    }
  }

  const additionalImages = []
  if (images && images.length <= 6) {
    const totalAddedCount = Math.floor(6 / images.length)
    for (let index = 0; index < totalAddedCount; index++) {
      additionalImages.push(...images)
    }
  }

  const swiperRef = useRef<SwiperRef | null>(null)
  return (
    <div className="pt-50 career-swiper">
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        breakpoints={{
          // 768px and up: slidesPerView is 5
          768: {
            slidesPerView: 5,
          },
          // Default: slidesPerView is 3
          0: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images &&
          images.map((image) => {
            const imageSrc = `${customConfig.POCKETBASE_FILE_URL}/gallery_work_at_mores/${image.id}/${image.image}`
            return (
              <SwiperSlide key={`slide-${image.id}`} onClick={handleClick}>
                <Image
                  src={imageSrc}
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
        {additionalImages &&
          additionalImages.map((image) => {
            const imageSrc = `${customConfig.POCKETBASE_FILE_URL}/gallery_work_at_mores/${image.id}/${image.image}`
            return (
              <SwiperSlide key={`slide-${image.id}`} onClick={handleClick}>
                <Image
                  src={imageSrc}
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
