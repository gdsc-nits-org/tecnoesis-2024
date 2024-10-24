'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import { Navigation, Autoplay } from 'swiper/modules'; 
import Image from 'next/image';
import images from '../../../public/data/spark.json';

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

const imageList: ImageData[] = images as ImageData[];

function Gallery() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true} 
      modules={[Navigation, Autoplay]} 
      className="w-full h-auto"
    >
      {imageList.map((image) => (
        <SwiperSlide key={image.id} className="flex justify-center items-center">
          <div className="w-full h-64 relative">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;
