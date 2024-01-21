import React from 'react';
import HeroSecn from './img/herosecn (2).png';
import Student from './img/learningboy.png';

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="mr-8 p-8 w-[600px] h-auto">
                <img src={Student} alt="Student"  />
            </div>
            <div  className="w-1/2 h-auto" >
                <img src={HeroSecn} alt="Hero Section"/>
                <h1 className='font-archivo text-[32.4px] font-bold text-white'>" THE <span className='text-[#3A75E2]'>FUTURE</span> TECHNOLOGY "</h1>
            </div>
        </div>
    );
};

export default Hero;



