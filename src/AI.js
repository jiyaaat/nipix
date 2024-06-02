import React from 'react';
import './AI.css';
import robo from './img/robo.png';
import { HiBadgeCheck } from "react-icons/hi";

function AI() {
  return (
    <div className='mb-[160px]'>
      <div className="main-content">
        <div className="content font-black">
          <img src={robo} alt="AI" className="ai-img w-[300px] mx-auto" />
          <h1 className="head">Robotics and Soft Skills Syllabus Overview</h1>
          <p className='lg:w-[700px] sm:w-[400px] sm:mx-2 mb-8'>Welcome to the Robotics and Soft Skills Program at Nipix Technology! Our comprehensive curriculum is designed to introduce students to the exciting world of robotics while nurturing essential soft skills vital for personal and academic growth. </p>
        </div>
      </div>
      <div className="learning-experience mt-14 mb-[100px]">
        <div className="title">What is special About Us?</div>
        <div className="learning-box">
          <div className="first">
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Soft Skills Development:</strong> </p>
              </div>
            </div>
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Interactive Learning Environment:</strong> </p>
              </div>
            </div>
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Experienced Instructors</strong> </p>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Hands-on Learning</strong> </p>
              </div>
            </div>
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Personalized Guidance</strong> </p>
              </div>
            </div>
            <div className="both">
              <div className="tick-icon"><HiBadgeCheck /></div>
              <div className="content1">
                <p className='points'><strong>Industry-Relevant Skills</strong> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="syllabus">
        <h1 className="title">Revised Syllabus Overview</h1>
        <div className="weeks-container">
          <div className="week">
            <h2 className='font-black'>Weeks 1-3: Introduction to Robotics</h2>
            <ul>
              <li>Overview of Robotics</li>
              <li>Basics of Simple Circuits</li>
              <li>Introduction to Arduino Microcontroller</li>
              <li>Understanding Circuits</li>
              <li>Introduction to Sensors and Actuators</li>
              <li>Hands-On Assembly of a Basic Robot</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Week 4: Soft Skills - Effective Communication</h2>
            <ul>
              <li>Introduction to Soft Skills</li>
              <li>Understanding the Importance of Effective Communication</li>
              <li>Interactive Activities to Improve Communication Skills</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Weeks 5-6: Project 1 - Light-Following Robot</h2>
            <ul>
              <li>Introduction to Light Sensors</li>
              <li>Hands-On Light-Following Robot Project</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Week 7: Soft Skills - Teamwork and Collaboration</h2>
            <ul>
              <li>Understanding the Importance of Teamwork</li>
              <li>Developing Collaborative Skills through Group Activities</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Weeks 8-9: Project 2 - Remote-Controlled Robot</h2>
            <ul>
              <li>Introduction to Remote Control</li>
              <li>Hands-On Remote-Controlled Robot Project</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Week 10: Soft Skills - Problem-Solving and Critical Thinking</h2>
            <ul>
              <li>Enhancing Problem-Solving Skills</li>
              <li>Developing Critical Thinking Abilities through Interactive Challenges</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Weeks 11-12: Project 3 - Sound-Activated Robot</h2>
            <ul>
              <li>Introduction to Sound Sensors</li>
              <li>Hands-On Sound-Activated Robot Project</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Week 13: Soft Skills - Adaptability and Resilience</h2>
            <ul>
              <li>Cultivating Adaptability and Resilience in Facing Challenges</li>
              <li>Strategies for Managing Change and Overcoming Obstacles</li>
            </ul>
          </div>
          <div className="week">
            <h2 className='font-black'>Weeks 14-16: Soft Skills - Project Showcase and Conclusion</h2>
            <ul>
              <li>Project Refinement and Troubleshooting</li>
              <li>Project Showcase and Peer Evaluation</li>
              <li>Conclusion and Next Steps</li>
              <li>Reflection on Soft Skills Development and Future Goals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI;
