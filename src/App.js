import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import LearningPath from './LearningPath'; 
import Quiz from './Quiz';
import Events from './Events';
import './Home.css';
import './App.css';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';

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
          <Route path="/login" element={<LoginBox/>} />
          <Route path="/register" element={<RegisterBox/>} />
          <Route path="/Learn/LearningPath/Quiz"element={<Quiz/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
