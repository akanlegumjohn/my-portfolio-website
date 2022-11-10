import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Akanlegum.</div>
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active--nav--link" : "nav--item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active--nav--link" : "nav--item"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "active--nav--link" : "nav--item"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active--nav--link" : "nav--item"
          }
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
