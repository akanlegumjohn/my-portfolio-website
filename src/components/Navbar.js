import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
