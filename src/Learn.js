import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';

const cardData = [
  {
    id: 1,
    backgroundImage: 'url("./physics.jpeg")',
    nextpagelink: '/Learn/Physics',
  },
  {
    id: 2,
    backgroundImage: 'url("./maths.jpeg")',
    nextpagelink: 'https://example.com/page2',
  },
  {
    id: 3,
    backgroundImage: 'url("./chem.jpeg")',
    nextpagelink: 'https://example.com/page1',
  },
  {
    id: 4,
    backgroundImage: 'url("https://unisa.edu.au/siteassets/media-centre/tech---shutterstock_1777292972_web.jpg")',
    nextpagelink: 'https://example.com/page2',
  },
  {
    id: 5,
    backgroundImage: 'url("https://img.freepik.com/free-vector/children-fixing-robot-together_1308-79403.jpg")',
    nextpagelink: 'https://example.com/page1',
  },
  {
    id: 6,
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20220505/pngtree-internet-of-things--iot--concept-image_1143981.jpg")',
    nextpagelink: 'https://example.com/page2',
  },
  
];

const Learn = () => {
  const [flippedCard, setFlippedCard] = useState(null);

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
        >
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: card.backgroundImage }}>
              
            </div>
            {flippedCard === card.id && (
              <div className="flip-card-back">
                <Link to={card.nextpagelink}>
                  <button className='btn'>Let's start Learning</button>
                </Link>
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
