import React, { useState } from "react";

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
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialState);
  };

  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        onChange={handleChange}
        value={formState.firstName}
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        id="phoneNumber"
        type="text"
        onChange={handleChange}
        value={formState.phoneNumber}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={handleChange}
        value={formState.email}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        onChange={handleChange}
        value={formState.lastName}
      />
      <br />

      <label htmlFor="weddingDate">Wedding Date:</label>
      <input
        id="weddingDate"
        type="text"
        onChange={handleChange}
        value={formState.weddingDate}
      />
      <br />
      <label htmlFor="venueName">Venue Name:</label>
      <input
        id="venueName"
        type="text"
        onChange={handleChange}
        value={formState.venueName}
      />
      <br />

      <label htmlFor="venueAddress">Venue Address:</label>
      <input
        id="venueAddress"
        type="text"
        onChange={handleChange}
        value={formState.venueAddress}
      />
      <br />
      <label htmlFor="guestCount">Guest Count:</label>
      <input
        id="guestCount"
        type="text"
        onChange={handleChange}
        value={formState.guestCount}
      />
      <br />
      <label htmlFor="colorTheme">Color Theme:</label>
      <input
        id="colorTheme"
        type="text"
        onChange={handleChange}
        value={formState.colorTheme}
      />
      <br />
      <label htmlFor="addNotes">Additional Notes:</label>
      <input
        id="addNotes"
        type="text"
        onChange={handleChange}
        value={formState.addNotes}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Contact;
