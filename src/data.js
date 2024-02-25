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
import teamMember1Img from './img/prashanth.jpg';
import teamMember2Img from './img/nishok.jpg';
import teamMember3Img from './img/sriram.jpg';


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
    Nipixtech innovates solutions for real-world problems, leveraging cutting-edge technology to drive positive change. With a dedicated team of experts, we explore emerging technologies and collaborate to bring transformative solutions to market, revolutionizing industries and improving lives.
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
        'Nipix Tech transforms STEM education (grades 1-11), integrating problem-solving from foundational concepts to advanced applications, fostering a culture of lifelong learning and innovation in every student.',
      linkText: 'Learn more',
      delay: '700',
    },
  ],
};

export const TeamsData = [
  {
    image:teamMember1Img ,
    name: 'Prashant',
    web: 'CEO',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: teamMember2Img,
    name: 'Nishok',
    web: 'CMO',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: teamMember3Img,
    name: 'Sriram',
    web: 'COO',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const footerData = {
  logo: LogoV2,
  address: 'Chennai 600005',
  email: 'nipixtech23@gmail.com',
  phone: '+91 93610 30360',
  list1: [
    {
      name: 'Learn',
      href: '/Learn',
    },
    {
      name: 'Events',
      href: '/Events',
    },
    {
      name: 'Signin/signup',
      href: '/login',
    },
    {
      name: 'Feedback',
      href: 'https://forms.gle/xbLYmoH2PanBvkqK9',
    },
  ],
  list2: [
    {
      name: 'Haaniya',
      href: 'https://www.linkedin.com/in/haaniya-iram-687402252/',
    },
    {
      name: 'Jiya',
      href: 'https://www.linkedin.com/in/jiya-thakur-7ab971251/',
    },
    {
      name: 'Preethi',
      href: 'https://www.linkedin.com/in/r-preethi-09254724b/',
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
