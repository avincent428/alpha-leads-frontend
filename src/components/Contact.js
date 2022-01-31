import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    weddingDate: "",
    venueName: "",
    venueAddress: "",
    guestCount: "",
    colorTheme: "",
    addNotes: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/", formState);
    console.log(formState);
    setFormState(initialState);
  };

  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <div className="lead-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-text">
          First Name:
        </label>
        <br />
        <input
          id="firstName"
          type="text"
          onChange={handleChange}
          value={formState.firstName}
          className="form-field"
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          id="lastName"
          type="text"
          onChange={handleChange}
          value={formState.lastName}
          className="form-field"
        />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          id="phoneNumber"
          type="text"
          onChange={handleChange}
          value={formState.phoneNumber}
          className="form-field"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="text"
          onChange={handleChange}
          value={formState.email}
          className="form-field"
        />
        <br />
        <label htmlFor="weddingDate">
          When is your wedding date? (mm/dd/yy)
        </label>
        <br />
        <input
          id="weddingDate"
          type="text"
          onChange={handleChange}
          value={formState.weddingDate}
          className="form-field"
        />
        <br />
        <label htmlFor="venueName">Which venue is your wedding at?</label>
        <br />
        <input
          id="venueName"
          type="text"
          onChange={handleChange}
          value={formState.venueName}
          className="form-field"
        />
        <br />
        <label htmlFor="venueAddress">Address of the venue?</label>
        <br />
        <input
          id="venueAddress"
          type="text"
          onChange={handleChange}
          value={formState.venueAddress}
          className="form-field"
        />
        <br />
        <label htmlFor="guestCount">How many guests will you have?</label>
        <br />
        <input
          id="guestCount"
          type="text"
          onChange={handleChange}
          value={formState.guestCount}
          className="form-field"
        />
        <br />
        <label htmlFor="colorTheme">
          Do you have a specific color theme in mind?
        </label>
        <br />
        <input
          id="colorTheme"
          type="text"
          onChange={handleChange}
          value={formState.colorTheme}
          className="form-field"
        />
        <br />
        <label htmlFor="addNotes">Anything else you'd like to tell us?</label>
        <br />
        <input
          id="addNotes"
          type="text"
          onChange={handleChange}
          value={formState.addNotes}
          className="form-field"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
