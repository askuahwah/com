import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiar">
  <div className="container-fluid">
    <a className="navbar-brand" href=" ">Mood Indigo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/signup">Registration</NavLink>
        </li>
      </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
