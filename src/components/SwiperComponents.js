import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { LARGLAPTOP, PHONE } from '../config/BREAKPOINTS';
import { useWindowSize } from '../hooks/useWindowSize';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperComponent = ({ children, slidesPerView =3 }) => {
    const {width} = useWindowSize()
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    spaceBetween={0}
    slidesPerView={width  < PHONE ?  1 : width > LARGLAPTOP ?3: 2}
    pagination={{ clickable: true }}
    // onSwiper={(swiper) => }
    // onSlideChange={() => console.log('slide change')}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    >
     {children}
    </Swiper>
  );
};

export default SwiperComponent;
