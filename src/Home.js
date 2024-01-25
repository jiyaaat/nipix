import React, { useEffect } from 'react';
import { heroData, aboutData, featuresData,  footerData } from './data';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

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
  // Hero component
  const Hero = () => {
    const { title, subtitle, btnText, image ,image2} = heroData;
    return (
      <section className='lg:h-[900px] py-12'>
        {/* Header component */}
        <div className="flex justify-center items-center">
            <div className="mr-8 p-8 w-[600px] h-auto"
            data-aos='fade-up'
            data-aos-delay='700'>
                <img src={image} alt="Student"  />
            </div>
            <div  className="w-1/2 h-auto"
            data-aos='fade-up'
            data-aos-delay='700' >
                <img src={image2} alt="Hero Section"/>
                <h1 className='font-archivo text-[25px] font-bold text-white'>" THE <span className='text-[#3A75E2]'>FUTURE</span> TECHNOLOGY "</h1>
            </div>
        </div>
      </section>
    );
  };

  // About component
  const About = () => {
    const { image, subtitle ,title} = aboutData;
    return (
      <section
        className='my-[30px] xl:mt-[0px]'
        data-aos='fade-up'
        data-aos-offset='350'
      >
        <div className='container mx-auto'>
        <div className='bg-transparent rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
            {/* image */}
            <div className='flex-1' data-aos='zoom-in-left'>
              <img src={image} alt='' />
            </div>
            {/* text */}
            <div className='flex-1 xl:pr-12'>
              <h1>{title}</h1>
              <p
                className='max-w-[474px] mx-auto xl:mx-0 text-white text-lg'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Features component
  const Features = () => {
    const { title,  list } = featuresData;
    return (
      <section className='my-[70px] xl:my-[150px]'>
        <div className='container mx-auto'>
          {/* text */}
          <div className='text-center'>
            <h2
              className='h2 mb-6 xl:mb-12 text-white'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              {title}
            </h2>
            
          </div>
          {/* feature list */}
          <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
            {list.map((feature, index) => {
              const { image, bgImage, title, description, linkText, delay } =
                feature;
              return (
                <div
                  key={index}
                  className='w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                  data-aos='zoom-in'
                  data-aos-offset='100'
                  data-aos-delay={delay}
                >
                  
                  <div
                    className='max-w-[120px] xl:mr-7 xl:max-w-[232px]'
                    data-aos='zoom-in-right'
                    data-aos-delay={delay}
                  >
                    <img src={image} alt='' />
                  </div>
                  <div className='max-w-[220px]'>
                    <h3 className='h3 mb-4'>{title}</h3>
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

  

  const Footer = () => {
    // destructure footer data
    const { logo, address, email, phone, list1, list2, socialList } = footerData;
    return (
      <footer data-aos='fade-up' className='bg-gray-200 '>
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12 '>
            {/* info */}
            <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start mt-10'>
              {/* logo */}
              <a href='#'>
              <img style={{ maxWidth: '45%' }} className='mb-[65px]' src={logo} alt='' />
            </a>

              {/* address */}
              <div className='max-w-[260px] mb-5 text-primary font-bold'>
                {address}
              </div>
              {/* email */}
            <div className='font-light italic'>{email}</div>
            {/* phone */}
            <div className='font-light italic'>{phone}</div>
            </div>
            {/* lists */}
            <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between mt-10'>
              {/* list 1 */}
              <div>
                <div className='font-extrabold text-primary mb-8'>About</div>
                <ul className='flex flex-col gap-y-4'>
                  {list1.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className='text-primary' href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* list 2 */}
              <div>
                <div className='font-extrabold text-primary mb-8'>WebsiteCreated by:</div>
                <ul className='flex flex-col gap-y-4'>
                  {list2.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className='text-primary' >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* social list */}
              <div>
                <div className='font-extrabold text-primary mb-8'>
                  Contact us:
                </div>
                <ul className='flex gap-y-4 gap-x-4 justify-center'>
                  {socialList.map((item, index) => {
                    return (
                      <li
                        className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'
                        key={index}
                      >
                        <a
                          className='text-white text-xl hover:text-white'
                          href={item.href}
                        >
                          {item.icon}
                        </a>
                      </li>
                    );
                  })}
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
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
