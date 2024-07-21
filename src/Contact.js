import React from 'react';
import './Contact.css'; // Make sure to create and import the CSS file

function Contact() {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen mb-[100px]">
            <div className="contact-box">
                <h2 className='font-semibold'>Subsicribe to our Newsletter</h2>
                <div className="info"><p>Get monthly updates about nipix tech. Grow and learn more with us ! ! !</p>
                </div>
                <form>
                    <div className="form-control">
                        <input type="text" className="input" placeholder="Enter your name" />
                    </div>
                    <div className="form-control">
                        <input type="text" className="input" placeholder="Enter your review on the recent workshop" />
                    </div>
                    <div className="form-control">
                        <input type="email" className="input" placeholder="Enter e-mail address" />
                        <button className="btn ml-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
