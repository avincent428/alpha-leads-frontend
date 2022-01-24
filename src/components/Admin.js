import React from "react";
import { Link } from "react-router-dom";

function Admin(props) {
  return (
    <div>
      <Link to="/admin">
        <p>Home</p>
      </Link>
      <Link to="/admin/leads">
        <p>Potential Leads</p>
      </Link>
      <Link to="/admin/clients">
        <p>Active Clients</p>
      </Link>
      <Link to="/admin/archives">
        <p>Archives</p>
      </Link>
    </div>
  );
}

export default Admin;
