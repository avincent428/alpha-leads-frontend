import React from "react";
import Lead from "./Lead";
import { Link } from "react-router-dom";

function Archives(props) {
  return (
    <div className="lead-container">
      <h1 className="lead-header">Archived Leads/Clients:</h1>
      {props.leads.map((lead) => {
        if (lead.archived == true) {
          return (
            <Link to={`/admin/archives/${lead._id}`}>
              <Lead lead={lead} />
            </Link>
          );
        }
      })}
    </div>
  );
}

export default Archives;
