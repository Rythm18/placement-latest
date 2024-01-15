import React from 'react'
import './header.module.css'
import logo from '../../assets/images/logo.png'
export function Header(){
    return(
        <div>
            <header className="header_wrapper">
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img decoding="async" src={logo} className="img-fluid" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-stream navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav menu-navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/notes">Study Materials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Project Tutorials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">Videos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

        </div>
    )
}