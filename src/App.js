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
import AI from './AI';
import AIgrade6 from './AI/AIgrade6';
import AIgrade7 from './AI/AIgrade7';
import AIgrade8 from './AI/AIgrade8';
import AIgrade9 from './AI/AIgrade9';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Learn/LearningPath" element={<LearningPath />} />
          <Route path="/Learn/AI" element={<AI />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LoginBox/>} />
          <Route path="/register" element={<RegisterBox/>} />
          <Route path="/Learn/LearningPath/Quiz"element={<Quiz/>}/>
          <Route path="/Learn/AI/grade6" element={<AIgrade6 />} />
          <Route path="/Learn/AI/grade7" element={<AIgrade7 />} />
          <Route path="/Learn/AI/grade8" element={<AIgrade8 />} />
          <Route path="/Learn/AI/grade9" element={<AIgrade9 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;