import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CollabInsight — All Rights Reserved</p>
      <div className="footer-links">
        <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;