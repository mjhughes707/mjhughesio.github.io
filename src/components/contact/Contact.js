import React from "react"

import Form from "./Form"
import Contacts from "./Contacts"

function Contact() {
  return (
    <div id="contact" className="item-contact">
      <h2>CONTACT</h2>
      <span className="h2-underline"></span>
      <p>Question or interested in working together?</p>
      <Form />
      <Contacts />
    </div>
      
      
  )
}


export default Contact
