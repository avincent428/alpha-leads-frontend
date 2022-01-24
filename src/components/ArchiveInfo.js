import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ArchiveInfo({ lead }) {
  function deleteArchive() {
    axios.delete(`http://localhost:8000/${lead._id}`, lead);
    window.location.reload(false);
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
      <p>Delete Event?</p>
      <button onClick={deleteArchive}>Complete</button>
    </div>
  );
}

export default ArchiveInfo;
