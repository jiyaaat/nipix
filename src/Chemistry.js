import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Chemistry.css';

function Chem() {
    return (
        <div className="ai-container mt-[50px]">
            <h1 className="ai-heading text-slate-500 font-bold">Choose Your Class</h1>
            <div className="grade-options text-neutral-700">
                <Link to="/Learn/Chem/grade6" className="grade-option shiny">Grade 6</Link>
                <Link to="/Learn/Chem/grade7" className="grade-option shiny">Grade 7</Link>
                <Link to="/Learn/Chem/grade8" className="grade-option shiny">Grade 8</Link>
                <Link to="/Learn/Chem/grade9" className="grade-option shiny">Grade 9</Link>
            </div>
        </div>
    );
}

export default Chem;
