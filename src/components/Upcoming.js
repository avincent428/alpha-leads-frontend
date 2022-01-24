import React from "react";
import Lead from "./Lead";

function Upcoming(props) {
  return (
    <div className="upcoming">
      <h1>Upcoming Event:</h1>
      <Lead lead={props.lead} />
    </div>
  );
}

export default Upcoming;
