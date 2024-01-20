import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from './img/workshop/photo1.jpeg';
import photo2 from './img/workshop/photo2.jpeg';
import photo3 from './img/workshop/photo3.jpeg';
import photo4 from './img/workshop/photo4.jpeg';
import photo5 from './img/workshop/photo5.jpeg';
import photo6 from './img/workshop/photo6.jpeg';
import photo7 from './img/workshop/photo7.jpeg';

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 7);
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 6) % 7);
      return updatedIndexes;
    });
  };

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

  const positions = ["center", "left2", "left1", "left", "right", "right1", "right2"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] absolute"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "60%", maxWidth: "400px", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 absolute bottom-10">
        <button className="text-white bg-indigo-500 rounded-md py-2 px-4 opacity-80 hover:opacity-100 focus:outline-none" onClick={handleBack}>
          Back
        </button>
        <button className="text-white bg-indigo-500 rounded-md py-2 px-4 opacity-80 hover:opacity-100 focus:outline-none"
          onClick={handleNext}>Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;


