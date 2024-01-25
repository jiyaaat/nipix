// import icons
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from './img/logonew.png';
import Feature1Img from './img/mission.png';
import Feature2Img from './img/vision.png';
import LogoV2 from './img/logonew.png';
import HeroImage from './img/learningboy.png';
import Feature1BgImg from './img/feature1_bg.png';
import Feature2BgImg from './img/feature2_bg.png';
import nipiximage from './img/herosecn (2).png';


export const heroData = {
  title: `Nipix Technology`,
  subtitle:
    'Emerging the technology with like minded people',
  btnText: 'Get Started',
  image: HeroImage,
  image2: nipiximage,
};

export const aboutData = {
    image: AboutImg,
    title: 'About Us',
    subtitle: `
      Nipixtech is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
  
      Driven by our belief that technology has the power to revolutionize the way we live and work, we have assembled a talented team of engineers, designers, and industry experts who are dedicated to pushing the boundaries of what is possible. 
  
      We constantly explore emerging technologies, stay up-to-date with the latest industry trends, and collaborate with partners to bring transformative solutions to market.
    `,
  };

export const featuresData = {
  title: 'Find Out A Little More About Us',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: ' Our Vision',
      description:
        'Empowering passionate individuals to drive innovation in software and hardware, we cultivate a community fostering groundbreaking solutions that shape the future of the industry for societal benefit.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: ' Our Mission',
      description:
        'Nipix Tech revolutionizes STEM education (grades 1-11) by emphasizing problem-solving skills. Our curriculum spans Physics, Maths, and Chemistry (1-7), advancing to Robotics, IoT, and Coding (8-11) for practical mastery. Through hands-on experiences, we bridge theory to real-world applications, fostering continuous learning',
      linkText: 'Learn more',
      delay: '700',
    },
  ],
};




export const footerData = {
  logo: LogoV2,
  address: 'Chennai 600005',
  email: 'nipixtech23@gmail.com',
  phone: '+91 93610 30360',
  list1: [
    {
      name: 'Learn',
      href: '#',
    },
    {
      name: 'Events',
      href: '#',
    },
    {
      name: 'Signin/signup',
      href: '#',
    },
    {
      name: 'Feedback',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Haaniya',
      href: '#',
    },
    {
      name: 'Jiya',
      href: '#',
    },
    {
      name: 'Preethi',
      href: '#',
    },
   
  ],
  socialList: [
    {
      icon: <FaPhoneAlt />,
      href: 'tel:+91 93610 30360',
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:nipixtech23@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/company/nipix-technology/',
    },
  ],
};

export const copyrightData = {
  text: '© xyz, 2022. All rights reserved. ',
  icon: <BsChatDotsFill />,
};
