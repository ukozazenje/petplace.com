import React from "react"
import ContentPublishingImg from "../../images/advertise-with-us/content_publishing_icon.svg"
import OnlineAdvertisingImg from "../../images/advertise-with-us/online_advertising_icon.svg"
import SocialMediaImg from "../../images/advertise-with-us/social_media_icon.svg"

const AdvertiseWithUsIntro = () => {
  return (
    <section className="section advertise-with-us-intro">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column">
            <h1>
              Providing a Path <br />
              <span className="highlight">To Pet Parents For Your Brand</span>
            </h1>
            <p className="advertise-subheading">
              Our brand partnerships provide businesses with a wonderful
              opportunity to position themselves as thought leaders, innovators,
              experts, and go-to resources for our diverse audience of pet
              parents. Together, we can craft thoughtful, engaging content that
              captures our audience’s attention and yields new customers.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column advertise-column">
            <img
              className="advertise-ico"
              src={ContentPublishingImg}
              alt="Content Publishing Icon"
            />
            <h3>Content Publishing</h3>
            <span className="text-divider"></span>
            <p>
              Sponsor content for our site and lend your expertise to an article
              that will be seen by nearly 1 million people in your target
              demographic.
            </p>
          </div>
          <div className="column advertise-column">
            <img
              className="advertise-ico"
              src={SocialMediaImg}
              alt="Social Media Icon"
            />
            <h3>Social Media</h3>
            <span className="text-divider"></span>
            <p>
              Get creative and expand brand awareness by sponsoring content on
              one of our social media platforms.{" "}
            </p>
          </div>
          <div className="column advertise-column">
            <img
              className="advertise-ico"
              src={OnlineAdvertisingImg}
              alt="Online Advertising Icon"
            />
            <h3>Online Advertising</h3>
            <span className="text-divider"></span>
            <p>
              Advertise either on our website or in our newsletters (or both!)
              and promote your business to a whole new online audience.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <a          
              href="/mediaKit2021.pdf"
              title="Petplace mediakit 2021"
              className="download-btn"
              target="_blank"
            >
              Download our 2021 Media Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvertiseWithUsIntro
