import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div class="container">
        <div class="box">
  <img src="https://lh3.google.com/u/0/d/1-WTX2Kw4ZlgLnwT9gYyFOxVXowT9eS-t=w1375-h881-iv1" alt="" />
  <h2>Subscribe to our Newsletter</h2>
  <p>Our weekly newsletter provides you with the latest and most important happenings in the industry.</p>
  
  <div class="form-control">
  
    <input type="text" class="input" placeholder="Enter your name" />
  </div>
  <div class="form-control">
  
    <input type="text" class="input" placeholder="Enter your review on the recent workshop" />
  </div>
  
  <div class="form-control">
    <input type="text" class="input" placeholder="Enter e-mail adress" />
    <button class="btn">Subscribe</button>
  </div>
</div>
</div>
    );
}

export default Contact;