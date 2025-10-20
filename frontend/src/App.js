import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DashboardNavbar from "./Components/DashboardNavbar";
import Footer from "./Components/Footer";

import Landing from "./Pages/Landing";
import About from "./Pages/about";
import HowItWorks from "./Pages/howitworks";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Commits from "./Pages/Commits";
import Documentation from "./Pages/Documentation";
import PeerReview from "./Pages/PeerReview";
import Settings from "./Pages/Settings";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

/* ---------- Layouts ---------- */
const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const DashboardLayout = () => (
  <>
    <DashboardNavbar />
    <div className="dashboard-main">
      <Outlet />
    </div>
  </>
);

function App() {
  const [scores, setScores] = useState(null);

  const fetchScores = () => {
    fetch("http://localhost:5002/api/scores")
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error("Error fetching scores:", err));
  };

  return (
    <div className="app-container">
      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <div className="landing-wrapper">
                <Landing />
                <div className="backend-test">
                  <h2>Test Backend Connection</h2>
                  <button onClick={fetchScores} className="btn primary">
                    Get Contribution Scores
                  </button>
                  {scores && (
                    <div className="scores-section">
                      <h3>Scores:</h3>
                      <ul>
                        {Object.entries(scores).map(([author, score]) => (
                          <li key={author}>
                            <strong>{author}</strong>: {score}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Route>

        {/* Login (no navbar) */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard section */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/commits" element={<Commits />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/peer-review" element={<PeerReview />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;