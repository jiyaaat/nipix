import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Maths.css';

function Maths() {
    return (
        <div className="ai-container mt-[50px]">
            <h1 className="ai-heading text-slate-500 font-bold">Choose Your Class</h1>
            <div className="grade-options text-neutral-700">
                <Link to="/Learn/Maths/grade6" className="grade-option shiny">Grade 6</Link>
                <Link to="/Learn/Maths/grade7" className="grade-option shiny">Grade 7</Link>
                <Link to="/Learn/Maths/grade8" className="grade-option shiny">Grade 8</Link>
                <Link to="/Learn/Maths/grade9" className="grade-option shiny">Grade 9</Link>
            </div>
        </div>
    );
}

export default Maths;
