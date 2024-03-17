import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="box bg-white rounded-lg shadow-lg p-8 max-w-md">
                <img src="https://lh3.google.com/u/0/d/1-WTX2Kw4ZlgLnwT9gYyFOxVXowT9eS-t=w1375-h881-iv1" alt="" className="w-full mb-4" />
                <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-6">Our weekly newsletter provides you with the latest and most important happenings in the industry.</p>

                <div className="form-control mb-4">
                    <input type="text" className="input" placeholder="Enter your name" />
                </div>
                <div className="form-control mb-4">
                    <input type="text" className="input" placeholder="Enter your review on the recent workshop" />
                </div>

                <div className="form-control">
                    <input type="text" className="input" placeholder="Enter e-mail address" />
                    <button className="btn ml-2">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
