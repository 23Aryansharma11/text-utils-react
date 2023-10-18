import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const myLinkStyle = {
    color: props.mode === "light" ? "black" : "white",
    textDecoration: "none",
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.heading}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn">
                <Link
                  className="nav-Link active"
                  aria-current="page"
                  to="/"
                  style={myLinkStyle}
                >
                  Home
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn">
                <Link
                  className="nav-Link active"
                  aria-current="page"
                  to="/about"
                  style={myLinkStyle}
                >
                  About
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn">
                <Link className="nav-Link" to="/noSpell" style={myLinkStyle}>
                  No spell check
                </Link>
              </button>
            </li>
          </ul>
          <div
  className={`form-check form-switch mx-3 my-2 text-${
    props.mode === "light" ? "dark" : "light"
  }`}
>
  <label
    className="form-check-label"
    htmlFor="flexSwitchCheckDefault"
  >
    <span onClick={props.toggleMode}>
      {`${
        props.mode === "light" ? "Enable" : "Disable"
      } `}
    </span>
    Dark mode
  </label>
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={props.toggleMode}
  />
</div>
        </div>
      </div>
    </nav>
  );
}
