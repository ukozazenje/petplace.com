import React from 'react'
import { Link } from 'gatsby'
import facebook from '../../images/facebookIcon.svg'
import pintrest from '../../images/pinterestIcon.svg'
import twitter from "../../images/twitterIcon.svg"
import instagram from '../../images/instagramIcon.svg'

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