import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Shadow effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle logout → clear data + redirect to landing page
  const handleLogout = () => {
    // Clear user session if used
    localStorage.removeItem("user"); // optional
    sessionStorage.clear(); // optional

    // Redirect to landing page
    navigate("/");
  };

  return (
    <nav className={`dashboard-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="dash-logo">
        <span className="logo-accent">PROJECT</span>17
      </div>

      <ul className="dash-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/commits">Commits</Link></li>
        <li><Link to="/documentation">Documentation</Link></li>
        <li><Link to="/peer-review">Peer Review</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <div className="dash-actions">
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
        <div className="welcome-badge">Welcome, User</div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;