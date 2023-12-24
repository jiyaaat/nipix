import React from 'react';
import './LearningPath.css'; // Import the CSS file

const LearningPath = () => {
  const learningSteps = [
    { id: 1, title: 'Basic Energy Concepts', completed: true },
    { id: 2, title: 'Climate Awareness', completed: false },
    { id: 3, title: 'Water Exploration', completed: false },
    { id: 4, title: 'Introduction to Forces', completed: false },
    { id: 5, title: 'Renewable Energy', completed: false },
    { id: 6, title: 'Conservation of Resources', completed: false },
    { id: 7, title: 'Advanced Energy Concepts', completed: false },
    { id: 8, title: 'Environmental Science', completed: false },
    // Add more steps as needed
  ];

  const handleCompletion = (stepId) => {
    console.log(`Step ${stepId} completed!`);
  };

  return (
    <div className="max-width-container">
      <h2 className="learning-path-title">🔖 Learning Path 🔖</h2>
      <div className="grid-container">
        {learningSteps.map((step) => (
          <div
            key={step.id}
            className={`milestone ${
              step.completed ? 'completed' : ''
            } transition-transform duration-300 transform hover:-translate-y-2`}
          >
            <img
              src={`https://via.placeholder.com/150?text=Step${step.id}`}
              alt={`Step ${step.id}`}
            />
            <h3>{step.title}</h3>
            {!step.completed ? (
              <button
                className="start-learning"
                onClick={() => handleCompletion(step.id)}
              >
                Start Learning
              </button>
            ) : (
              <button className="completed" disabled>
                Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;

