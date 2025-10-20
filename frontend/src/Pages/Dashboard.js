import React from "react";



const Dashboard = () => {
  return (
    <div className="dashboard-container">
      

      <div className="dashboard-content">
        <h1 className="dashboard-title">
          Overall Contribution <span className="group-tag">Group 07</span>
        </h1>

        {/* Summary Section */}
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Most Active Member</h3>
            <p><strong>Sophia Bennett</strong></p>
            <span className="highlight green">31%</span>
          </div>
          <div className="summary-card">
            <h3>Least Active Member</h3>
            <p><strong>Noah Fernandez</strong></p>
            <span className="highlight red">13%</span>
          </div>
          <div className="summary-card">
            <h3>Overall Balance</h3>
            <p>78%</p>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="ai-summary">
          <h2>AI Insights Summary</h2>
          <ul>
            <li>The team shows a balanced distribution of effort.</li>
            <li>Sophia contributed the most documentation.</li>
            <li>Noah recorded the lowest participation.</li>
            <li>Overall fairness observed across members.</li>
          </ul>
        </div>

        {/* Member Cards */}
        <h2 className="member-header">Member Cards</h2>
        <div className="member-list">
          {[
            { name: "Sophia Bennett", commits: 82, docs: 2400, peer: 9.1, att: 100, score: 31 },
            { name: "Aiden Clarke", commits: 65, docs: 3100, peer: 8.4, att: 95, score: 27 },
            { name: "Liam Patel", commits: 40, docs: 1800, peer: 7.2, att: 88, score: 18 },
            { name: "Emily Zhang", commits: 52, docs: 2600, peer: 8.8, att: 92, score: 21 },
            { name: "Noah Fernandez", commits: 22, docs: 900, peer: 6.8, att: 80, score: 13 },
          ].map((m, i) => (
            <div className="member-card" key={i}>
              <div className="member-info">
                <h3>{m.name}</h3>
                <p>
                  Commits: {m.commits} | Documentation: {m.docs} | Peer Reviews:{" "}
                  {m.peer} | Attendance: {m.att}%
                </p>
              </div>
              <div className="member-score">
                <span>{m.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;