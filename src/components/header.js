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

        <div className="navbar-end pp-navbar">
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
          <Link to="/article/breed/" className="navbar-item">
            Breed Guide
          </Link>
          <Link to="/article/category/pet-insurance/" className="navbar-item">
            Pet Expenses
          </Link>
          {/* <Link
            to="/tags/ask-dr-debra-common-questions/"
            className="navbar-item"
          >
            Ask Dr. Debra
          </Link> */}
          <Link
            to="/article/general/pet-insurance/pet-insurance-review/"
            className="navbar-item"
          >
            Learn About Pet Insurance
          </Link>
          {noSearch ? null : <NavigationSearch />}
        </div>
      </nav>
    </div>
  </header>
)

export default Header
