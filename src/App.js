import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import LearningPath from './LearningPath'; 
import Quiz from './Quiz';
import Events from './Events';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';
import './App.css';
import Mathematics from './Maths';
import Chem from './Chemistry';
import AI from './AI';
import DotCursor from './DotCursor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DotCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Learn/LearningPath" element={<LearningPath />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LoginBox/>} />
          <Route path="/register" element={<RegisterBox/>} />
          <Route path="/Learn/LearningPath/Quiz"element={<Quiz/>}/>
          <Route path="/Learn/Maths" element={<Mathematics />} />
          <Route path="/Learn/Chem" element={<Chem />} />
          <Route path="/Learn/AI" element={<AI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;