import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from "./categories/socialLinks.js"
import logo from "../images/logo.svg"

const fullFooter = () => (
  <footer>
    <section className="footer-nav section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-one-quarter">
            <Link to="/" >
              <img src={logo} className="footer-logo" alt="logo" />
            </Link>
            <p className="tagline">By Vets. For Pets.</p>
            <SocialLinks/>
          </div>
          <div className="column">
            <h6>Pet Care</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/pet-care/dog-care/">Dog Care</Link>
              <Link to="/article/category/pet-care/cat-care/">Cat Care</Link>
              <Link to="/article/category/pet-care/small-pet-care/">Small Pet Care</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Health</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/pet-health/dog-health/">Dog Health</Link>
              <Link to="/article/category/pet-health/cat-health/">Cat Health</Link>
              <Link to="/article/category/pet-health/small-pet-health/">Small Pet Health</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Behavior & Training</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/pet-behavior-training/dog-behavior-training/">Dog Behavior & Training</Link>
              <Link to="/article/category/pet-behavior-training/cat-behavior-training/">Cat Behavior & Training</Link>
              <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/">Small Pet Behavior & Training</Link>
            </div>
          </div>
          <div className="column">
            <h6>Breeds</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/breeds/dog-breeds/">Dog Breeds</Link>
              <Link to="/article/category/breeds/cat-breeds/">Cat Breeds</Link>
              <Link to="/article/category/breeds/small-pet-breeds/">Small Pet Breeds</Link>
            </div>
          </div>
          <div className="column">
            <h6>Just For Fun</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/just-for-fun/pet-peeves/">Pet Peeves</Link>
              <Link to="/article/category/just-for-fun/videos/">Pet News & Videos</Link>
              <Link to="/article/category/just-for-fun/fun-stuff/">Fun Stuff</Link>
              <Link to="/article/category/just-for-fun/just-for-kids/">Just For Kids</Link>
              <Link to="/article/category/just-for-fun/surveys-polls/">Surveys & Polls</Link>
              <Link to="/article/category/just-for-fun/reader-stories/">Reader Stories</Link>
              <Link to="/article/category/just-for-fun/reviews/">Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {copyrightFooter()}
  </footer>
)

const copyrightFooter = () => {
  const dt = new Date()
  const year = dt.getFullYear()
  return (
    <footer>
      <section className="footer-container section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-5">
              <ul>
                <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use/">Terms of Use</Link></li>
                <li><Link to="/about-us/">About Us</Link></li>
                <li><Link to="/advertise-with-us/">Advertise With Us</Link></li>
              </ul>
            </div>
            <div className="column is-7 copyright">
              <p>&copy;Copyright 1999 - {year}. The IHC Group. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
const footer = ({hideFooterNavigation}) => { 
  return (
    hideFooterNavigation ? copyrightFooter() : fullFooter()
  )
}

export default footer
