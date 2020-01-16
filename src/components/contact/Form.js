import React, { useState } from "react";

function Form() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = userData;

  const handleChange = e =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <form action="https://formspree.io/mknjvjqe" method="POST">
      <div className="form-field">
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => handleChange(e)}
          id="name"
          placeholder="Name"
          minLength="2"
          title="Requires at least two characters"
          required
        />
      </div>
      <div className="form-field">
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => handleChange(e)}
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-field">
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={e => handleChange(e)}
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone #"
          title="Example: 555-555-5555"
        />
      </div>
      <div className="form-field">
        <textarea
          name="message"
          value={message}
          onChange={e => handleChange(e)}
          id="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="form-field submit-div">
        <button className="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
