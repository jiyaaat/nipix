import React from 'react';
import { TeamsData } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import './slider.css';
import { Autoplay } from 'swiper/modules';

const TeamSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3} // Adjust based on how many slides you want to show at once
        centeredSlides={true}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {TeamsData.map((slide, index) => {
          const { image, message, name, web } = slide;
          return (
            <SwiperSlide
              key={index}
              className="slide-item bg-white rounded-[20px] border border-accent-primary max-h-[370px] p-[20px] flex items-center gap-x-[15px] shadow-xl"
            >
                <img src={image} alt={name} className="w-[30%] h-[30%] rounded-[5%]" />
              
              <div className="description">
                <div className="text-lg text-primary font-bold text-center">{name}</div>
                <div className="mb-4 font-semibold text-accent-primary text-center">{web}</div>
                <p className="text-black text-left">{message}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
