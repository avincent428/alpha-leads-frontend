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

      // breaks if you put anything other than a date in weddingDate element
      leadData.sort(function (a, b) {
        return new Date(a.weddingDate) - new Date(b.weddingDate);
      });

      //   var numbers = [
      //     { name: "1", date: "1/2/1999" },
      //     { name: "2", date: "3/2/2022" },
      //     { name: "3", date: "7/27/2009" },
      //   ];
      //   numbers.sort(function (a, b) {
      //     return new Date(a.date) - new Date(b.date);
      //   });
      //   console.log(numbers);

      console.log(leadData);
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
