import { Link } from "gatsby"
import React from "react"
import logoImg from "../images/Logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container is-widescreen">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" >
            <img src={logoImg} width="112" height="28" alt="logo" />
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-end">
          <Link to="/article/category/pet-care/" className="navbar-item">
            Pet Care
          </Link>
          <Link to="/article/category/pet-health/" className="navbar-item">
            Pet Health
          </Link>
          <Link to="/article/category/pet-behavior-training/" className="navbar-item">
            Pet Behavior & Training
          </Link>
          <Link to="/article/category/breeds/" className="navbar-item">
            Breeds
          </Link>
          <Link to="/article/category/pet-insurance/" className="navbar-item">
            Pet Insurance
          </Link>        
        </div>
      </nav>
    </div>
  </header>
)


export default Header
