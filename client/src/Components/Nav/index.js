import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        FanChain
      </a> 
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/settings">
          Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/artistDash/1">
          Artists/Publishers
        </a>
      </li>
    </nav>
  );
}

export default Nav;