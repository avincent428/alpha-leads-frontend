import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ClientComplete({ lead }) {
  function eventComplete() {
    lead.client = false;
    lead.archived = true;
    axios.put(`http://localhost:8000/${lead._id}`, lead);
  }
  return (
    <div>
      <h1>
        {lead.firstName} {lead.lastName}
      </h1>
      <p>Phone Number: {lead.phoneNumber}</p>
      <p>Email: {lead.email}</p>
      <p>Wedding Date: {lead.weddingDate}</p>
      <p>Venue: {lead.venueName}</p>
      <p>Venue Address {lead.venueAddress}</p>
      <p>Guest Count: {lead.guestCount} </p>
      <p>Color Themes: {lead.colorTheme}</p>
      <p>Additional Notes: {lead.addNotes}</p>
      <p>Finished Event?</p>
      <Link to="/admin">
        <button onClick={eventComplete}>Complete</button>
      </Link>
    </div>
  );
}

export default ClientComplete;
