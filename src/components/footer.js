import React from 'react'
import { Link } from 'gatsby'
import facebook from '../images/facebook-footer.png'
import googlePlus from '../images/google-plus-footer.png'
import twitter from "../images/twitter-footer.png"
import instagram from '../images/instagram-footer.png'
import logo from "../images/logo-footer.png"
const footer = () => {
  return (
    <footer className="section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={logo} className="footer-logo" alt="logo" />
            <p>By Vets. For Pets.</p>
            <div className="icons-wrapper">
              <a href="https://www.facebook.com/petplacefans" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="social icon" /></a>
              <a href="https://www.instagram.com/petplace/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="social icon" /></a>
              <img src={googlePlus} alt="social icon" />
              <a href="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="social icon" /></a>
            </div>
          </div>
          <div className="column">
            <h6>Pet Care</h6>
            <div className="footer-menu-wrapper">
              <Link to="/">Dog Care</Link>
              <Link to="/">Cat Care</Link>
              <Link to="/">Small Pet Care</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Health</h6>
            <div className="footer-menu-wrapper">
              <Link to="/">Dog Health</Link>
              <Link to="/">Cat Health</Link>
              <Link to="/">Small Pet Health</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Behavior & Training</h6>
            <div className="footer-menu-wrapper">
              <Link to="/">Dog Behavior & Training</Link>
              <Link to="/">Cat Behavior & Training</Link>
              <Link to="/">Small Pet Behavior & Training</Link>
            </div>
          </div>
          <div className="column">
            <h6>Breeds</h6>
            <div className="footer-menu-wrapper">
              <Link to="/">Dog Breeds</Link>
              <Link to="/">Cat Breeds</Link>
              <Link to="/">Small Pet Breeds</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Insurance</h6>
            <div className="footer-menu-wrapper">
              <Link to="/">Pet Peeves</Link>
              <Link to="/">Pet News & Videos</Link>
              <Link to="/">Fun Stuff</Link>
              <Link to="/">Just For Kids</Link>
              <Link to="/">Surveys & Polls</Link>
              <Link to="/">Reader Stories</Link>
              <Link to="/">Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
