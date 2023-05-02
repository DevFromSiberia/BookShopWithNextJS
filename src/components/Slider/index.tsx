'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Image from 'next/image'
import banner_1 from '../../../public/img/banner_1.jpg'
import banner_2 from '../../../public/img/banner_2.jpg'
import banner_3 from '../../../public/img/banner_3.jpg'
import 'swiper/scss'
// import 'swiper/scss/pagination'
function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <Image src={banner_1} alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner_2} alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner_3} alt="banner" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
