import React from 'react'
import { Link } from 'gatsby'
import facebook from '../../images/facebook-footer.png'
import pintrest from '../../images/pinterest-footer.png'
import twitter from "../../images/twitter-footer.png"
import instagram from '../../images/instagram-footer.png'

const socialLinks = () => {

return (
	<div className="icons-wrapper">
	  <Link to="https://www.facebook.com/petplacefans" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="social icon" /></Link>
	  <Link to="https://www.instagram.com/petplace/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="social icon" /></Link>
	  <Link to="https://www.pinterest.com/petplacefans/" target="_blank" rel="noopener noreferrer"><img src={pintrest} alt="social icon" /></Link>
	  <Link to="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="social icon" /></Link>
	</div>
  )
}

export default socialLinks