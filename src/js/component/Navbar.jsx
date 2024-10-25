import React, { useState } from "react";
import Home from "./home";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="container d-flex">
          <a className="navbar-brand text-white col-9" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
          </button>
          <div className="collapse navbar-collapse ms-5 col-3" id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">{props.anchor}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">{props.anchor2} </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-disabled="true">{props.anchor3}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-disabled="true">{props.anchor4}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}
Navbar.prototype = {
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}