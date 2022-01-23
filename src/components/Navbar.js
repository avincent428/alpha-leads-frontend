import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <p className="nav-text">About</p>
      <p className="nav-text">Portfolio</p>
      <p className="nav-text">Rental</p>
      <p className="nav-text">Blogs</p>

      <Link to="/contact" className="no-link-decoration">
        <p className="nav-text">Contact Us</p>
      </Link>
    </div>
  );
}

export default Navbar;
