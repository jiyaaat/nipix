import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pic1 from './img/workshop2.png'
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
                <h4 className="m-4 vertical-timeline-element-subtitle">Basic Robotics Workshop</h4>
                <p>
                A dynamic robotics workshop for grades VI to IX was conducted, on robotics, its challenges, and practical applications. The hands-on session, led by the team, allowed students to create and present their robots. 
                Valuable insights on entrepreneurship were shared, concluding with participants receiving certificates.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="2015 - 2018"
                venue="Ebnezer"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">School Name</h3>
                <h4 className="vertical-timeline-element-subtitle">Workshop 2</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="2019 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">School Name</h3>
                <h4 className="vertical-timeline-element-subtitle">Workshop 3</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Event;
