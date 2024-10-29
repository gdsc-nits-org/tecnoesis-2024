'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';;
import Image from 'next/image';
import images from '../../../public/data/spark.json';

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

const imageList: ImageData[] = images as ImageData[];

const Gallery = () => {
  return (
    <div className="h-fit w-full flex flex-col justify-center items-center gap-20 mb-[5rem]">
      <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-3xl 2xl:text-5xl 3xl:text-8xl">
        Photo Gallery
      </div>
      <div className='h-fit w-[90vw]'>
        <Swiper
          effect={'coverflow'}
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={true}
          initialSlide={Math.floor(images.length / 2)}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}

          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            380: {
              slidesPerView: 2,
            },
            450: {
              slidesPerView: 2,
            },
            789: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 3,
            },
          }}

          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {imageList.map((image) => (
            <SwiperSlide key={image.id} className="flex justify-center items-center">
              <div className="w-[15rem h-[15rem] lg:w-[25rem] lg:h-[25rem]  relative ">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >

  );
}

export default Gallery;
