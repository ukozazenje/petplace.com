import React from 'react'
import ContentPublishingImg from '../../images/mob_content_publishing.png'
import SocialMediaImg from '../../images/mob_social_media.png'
import OnlineAdvertisingImg from '../../images/mob_online_advertising.png'
import FacebookIcon from '../../images/facebook-white.svg'
import TwitterIcon from '../../images/twitter-white.svg'
import InstagramIcon from '../../images/instagram-white.svg'

const AdvertiseBoxes = () => {
  return (
    <>
      <section className="advertise-boxes advertise-boxes-mobile">
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper">
            <img src={ ContentPublishingImg } />
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
        </div>
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper">
            <img src={ SocialMediaImg } />
            <div className="advertise-box">
              <h3>Social Media</h3>
              <p>Get creative and expand brand awareness by sponsoring content on one of our social media platforms. </p>
              <div className="icons-wrapper">
                <a href="">
                  <img src={ FacebookIcon } />
                </a>
                <a href="">
                  <img src={ TwitterIcon } />
                </a>
                <a href="">
                  <img src={ InstagramIcon } />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper">
            <img src={ OnlineAdvertisingImg } />
            <div className="advertise-box">
              <h3>Online Advertising</h3>
              <p>Advertise either on our website or in our newsletters (or both!) and promote your business to a whole new online audience.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="advertise-boxes advertise-boxes-desktop">
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper content-publishing-img">
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
          <div className="advertise-box-wrapper social-media-img">
            <div className="advertise-box">
              <h3>Social Media</h3>
              <p>Get creative and expand brand awareness by sponsoring content on one of our social media platforms. </p>
              <div className="icons-wrapper">
              <a href="https://www.facebook.com/petplacefans" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} />
                </a>
                <a href="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer">
                  <img src={ TwitterIcon } />
                </a>
                <a href="https://www.instagram.com/petplace/" target="_blank" rel="noopener noreferrer">
                  <img src={ InstagramIcon } />
                </a>
              </div>
            </div>
          </div>
          <div className="advertise-box-wrapper online-advertise-img">
            <div className="advertise-box">
              <h3>Online Advertising</h3>
              <p>Advertise either on our website or in our newsletters (or both!) and promote your business to a whole new online audience.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdvertiseBoxes
