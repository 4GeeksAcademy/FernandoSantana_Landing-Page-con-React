import React from "react";

export default function Navbar () {
    return(
      
        <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="container d-flex">
          <a className="navbar-brand text-white col-9" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{color:'white'}}></span>
          </button>
          <div className="collapse navbar-collapse ms-5 col-3"  id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
              </li>
            </ul>
            </div>
            </div>
          </div>
      </nav>
     
    )
}