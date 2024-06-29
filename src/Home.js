import React, { useEffect } from 'react';
import { heroData, aboutData, featuresData, footerData } from './data';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import TeamSlider from './TeamSlider';
import TypingText from './TypingText';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS with your desired configuration
    Aos.init({
      duration: 1800,
      offset: 0,
      // Add any other AOS customization options here
    });
  }, []);

  // Hero component with Parallax effect
  const Hero = () => {
    const { subtitle, btnText, image, image2 } = heroData;
    return (
      <section className='hero-section'>
        {/* Parallax background */}
        <div className="parallax-bg"></div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full relative z-10">
          <div className="w-full lg:w-[700px] xl:mx-5 sm:mx-6 p-8" data-aos='fade-up' data-aos-delay='700'>
            <img src={image2} alt="Hero Section" className="w-[500px] xl:ml-6 sm:ml-8 h-auto" />
            <p className='font-archivo mt-8 lg:ml-8 lg:mt-0 font-bold text-slate-500 text-left lg:text-left lg:w-full lg:text-[40px] sm:text-[40px] sm:text-left sm:w-[400px]'>
              <TypingText text="THE FUTURE TECHNOLOGY" />
            </p>
          </div>
          <div className="w-full lg:w-[640px] ml-4 lg:mr-6 p-6 lg:p-0" data-aos='fade-up' data-aos-delay='700'>
            <div className="w-full lg:w-[640px] ml-4 lg:mr-6 sm:mb-4 p-6 lg:p-0">
              <Spline scene="https://prod.spline.design/gAWYf1QmCL6myXao/scene.splinecode" />
              <img src={image} alt="Student" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  // About, Features, Team, and Footer components remain unchanged

  const About = () => {
    const { image, subtitle, title } = aboutData;
    return (
      <section className='my-[10px] xl:mt-[0px]' data-aos='fade-up' data-aos-offset='350'>
        <div className='container mx-auto'>
          <div className='bg-transparent rounded-[50px] min-h-[560px] flex flex-col text-center xl:flex-row xl:items-center xl:text-left text-slate-500 xl:gap-x-[60px] xl:pb-0'>
            {/* image */}
            <div className='flex-1' data-aos='zoom-in-left'>
              <img src={image} alt='' />
            </div>
            {/* text */}
            <div className='flex-1 xl:pr-12'>
              <h1 className="mb-4 font-extrabold text-neutral-600">{title}</h1>
              <p className='max-w-[474px] mx-auto xl:mx-0 font-bold text-slate-500 text-lg mb-12' data-aos='fade-up' data-aos-delay='400'>
                {subtitle}
              </p>
              <p className='max-w-[474px] italic mx-auto xl:mx-0 font-bold text-slate-500 text-lg mb-12' data-aos='fade-up' data-aos-delay='400'>
                Experience the power of Learning with us 💡
              </p>
              <a className='mt-14 p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded' onClick={() => navigate('/login')}>Sign Up</a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Features, Team, and Footer components remain unchanged

  const Features = () => {
    const { title, list } = featuresData;
    return (
      <section className='my-[70px] xl:my-[150px]'>
        <div className='container mx-auto flex-col text-slate-500'>
          {/* text */}
          <div className='text-center text-slate-500'>
            <h2 className='h2 mb-6 xl:mb-12 text-slate-500' data-aos='fade-down' data-aos-delay='100'>
              {title}
            </h2>
          </div>
          {/* feature list */}
          <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
            {list.map((feature, index) => {
              const { image, bgImage, title, description, linkText, delay } = feature;
              return (
                <div key={index} className='w-full max-w-[530px] text-slate-500 h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' data-aos='zoom-in' data-aos-offset='100' data-aos-delay={delay}>
                  <div className='max-w-[120px] xl:mr-7 xl:max-w-[232px]' data-aos='zoom-in-right' data-aos-delay={delay}>
                    <img src={image} alt='' />
                  </div>
                  <div className='max-w-[220px]'>
                    <h3 className='h3 mb-4 text-xxl text-slate-500 font-bold'>{title}</h3>
                    <p className='font-light italic mb-4'>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const Team = () => {
    return (
      <section className='relative'>
        <div className='container-fluid mx-auto mb-60px'>
          <div className=' min-h-[600px]' data-aos='fade-up' data-aos-offset='300'>
            <div className='flex flex-col justify-center px-2 xl:px-0 h-[600px]'>
              <h2 className='h2 text-slate-500 text-center mb-[80px]'>Team Members</h2>
              <div className="text-sm">
                <TeamSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => {
    // destructure footer data
    const { logo, address, email, phone, list1, list2, socialList } = footerData;
    return (
      <footer data-aos='fade-up' className='bg-violet-50 bg-opacity-50 rounded-4xl'>
        <div className='main-footer container mx-auto h-fit-full w-full'>
          <div className='flex flex-col xl:flex-row text-center xl:text-left xl:gap-y-12 xl:gap-y-6'>
            {/* info */}
            <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start mt-10'>
              {/* logo */}
              <a href='#'><img style={{ maxWidth: '45%' }} className='lg:mb-[65px] sm:mb-[30px] xl:ml-16 sm:ml-16 lg:ml-2' src={logo} alt='' /></a>
              {/* address */}
              <div className='lg:ml-12 max-w-[260px] font-light italic'>{address}</div>
              {/* email */}
              <div className='lg:ml-12 font-light italic'>{email}</div>
              {/* phone */}
              <div className='lg:ml-12 xl:mb-5 sm:mb-2 font-light italic'>{phone}</div>
            </div>
            {/* lists */}
            <div className='flex flex-1 lg:ml-4 flex-col xl:gap-y-14 sm:gap-y-8 xl:flex-row justify-between mt-10'>
              {/* list 1 */}
              <div>
                <ul className='flex flex-col xl:gap-y-4 sm:gap-y-2'>
                  {list1.map((item, index) => (
                    <li key={index}>
                      <a className='text-slate-500' href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* list 2 */}
              <div>
                <div className='font-bold text-slate-500 xl:mb-8 sm:mb-4'>Website Created by:</div>
                <ul className='flex flex-col xl:gap-y-4 xl:gap-y-2'>
                  {list2.map((item, index) => (
                    <li key={index}>
                      <a className='text-slate-500' href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* social list */}
              <div>
                <div className='font-bold text-slate-500 mb-8'>Contact us:</div>
                <ul className='flex gap-y-4 gap-x-4 justify-center'>
                  {socialList.map((item, index) => (
                    <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all' key={index}>
                      <a className='text-slate-500 text-xl hover:text-white' href={item.href}>{item.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  // Render Home component
  return (
    <div>
      {/* Parallax background */}
      <div className="parallax-bg"></div>
      
      <Hero />
      <About />
      <div data-aos='fade-up'><ImageSlider/></div>
      <Features />
      <Team/>
      <Footer />
      <div className='cursor'></div>
    </div>
  );
};

export default Home;
