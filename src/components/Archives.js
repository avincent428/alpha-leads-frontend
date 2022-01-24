import React from "react";
import Lead from "./Lead";

function Archives(props) {
  return (
    <div className="lead-container">
      <h1 className="lead-header">Current Clients:</h1>
      {props.leads.map((lead) => {
        if (lead.archived == true) {
          return <Lead lead={lead} />;
        }
      })}
    </div>
  );
}

export default Archives;
