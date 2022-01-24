import React from "react";

function Lead({ lead }) {
  return (
    <div className="lead">
      {lead.firstName} {lead.lastName}
    </div>
  );
}

export default Lead;
