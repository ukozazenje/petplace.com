import React from 'react'
import { Link } from 'gatsby'
import facebook from '../images/facebook-footer.png'
import pintrest from '../images/pinterest-footer.png'
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
              <a href="https://www.pinterest.com/petplacefans/" target="_blank" rel="noopener noreferrer"><img src={pintrest} alt="social icon" /></a>
              <a href="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="social icon" /></a>
            </div>
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
              <Link to="/article/category/pet-health/dog-health">Dog Health</Link>
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
              <Link to="/article/category/breeds/dog-breeds">Dog Breeds</Link>
              <Link to="/article/category/breeds/cat-breeds/">Cat Breeds</Link>
              <Link to="/article/category/breeds/small-pet-breeds/">Small Pet Breeds</Link>
            </div>
          </div>
          <div className="column">
            <h6>Pet Insurance</h6>
            <div className="footer-menu-wrapper">
              <Link to="/article/category/just-for-fun/pet-peeves/">Pet Peeves</Link>
              <Link to="article/category/just-for-fun/videos/">Pet News & Videos</Link>
              <Link to="/article/category/just-for-fun/fun-stuff/">Fun Stuff</Link>
              <Link to="/article/category/just-for-fun/just-for-kids/">Just For Kids</Link>
              <Link to="/article/category/just-for-fun/surveys-polls/">Surveys & Polls</Link>
              <Link to="/article/category/just-for-fun/reader-stories/">Reader Stories</Link>
              <Link to="/article/category/just-for-fun/reviews/">Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
