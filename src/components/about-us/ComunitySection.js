import React from 'react'
import PuppyCoolImg from '../../images/about-us/puppycool.jpg'
import FacebookIcon from '../../images/facebookIcon.svg'
import InstagramIcon from '../../images/instagramIcon.svg'
import PinterestIcon from '../../images/pinterestIcon.svg'
import TwitterIcon from '../../images/twitterIcon.svg'

const ComunitySection = () => {
  return (
    <>
      <section className="section comunity-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column">
              <div className="text-content-wrap">
                <h3>Join The Community</h3>
                <p>We’re pet lovers, just like you. So please interact with us and other pet lovers on:</p>
                <div className="icons-wrapper">
                  <a href="https://www.facebook.com/petplacefans" target="_blank">
                    <img src={FacebookIcon} alt="social icon" />
                  </a>
                  <a href="https://www.instagram.com/petplace/" target="_blank">
                    <img src={InstagramIcon} alt="social icon" />
                  </a>
                  <a href="https://www.pinterest.com/petplacefans/" target="_blank">
                    <img src={PinterestIcon} alt="social icon" />
                  </a>
                  <a href="https://twitter.com/PetPlaceFans" target="_blank">
                    <img src={TwitterIcon} alt="social icon" />
                  </a>
                </div>
                <p>“It takes a village” and we like to believe that any comments, questions, or “likes” will only help to make us better. We’d love to hear from you, so connect with us today!</p>
              </div>
            </div>
            <div className="column image-wrapper">
              <img src={PuppyCoolImg} alt="A line up of chihuahuas in sunglasses" />
            </div>
          </div>         
        </div>
        
      </section>
    </>
  )
}

export default ComunitySection