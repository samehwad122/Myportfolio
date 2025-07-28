import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar d-flex justify-content-between align-items-center">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* العنوان وزر المنيو في نفس السطر */}
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand text-white fw-bold fs-3 glow-text me-3" to="/">
            MyPortfolio
          </Link>
          <button
            className="navbar-toggler glow-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* روابط التنقل */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/certificates">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glow-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
