import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><span>Collab</span>Insight</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="nav-buttons">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;