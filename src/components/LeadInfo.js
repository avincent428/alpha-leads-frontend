import React from "react";
import axios from "axios";

function LeadInfo({ lead }) {
  // function setClient() {
  //   lead.client = true;
  //   axios.put(`http://localhost:8000/${lead._id}`, lead);
  //   console.log(lead.client);
  // }

  // function setArchives() {
  //   lead.archived = true;
  //   axios.put(`http://localhost:8000/${lead._id}, lead`);
  // }

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
      <p>Became Client?</p>
      <button /*onClick={setClient}*/>Yes</button>
      <button /*onClick={setArchives}*/>No</button>
    </div>
  );
}

export default LeadInfo;
