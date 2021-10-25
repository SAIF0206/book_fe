import React from "react";
import logo from "../img/mylogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar   justify-content-between">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top m-2"
            alt="My Book Store Logo"
          />
        </Link>
        <a
          target="_blank"
          className="btn btn-outline-success m-4 my-sm-0"
          href="https://saif0206.github.io/dev/"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
