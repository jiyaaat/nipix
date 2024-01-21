import './App.css'
import './Navbar.css'
import './Home.css'
import { useEffect } from 'react';
import ImageSlider from './ImageSlider';
import Hero from './Hero';
import Logo from './img/logonew.png'



function Home() {
    useEffect(() => {
        const smoothScroll = () => {
            const scrollContainer = document.querySelector('.Home');
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        window.addEventListener('scroll', smoothScroll);

        return () => {
            window.removeEventListener('scroll', smoothScroll);
        };
    }, []);
    return (
        <div className="Home">
            <div className='banner'>
                <Hero />
            </div>
            <div className="about-us-container">
            <div className="left-section">
            <img className='Logo' src={Logo} alt="Company Logo" />
            </div>
            <div className="right-section">
                {/* Content for About Us */}
                <h2 className='text-white'>About Us</h2>
                <p>
                Nipixtech is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
                Driven by our belief that technology has the power to revolutionize the way we live and work, we have assembled a talented team of engineers, designers, and industry experts who are dedicated to pushing the boundaries of what is possible. 
                We constantly explore emerging technologies, stay up-to-date with the latest industry trends, and collaborate with partners to bring transformative solutions to market.
                </p>
            </div>
        </div>
        <ImageSlider />
        <div className="vision">
            <h2>🚩 Our Vision </h2>
            <p>Empowering passionate individuals to drive innovation in software and hardware, we cultivate a community fostering groundbreaking solutions that shape the future of the industry for societal benefit.</p>
        </div>
        <div className="mission">
            <h2>🎯 Our Mission</h2>
            <p>Nipix Tech revolutionizes STEM education from grades 1 to 11, emphasizing problem-solving skills. Our curriculum spans Physics, Maths, and Chemistry (1-7) and advances to Robotics, IoT, and Coding (8-11), ensuring practical mastery. Through a structured progression and hands-on experiences, we bridge theory with real-world application, nurturing continuous learning and problem-solving capabilities.</p>
        </div>
        </div>
    );
}

export default Home;
