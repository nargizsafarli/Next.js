'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Slider.module.css'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
 


const Slider = () => {
  const router = useRouter()
   const t=useTranslations("Home")

const sliderData = [
  {
    id: 1,
    image: '/assets/home-5-png-4.png',
    description:"THE ULTIMATE STREET VIBE",
  },
  {
    id: 2,
    image: '/assets/home-5-png-8.png',
    description: 'STYLE YOUR LOKK NOW',
  },
  {
    id: 3,
    image: '/assets/home-5-png-9.png',
    description: 'THE ULTIMATE STREET VIBE',
  },
]

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.navigationButtons}>
        <div className={`swiper-button-prev ${styles.navBtn}`}>
        </div>
        <div className={`swiper-button-next ${styles.navBtn}`}>
        </div>
      </div>

            <Swiper
        modules={[Navigation, Autoplay]}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >

        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slideContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContainer}>
                <h2>{item.description}</h2>
                <button
                  className={styles.button}
                  onClick={() => router.push('/products')}
                >
                 {t("button")}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
