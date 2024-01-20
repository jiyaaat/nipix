// LearningPath.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LearningPath.css'; // Import the CSS file

const Card = ({ title, description, completed, onClick, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={`card ${completed ? 'completed' : ''}`} onClick={onClick} style={cardStyle}>
      <div className="info">
        <h1>{title}</h1>
        <button>Read More</button>
      </div>
    </div>
  );
};

const LearningPath = () => {
  const navigate = useNavigate();
  const learningSteps = [
    { id: 1, title: 'Basic Energy Concepts', backgroundImage: 'https://img.freepik.com/premium-photo/clean-electric-energy-concept-from-renewable-wind-source-green-fields-ai-generated_700226-2181.jpg' },
    { id: 2, title: 'Climate Awareness', backgroundImage:"https://images.saymedia-content.com/.image/t_share/MTc0Mjg5NzY4MDM5OTE3NDM2/the-top-10-environmental-concerns-facing-todays-society.jpg" },
    { id: 3, title: 'Water Exploration', backgroundImage:"https://i.pinimg.com/564x/ab/61/2a/ab612a75694bfe429b6dc97afb1d28f5.jpg" },
    { id: 4, title: 'Introduction to Forces', backgroundImage:"https://media.istockphoto.com/id/183417229/photo/balancing-balls-newtons-cradle.jpg?s=612x612&w=0&k=20&c=UWCupXd4lIzjLhLsxWbTF9KUnfmGLLFFpYll6wLvexU=" },
    { id: 5, title: 'Renewable Energy', backgroundImage:"https://img.freepik.com/premium-photo/esg-green-energy-sustainable-industry-with-windmills-solar-energy-panels-ai-generation_201606-4877.jpg" },
    { id: 6, title: 'Conservation of Resources', backgroundImage:"https://www.shutterstock.com/image-photo/human-handholding-icon-energy-saving-600nw-2211985877.jpg" },
    { id: 7, title: 'Advanced Energy Concepts', backgroundImage:"https://png.pngtree.com/thumb_back/fh260/background/20230308/pngtree-concept-of-energy-efficiency-with-lightbulb-photo-image_1861027.jpg" },
    { id: 8, title: 'Environmental Science', backgroundImage:"https://e0.pxfuel.com/wallpapers/1012/230/desktop-wallpaper-environmental-environmental-science.jpg" },
    { id: 9, title: 'Physics In Medicine', backgroundImage:"https://img.freepik.com/free-photo/close-up-researcher-working-lab_23-2148794402.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=ais" },
    { id: 10, title: 'Advanced Physics Application', backgroundImage:"https://media.istockphoto.com/id/936903524/vector/blackboard-inscribed-with-scientific-formulas-and-calculations-in-physics-and-mathematics-can.jpg?s=612x612&w=0&k=20&c=sRLsJbHUVOYvZ_M16hti4fF9NM0RysfjAPUQrCJ8o4U=" },
    
  ];

 

  return (
    <div className="max-width-container">
      <h2 className="learning-path-title"> Learn Physics 💡</h2>
      <div className="grid-container">
        {learningSteps.map((step) => (
          <Card
            key={step.id}
            title={step.title}
            description={`Step ${step.id}`}
            completed={step.completed}
            onClick={() => navigate('Quiz')}
            backgroundImage={step.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
