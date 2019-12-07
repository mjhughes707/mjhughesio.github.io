import React from "react"

function Form() {
  return (
      <form action="http://webhook.site/dddd4d66-814c-44b5-b0e7-1bd04815bb40" method="post">
        <div className="form-field">
          <input type="text" name="name" id="name" placeholder="Name" minLength="2" title="Requires at least two characters" required />
        </div>
        <div className="form-field">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-field">
          <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone #" title="Example: 555-555-5555" />
        </div>
        <div className="form-field">
          <textarea name="message" id="message" placeholder="Message" required ></textarea>
        </div>
        <div className="form-field submit-div">
          <button className="submit">Submit</button>
        </div>
      </form>
  )
}


export default Form