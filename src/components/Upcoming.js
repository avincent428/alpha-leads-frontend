import React from "react";
import Lead from "./Lead";

function Upcoming(props) {
  let count = 0;

  return (
    <div className="upcoming">
      <h1>Upcoming Event:</h1>
      {props.leads.map((lead, ind) => {
        if (lead.client == true && count < 1) {
          count++;
          return <Lead lead={lead} />;
        }
      })}
    </div>
  );
}

export default Upcoming;
