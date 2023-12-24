import Banner from './img/Bannernew.png'
import Business from './img/Business Pitch Desk  .png';
import './App.css'
import './Navbar.css'
import './Home.css'
import Logo from './img/logonew.png'
function Home() {
    return (
        <div class="Home">
            <div className='banner'>
                <img src={Banner}></img>
            </div>
            <div className="about-us-container">
            <div className="left-section">
            <img className='Logo' src={Logo} alt="Company Logo" />
            </div>
            <div className="right-section">
                {/* Content for About Us */}
                <h2>About Us</h2>
                <p>
                Nipixtech is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
                Driven by our belief that technology has the power to revolutionize the way we live and work, we have assembled a talented team of engineers, designers, and industry experts who are dedicated to pushing the boundaries of what is possible. 
                We constantly explore emerging technologies, stay up-to-date with the latest industry trends, and collaborate with partners to bring transformative solutions to market.
                </p>
            </div>
        </div>
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
