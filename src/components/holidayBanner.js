import React from "react"
import ArrowIcon from "../images/arrow.svg"
import { Link } from "gatsby"
const holidayBanner = ({ hideHolidayBanner }) => {
  console.log("hideHolidayBanner", hideHolidayBanner)
  return hideHolidayBanner ? null : (
    <section className="holiday-banner-section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column">
            <h2>Holiday gift guide</h2>
            <Link
              to="/article/general/just-for-fun/2020-holiday-gift-guide-for-pets-and-pet-lovers/"
              className="banner-btn read-more-btn"
            >
              <img className="arrow-ico" src={ArrowIcon} alt="Arrow Icon" />
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default holidayBanner
