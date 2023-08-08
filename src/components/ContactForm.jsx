import "./ContactFormStyle.css"

import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
        <form action="">
            <label >Your Name</label>
            <input type="text" />
            <label >Your Email</label>
            <input type="text" />
            <label >Subject</label>
            <input type="text" />
            <label >Message</label>
            <textarea rows="6" placeholder="Add Your Message Here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm