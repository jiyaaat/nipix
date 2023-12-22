import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home';
import ContactUs from './Contact';
import SignUp from './SignUp';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Learn" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

