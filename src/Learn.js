import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';

const cardData = [
  {
    id: 1,
    backgroundImage: 'url("./physics.jpg")',
    route: 'LearningPath',
  },
  {
    id: 2,
    backgroundImage: 'url("./maths.jpg")',
    route: 'Maths',
  },
  {
    id: 3,
    backgroundImage: 'url("./chemistry.avif")',
    route: 'Chem',
  },
  {
    id: 4,
    backgroundImage: 'url("./AI.jpg")',
    route: 'AI',
  },
  {
    id: 5,
    backgroundImage: 'url("./robotics.jpg")',
    route: 'Robotics',
  },
];

const Learn = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const navigate = useNavigate();

  const handleHover = (id) => {
    setFlippedCard(id);
  };

  return (
    <div className='main'>
      <h1 className='Learn'></h1>
      <div className="cards-container mt-[50px] mb-[100px]">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`flip-card ${flippedCard === card.id ? 'hover' : ''}`}
            tabIndex="0"
            onMouseEnter={() => handleHover(card.id)}
            onMouseLeave={() => handleHover(null)}
            onFocus={() => handleHover(card.id)}
            onBlur={() => handleHover(null)}
            onClick={() => navigate(card.route)}
            style={{ marginBottom: index < 2 ? '30px' : '0' }} // Add margin bottom for the first row
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundImage: card.backgroundImage }}>
              </div>
              {flippedCard === card.id && (
                <div className="flip-card-back">
                  <button className='btn text-[12px]'>Start</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
