'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type AboutxSchoolSliderProps = {
  images: { image: string }[];
};

export const AboutxSchoolSlider = ({ images }: AboutxSchoolSliderProps) => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 24 },
          768: { slidesPerView: 2.5, spaceBetween: 28 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={img.image || index}>
            <div className="relative h-80 w-full">
              <Image
                src={img.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};