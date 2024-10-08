import React, { useRef, useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animated, useSpring } from '@react-spring/web';
import TypingText from './TypingText';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import ani from './Animation/Animation - 1721886092661.json';
import Services from './Services.js';
import './home_new.css'; // Ensure your styles are correctly imported
import { aboutData } from './data'; // Import your data as needed
import TeamSlider from './TeamSlider'; // Import TeamSlider component
import Footer from './Footer.js';
import img_new from './img/workshop/photo3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigate = useNavigate();
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } });
  const sectionsRef = useRef([]);
  const sectionCount = 4; // Adjust the section count as needed
  const [currentSection, setCurrentSection] = useState(0);

  // Function to handle smooth scrolling between sections
  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionCount) {
      sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(index);
    }
  };

  // Event listener for wheel scroll to determine direction
  useEffect(() => {
    const handleWheelScroll = (e) => {
      if (e.deltaY > 0 && currentSection < sectionCount - 1) {
        // Scroll down
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheelScroll);

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, [currentSection]);

  // Scroll to the top section (header) when clicking on the header
  const scrollToHeader = () => {
    scrollToSection(0);
  };

  // Load animation on component mount
  useEffect(() => {
    const animationContainer = document.getElementById('ani');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        animationData: ani,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
    }
  }, []);

  // Scroll to the next section
  const scrollToNextSection = () => {
    if (currentSection < sectionCount - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  return (
    <ParallaxProvider>
      <div className="text-left relative">
        <header id="header" className="header1 mx-[10%] min-h-screen flex text-white relative" onClick={scrollToHeader}>
          <div className="text-section flex-1 flex flex-col justify-center px-10">
            <animated.h1 style={fadeIn} className="heading text-8xl font-black mb-8">
              <span className="bg-ani">NIPIX TECH</span><br /><br />
              <span><TypingText text="THE FUTURE TECHNOLOGY" /></span>
            </animated.h1>
            <a 
              className="signup-button mt-14 inline-block px-6 py-3 bg-blue-500 text-blue-200 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded whitespace-nowrap"
              onClick={() => navigate('/login')}
            >
              Sign Up
            </a>
          </div>
          <div id="animation-container" className="animation-section flex-1 relative">
            <div id="ani" className="absolute inset-0 w-full h-full"></div>
          </div>
          {/* Down Arrow Icon */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" 
            onClick={scrollToNextSection}
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" className="text-white" />
          </div>
        </header>

        <main className="bg-gray-100">
          <section ref={(el) => (sectionsRef.current[0] = el)} className="h-screen py-20 px-6 flex items-center justify-center bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="container mx-auto">
                <div className="bg-transparent rounded-[50px] flex flex-col text-center xl:flex-row xl:items-center xl:text-left text-slate-500 xl:gap-x-[60px] xl:pb-0">
                  <div className="flex-1 flex justify-center items-center" data-aos="zoom-in-left">
                    <img className="h-56 sm:h-1/4 md:h-1/4 lg:h-full xl:h-full" src={aboutData.image} alt="" />
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
          <section ref={(el) => (sectionsRef.current[1] = el)} className="services-section py-20 px-6 flex items-center justify-center bg-gray-200">
            <div className="max-w-7xl mx-auto text-left">
              <Services />
            </div>
          </section>

          {/* Our Team Section with TeamSlider Component */}
          <section ref={(el) => (sectionsRef.current[2] = el)} className="our-team-section py-20 px-6 flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-screen-xl">
              <h1 className="text-4xl font-extrabold text-neutral-600 mb-8">Our Team</h1>
              <TeamSlider />
            </div>
          </section>

          {/* Wave SVG */}
          <div className="relative">
            <svg className="absolute bottom-0" width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
              <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 62.5 315 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z" /> 
              </defs>
              <g>
                <use href="#wavepath" y="125" fill="#0c2531"></use>
              </g>
            </svg>

            {/* Contact Section */}
            <div className="contact-section relative flex justify-center items-center h-64 z-10">
              <img src={img_new} alt="Background" className="absolute inset-0 mx-auto w-full h-full object-cover" />
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Get in touch with us</h2>
                <button className="bg-blue-600 text-white py-2 px-4 rounded">Let's Connect</button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <section ref={(el) => (sectionsRef.current[3] = el)} className="bg-[#0c2531]" style={{ minHeight: '100vh' }}>
            <Footer />
          </section>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
