import "./ContactFormStyle.css"

import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/xwkdlnbj" method="POST">
            <label >Your Name</label>
            <input type="text" name="Sender Name"/>
            <label >Your Email</label>
            <input type="text" name="Email"/>
            <label >Subject</label>
            <input type="text" name="subject"/>
            <label >Message</label>
            <textarea rows="6" placeholder="Add Your Message Here" name="message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm