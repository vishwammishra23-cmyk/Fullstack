import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // ✅ Check if we are on landing page
  const isLanding = location.pathname === "/";

  return (
    <div className={`nav ${isLanding ? "glass" : "solid"}`}>

      <div className="nav-left">JobPortal</div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/jobs">Browse Jobs</Link>
        <Link to="/admin">Admin</Link>
      </div>

    </div>
  );
}

export default Navbar;