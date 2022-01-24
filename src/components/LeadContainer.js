import React, { useState, useEffect } from "react";
import Lead from "./Lead";
import axios from "axios";

function LeadContainer(props) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("http://localhost:8000/").then((res) => {
      const leadData = res.data;
      setLeads(leadData);
    });
  }
  return (
    <div className="lead-container">
      {leads.map((lead) => {
        return <Lead lead={lead} />;
      })}
    </div>
  );
}

export default LeadContainer;
