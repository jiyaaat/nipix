import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Learn.css';

const cardData = [
  {
    id: 1,
    backgroundImage: 'url("./physics.jpeg")',
    route: 'LearningPath',
  },
  {
    id: 2,
    backgroundImage: 'url("./maths.jpeg")',
  },
  {
    id: 3,
    backgroundImage: 'url("./chem.jpeg")',
  },
  {
    id: 4,
    backgroundImage: 'url("https://unisa.edu.au/siteassets/media-centre/tech---shutterstock_1777292972_web.jpg")'
  },
  {
    id: 5,
    backgroundImage: 'url("https://img.freepik.com/free-vector/children-fixing-robot-together_1308-79403.jpg")'
  },
  {
    id: 6,
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20220505/pngtree-internet-of-things--iot--concept-image_1143981.jpg")'
  },
  
];

const Learn = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const navigate =   useNavigate();

  const handleHover = (id) => {
    setFlippedCard(id);
  };

  return (
    <div className='main'>
        <h1>💡 Learn With Us 💡</h1>
    <div className="cards-container">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`flip-card ${flippedCard === card.id ? 'hover' : ''}`}
          tabIndex="0"
          onMouseEnter={() => handleHover(card.id)}
          onMouseLeave={() => handleHover(null)}
          onFocus={() => handleHover(card.id)}
          onBlur={() => handleHover(null)}
          onClick={()=> navigate(card.route)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: card.backgroundImage }}>
              
            </div>
            {flippedCard === card.id && (
              <div className="flip-card-back">
                  <button  className='btn'>Let's start Learning</button>
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
