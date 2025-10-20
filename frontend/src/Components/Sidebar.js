import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <Link
        to="/commits"
        className={location.pathname === "/commits" ? "active" : ""}
      >
        <span className="icon">{"</>"}</span>
        Commits
      </Link>

      <Link
        to="/documentation"
        className={location.pathname === "/documentation" ? "active" : ""}
      >
        <span className="icon">📖</span>
        Documentation
      </Link>

      <Link
        to="/peer-review"
        className={location.pathname === "/peer-review" ? "active" : ""}
      >
        <span className="icon">🧾</span>
        Peer Reviews
      </Link>

      <Link
        to="/files"
        className={location.pathname === "/files" ? "active" : ""}
      >
        <span className="icon">📄</span>
        Files
      </Link>

      <div className="sidebar-bottom">
        <Link
          to="/settings"
          className={location.pathname === "/settings" ? "active" : ""}
        >
          <span className="icon">⚙️</span>
          Settings
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;