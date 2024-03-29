import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pic1 from './img/workshop2.png';
import pic2 from './img/workshop_avadi.jpg';
import pic3 from './img/seminar_1.png';


const Event = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="20th January 2024"
                iconStyle={{ background: 'transparent', color: '#fff' }}
            >
                <img src={pic1} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Ebenezer Modern Matriculation School</h3>
                <h4 className="m-4 vertical-timeline-element-subtitle text-white">Basic Robotics Workshop</h4>
                
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="7th July 2023"
                iconStyle={{ background: 'transparent', color: '#fff' }}
            >
                <img src={pic2} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Avadi Municipal Higher Secondary School</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">Basic Robotics Workshop</h4>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.5)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0.5)' }}
                date="16th August 2023"
                iconStyle={{ background: 'transparent', color: '#fff' }}
            >
                <img src={pic3} alt="Workshop" className="rounded-3xl timeline-image" />
                <h3 className="vertical-timeline-element-title">Kadambathur Government Higher Secondary School</h3>
                <h4 className="vertical-timeline-element-subtitle text-white">Seminar on Career guidance</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Event;
