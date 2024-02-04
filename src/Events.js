import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pic1 from './img/workshop2.png'
import pic2 from './img/workshop_avadi.jpg'
import pic3 from './img/seminar_1.png'
import { FaBriefcase } from 'react-icons/fa';

const WorkIcon = () => {
    return <FaBriefcase />;
};

const Event = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="20th January 2024"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <img src={pic1} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Ebenezer Modern Matriculation School</h3>
                <h4 className="m-4 vertical-timeline-element-subtitle text-white">Basic Robotics Workshop</h4>
                <p>
                A dynamic robotics workshop for grades VI to IX was conducted, on robotics, its challenges, and practical applications. The hands-on session, led by the team, allowed students to create and present their robots. 
                Valuable insights on entrepreneurship were shared, concluding with participants receiving certificates.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="7th July 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <img src={pic2} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Avadi Municipal Higher Secondary School</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">Basic Robotics Workshop</h4>
                <p>
                The workshop, initiated with the headmaster's permission, focused on robotics education. NIPIX TECH's President highlighted the evolution and importance of robotics. A seminar addressed challenges and the future of automation. Practical sessions guided students in building their own robots using various sensors. Group presentations were followed by rewards for the best one, and all participants received certificates.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="16th August 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <img src={pic3} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Kadambathur Government Higher Secondary School</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">Seminar on Career guidance</h4>
                <p>
                The career-building seminar aimed to guide students post-schooling. Beginning with an introduction to NIPIX TECH, sessions covered career essentials, industrial revolutions, business strategies, and programming importance. Doubt-clearing covered salary insights in domains like AI, Robotics, IoT, Full Stack, and AR/VR. The seminar concluded with entrepreneurship insights and a photo session.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Event;
