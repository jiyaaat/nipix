// TeamSlider.js
import React from 'react';
import { TeamsData } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination } from 'swiper/modules';

const TeamSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {TeamsData.map((slide, index) => {
          const { image, message, name, web } = slide;
          return (
            <SwiperSlide
              key={index}
              className='slide-item bg-white rounded-[20px] border border-accent-primary max-h-[370px] p-[20px] flex items-center gap-x-[20px] shadow-xl'
            >
              <img src={image} alt={name} className='w-[80px] h-[80px] rounded-full' />
              <div className="description">
                <div className='text-lg text-primary font-bold'>{name}</div>
                <div className='mb-4 font-semibold text-accent-primary'>
                  {web}
                </div>
                <p className='text-black'>{message}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
