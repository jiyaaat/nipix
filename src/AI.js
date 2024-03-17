import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AI.css';

function AI() {
    return (
        <div className="ai-container">
            <h1 className="ai-heading">Choose Your Class</h1>
            <div className="grade-options">
                <Link to="/Learn/AI/grade6" className="grade-option shiny">Grade 6</Link>
                <Link to="/Learn/AI/grade7" className="grade-option shiny">Grade 7</Link>
                <Link to="/Learn/AI/grade8" className="grade-option shiny">Grade 8</Link>
                <Link to="/Learn/AI/grade9" className="grade-option shiny">Grade 9</Link>
            </div>
        </div>
    );
}

export default AI;
