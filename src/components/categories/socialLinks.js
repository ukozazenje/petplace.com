import React from 'react'
import facebook from '../../images/facebookIcon.svg'
import pintrest from '../../images/pinterestIcon.svg'
import twitter from "../../images/twitterIcon.svg"
import instagram from '../../images/instagramIcon.svg'

const socialLinks = () => {

return (
	<div className="icons-wrapper">
	  <a href="https://www.facebook.com/petplacefans" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="social icon" /></a>
	  <a href="https://www.instagram.com/petplace/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="social icon" /></a>
	  <a href="https://www.pinterest.com/petplacefans/" target="_blank" rel="noopener noreferrer"><img src={pintrest} alt="social icon" /></a>
	  <a href="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="social icon" /></a>
	</div>
  )
}

export default socialLinks
