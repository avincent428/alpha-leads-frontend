import React from "react";

function Lead({ lead }) {
  return (
    <div className="lead">
      {lead.firstName} {lead.lastName}
      <p>Wedding Date: {lead.weddingDate}</p>
    </div>
  );
}

export default Lead;
