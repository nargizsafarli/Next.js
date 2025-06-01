'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Slider.module.css'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const sliderData = [
  {
    id: 1,
    image: '/assets/home-5-png-4.png', // public folderdəki şəkillər
    title: 'Beautiful Plant',
    description: 'This is a great plant for your home.',
  },
  {
    id: 2,
    image: '/assets/home-5-png-8.png',
    title: 'Stylish Jewelry',
    description: 'Best jewelry in town.',
  },
  {
    id: 3,
    image: '/assets/home-5-png-9.png',
    title: 'Modern Furniture',
    description: 'Perfect furniture for your room.',
  },
]

const Slider = () => {
  const router = useRouter()

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
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
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button
                  className={styles.button}
                  onClick={() => router.push('/products')}
                >
                  View Products
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
