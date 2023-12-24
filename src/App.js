import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Learn from './Learn';
import Navbar from './Navbar';
import Home from './Home';
import ContactUs from './Contact';
import SignUp from './SignUp';
import LearningPath from './LearningPath';
import './Navbar.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Learn" element={<Learn />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path='/Learn/Physics' element={<LearningPath />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

