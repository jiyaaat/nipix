import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Quiz from './Quiz';
import Events from './Events';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';
import './App.css';
import Mathematics from './Maths';
import Chem from './Chemistry';
import AI from './AI';
import DotCursor from './DotCursor';
import Phy from './Phy';
import Main from './main';
import PhyGrade6 from './Phy/grade6';
import PhyGrade7 from './Phy/grade7';
import PhyGrade8 from './Phy/grade8';
import PhyGrade9 from './Phy/grade9';
import MathGrade6 from './Math/grade6';
import MathGrade7 from './Math/grade7';
import MathGrade8 from './Math/grade8';
import MathGrade9 from './Math/grade9';
import ChemGrade6 from './Chem/grade6';
import ChemGrade7 from './Chem/grade7';
import ChemGrade8 from './Chem/grade8';
import ChemGrade9 from './Chem/grade9';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DotCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LoginBox />} />
          <Route path="/register" element={<RegisterBox />} />
          <Route path="/Learn/Phy/grade6" element={<Quiz />} />
          <Route path="/login" element={<LoginBox/>} />
          <Route path="/register" element={<RegisterBox/>} />
          <Route path="/Learn/Phy/grade6"element={<PhyGrade6 />}/>
          <Route path="/Learn/Phy/grade7"element={<PhyGrade7 />}/>
          <Route path="/Learn/Phy/grade8"element={<PhyGrade8 />}/>
          <Route path="/Learn/Phy/grade9"element={<PhyGrade9 />}/>
          <Route path="/Learn/Maths/grade6"element={<MathGrade6 />}/>
          <Route path="/Learn/Maths/grade7"element={<MathGrade7 />}/>
          <Route path="/Learn/Maths/grade8"element={<MathGrade8 />}/>
          <Route path="/Learn/Maths/grade9"element={<MathGrade9 />}/>
          <Route path="/Learn/Chem/grade6"element={<ChemGrade6 />}/>
          <Route path="/Learn/Chem/grade7"element={<ChemGrade7 />}/>
          <Route path="/Learn/Chem/grade8"element={<ChemGrade8 />}/>
          <Route path="/Learn/Chem/grade9"element={<ChemGrade9 />}/>
          <Route path="/Learn/Maths" element={<Mathematics />} />
          <Route path="/Learn/Chem" element={<Chem />} />
          <Route path="/Learn/Phy" element={<Phy />} />
          <Route path="/Learn/AI" element={<AI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
