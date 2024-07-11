import React, { useRef, useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animated, useSpring } from '@react-spring/web';
import TypingText from './TypingText';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import droneAnimation from './Drone/drone_animation.json';
import Services from './Services.js';
import './home_new.css';
import { aboutData } from './data';
import TeamSlider from './TeamSlider';
import Footer from './Footer.js';
import img_new from './img/workshop/photo3.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const droneRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  const droneSpring = useSpring({
    top: -scrollY * 0.3, // Invert movement as you scroll
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (droneRef.current) {
      lottie.loadAnimation({
        container: droneRef.current,
        animationData: droneAnimation,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
    }
  }, []);

  return (
    <ParallaxProvider>
      <div className="text-center relative">
        <header id="header" className="bg-blue-200 min-h-screen flex flex-col items-center justify-center text-white relative">
          <animated.div
            ref={droneRef}
            className="absolute left-1/2 transform -translate-x-1/2 z-0 opacity-30"
            style={droneSpring}
          />
          <div className="relative z-10">
            <animated.h1 className="text-4xl font-black mb-8">
              <span>NIPIX TECH</span>
              <br />
              <br />
              <span>
                <TypingText text="THE FUTURE TECHNOLOGY" />
              </span>
            </animated.h1>
            <button
              className="mt-14 p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
              onClick={() => navigate('/login')}
            >
              Sign Up
            </button>
          </div>
        </header>

        <main className="bg-gray-100">
          <section
            ref={(el) => (sectionsRef.current[0] = el)}
            className="h-screen py-20 px-6 flex items-center justify-center bg-white"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="container mx-auto">
                <div className="bg-transparent rounded-[50px] min-h-[560px] flex flex-col text-center xl:flex-row xl:items-center xl:text-left text-slate-500 xl:gap-x-[60px] xl:pb-0">
                  <div className="flex-1" data-aos="zoom-in-left">
                    <img src={aboutData.image} alt="" />
                  </div>
                  <div className="flex-1 xl:pr-12">
                    <h1 className="mb-4 font-extrabold text-neutral-600">{aboutData.title}</h1>
                    <p
                      className="max-w-[474px] mx-auto xl:mx-0 font-bold text-slate-500 text-lg mb-12"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      {aboutData.subtitle}
                    </p>
                    <p
                      className="max-w-[474px] italic mx-auto xl:mx-0 font-bold text-slate-500 text-lg mb-12"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      Experience the power of Learning with us 💡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section
            ref={(el) => (sectionsRef.current[1] = el)}
            className="h-screen py-20 px-6 flex items-center justify-center bg-gray-200"
          >
            <div className="max-w-7xl mx-auto text-left">
              <Services />
            </div>
          </section>

          {/* Our Team Section with TeamSlider Component */}
          <section
            ref={(el) => (sectionsRef.current[2] = el)}
            className="h-screen py-20 px-6 flex items-center justify-center bg-gray-100"
          >
            <div className="w-full max-w-screen-xl">
              <h1 className="text-4xl font-extrabold text-neutral-600 mb-8">Our Team</h1>
              <TeamSlider />
            </div>
          </section>

          {/* Wave SVG */}
          <div className="relative">
            <svg
              className="absolute bottom-0"
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="auto"
              shape-rendering="auto"
              fill="#ffffff"
            >
              <defs>
                <path
                  id="wavepath"
                  d="M 0 2000 0 500 Q 62.5 315 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z"
                />
              </defs>
              <g>
                <use href="#wavepath" y="125" fill="#0c2531" />
              </g>
            </svg>

            {/* Contact Section */}
            <div className="relative flex justify-center items-center h-64 z-10">
              <img
                src={img_new}
                alt="Background"
                className="absolute inset-0 mx-auto w-[50%] h-full object-cover"
              />
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Get in touch with us</h2>
                <button className="bg-blue-600 text-white py-2 px-4 rounded">Let's Connect</button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="bg-[#0c2531]"
            style={{ height: '110vh' }}
          >
            <Footer />
          </section>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
