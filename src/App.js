import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Navbar from './Navbar';
import Home from './Home';
import ContactUs from './Contact';
import SignUp from './SignUp';
import LearningPath from './LearningPath'; 
import Quiz from './Quiz';
import Events from './Events';

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Learn/LearningPath/Quiz"element={<Quiz/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
