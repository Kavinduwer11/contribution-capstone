import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1>
          Track Contribution, <span>Fairly</span>
        </h1>
        <p>
          Evaluate individual contributions in student team projects.  
          Analyze commits, documents, and peer reviews with insightful dashboards.
        </p>
        <Link to="/signup" className="btn cta">Get Started</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Automate Data Collection</h3>
          <p>Gather commits, documentation, and attendance data seamlessly from all sources.</p>
        </div>
        <div className="feature-card">
          <h3>Interactive Dashboards</h3>
          <p>Visualize project metrics and performance with clarity.</p>
        </div>
        <div className="feature-card">
          <h3>AI-Powered Insights</h3>
          <p>Gain fair feedback from AI-assisted peer analysis.</p>
        </div>
        <div className="feature-card">
          <h3>Exportable Reports</h3>
          <p>Generate professional reports for grading and record-keeping.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;