import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="title">
      <Link to="/" className="no-link-decoration">
        <h1>Alpha Decor</h1>
      </Link>
    </div>
  );
}

export default Header;
