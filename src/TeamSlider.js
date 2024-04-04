import React from 'react';
import { TeamsData } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination } from 'swiper/modules';

const TeamSlider = () => {
  return (
    <div className="swiper-container"> {/* Add a container div */}
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {TeamsData.map((slide, index) => {
          const { image, message, name, web, delay } = slide;
          return (
            <SwiperSlide
              key={index}
              className='bg-white  rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
            >
              <img src={image} alt='' className='w-1/4 rounded-full' />
              <div>
                <div className='text-lg text-primary font-bold'>{name}</div>
                <div className='mb-4 font-semibold text-accent-primary'>
                  {web}
                </div>
                <p className='max-w-[240px] text-black'>{message}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
