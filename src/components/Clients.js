import React from "react";
import Lead from "./Lead";
import { Link } from "react-router-dom";

function Clients(props) {
  props.leads.sort(function (a, b) {
    return new Date(a.weddingDate) - new Date(b.weddingDate);
  });
  return (
    <div className="lead-container">
      <h1 className="lead-header">Current Clients:</h1>
      {props.leads.map((lead, ind) => {
        if (lead.client == true) {
          return (
            <Link to={`/admin/clients/${lead._id}`}>
              <Lead lead={lead} />
            </Link>
          );
        }
      })}
    </div>
  );
}

export default Clients;
