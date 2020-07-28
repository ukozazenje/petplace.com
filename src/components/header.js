import { Link } from "gatsby"
import React from "react"
import Drawer from "./navigation/drawer"
import logoImg from "../images/logo.svg"
import NavigationSearch from "./NavigationSearch"

const Header = ({ siteTitle, noSearch, hideSearch }) => (
  <header>
    <div className="container is-fullhd">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Drawer hideSearch={hideSearch} />
          <Link className="navbar-item" to="/">
            <img src={logoImg} width="112" height="28" alt="logo" />
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/article/category/pet-care/" className="navbar-item">
            Pet Care
          </Link>
          <Link to="/article/category/pet-health/" className="navbar-item">
            Pet Health
          </Link>
          <Link
            to="/article/category/pet-behavior-training/"
            className="navbar-item"
          >
            Pet Behavior & Training
          </Link>
          <Link to="/breeds/" className="navbar-item">
            Breeds
          </Link>
          <Link to="/article/category/pet-insurance/" className="navbar-item">
            Pet Insurance
          </Link>
          <Link
            to="/tags/ask-dr-debra-common-questions/"
            className="navbar-item"
          >
            Ask Dr. Debra
          </Link>
          {noSearch ? null : <NavigationSearch />}
        </div>
      </nav>
    </div>
  </header>
)

export default Header
