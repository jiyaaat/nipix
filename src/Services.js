// Services.js

import React from 'react';
import labsetup from './img/labsetup.png';
import workshop from './img/workshop.png';
import project from './img/project.png';

const servicesData = [
  {
    icon: workshop, // Replace with the path to your icon
    title: 'Workshops and Seminars',
    description: 'Our workshops and seminars are crafted to inspire and equip young minds with the skills in Robotics and AI.',
  },
  {
    icon: labsetup, // Replace with the path to your icon
    title: 'Robotics and AI Lab Set up',
    description: 'Our skillfully crafted robotics and AI labs will help students to gain hands-on experience with the technologies.',
  },
  {
    icon: project, // Replace with the path to your icon
    title: 'Project Development',
    description: 'Dive into the world of robotics, artificial intelligence, IoT, and much more through interactive sessions and projects.',
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-neutral-600 mb-14 text-left">Our Services</h1>
      <div className="flex flex-wrap -mx-4">
        {servicesData.map((service, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8">
            <div className=" rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={service.icon} alt={`${service.title} icon`} className="w-[90px] h-[90px] mb-4 " />
              <h3 className="text-xl font-bold text-[#2E3F73] mb-2 text-left">{service.title}</h3>
              <p className="text-gray-600 text-left">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
