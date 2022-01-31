import React from "react";
import { Link } from "react-router-dom";

function Admin(props) {
  return (
    <div className="nav-bar">
      <Link to="/admin" className="no-link-decoration">
        <p className="nav-text">Home</p>
      </Link>
      <Link to="/admin/leads" className="no-link-decoration">
        <p className="nav-text">Potential Leads</p>
      </Link>
      <Link to="/admin/clients" className="no-link-decoration">
        <p className="nav-text">Current Clients</p>
      </Link>
      <Link to="/admin/archives" className="no-link-decoration">
        <p className="nav-text">Archives</p>
      </Link>
    </div>
  );
}

export default Admin;
