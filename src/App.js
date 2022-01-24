import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import LeadInfo from "./components/LeadInfo";
import LeadContainer from "./components/LeadContainer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Admin from "./components/Admin";
import Upcoming from "./components/Upcoming";

function App() {
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

      console.log(leadData);
      setLeads(leadData);
    });
  }
  return (
    <div>
      <Header />
      <Navbar />
      <Route path="/contact" exact component={Contact} />
      <Route
        path="/admin/leads"
        exact
        render={() => <LeadContainer leads={leads} />}
      />
      <Route path="/admin" exact render={() => <Upcoming lead={leads[0]} />} />
      <Route path="/admin" component={Admin} />
      {leads.map((lead) => {
        return (
          <Route
            exact
            path={`/admin/${lead._id}`}
            render={() => <LeadInfo lead={lead} />}
          />
        );
      })}
    </div>
  );
}

export default App;
