import React from 'react'
import ArrowIcon from "../images/arrow.svg"
const holidayBanner = () => {
  return (
    <section className="holiday-banner-section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column">
            <h2>Holiday gift guide</h2>
            <a href="#" className="banner-btn read-more-btn">
              <img
                    className="arrow-ico"
                    src={ArrowIcon}
                    alt="Arrow Icon"
                />
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default holidayBanner