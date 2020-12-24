import React from "react"
import Icon from "../images/travel-guide/paw.svg"
import ArrowIcon from "../images/travel-guide/arrow.svg"
import { navigate } from "gatsby"
const travelGuideCard = ({
  cities,
  title,
  children,
  link,
  className,
  cityImage,
  openNewTab,
}) => {
  return (
    <section className={`section travel-guide-cards ${className}`}>
      <div className="container is-fullhd">
        <div className="travel-guide-card-wrapper">
          <div className="travel-guide-card-content">
            <h3>{title}</h3>
            {children}
            <div className="travel-guide-cards-icons-wrapper">
              {cities
                ? cities.map(city => (
                    <div key={city} className="travel-guide-card-icon">
                      <img src={Icon} alt="icon" />
                      <p>{city}</p>
                    </div>
                  ))
                : null}
            </div>
            {openNewTab ? (
              <button onClick={() => window.open(link, "_blank")}>
                <img src={ArrowIcon} alt="read more" />
                {/* <a href={`${link}`} target="_blank" rel="noopener noreferrer"> */}
                Read More
                {/* </a> */}
              </button>
            ) : (
              <button onClick={() => navigate(link)}>
                <img src={ArrowIcon} alt="read more" />
                Read More
              </button>
            )}
          </div>
          <div className="travel-guide-card-image-wrapper">{cityImage}</div>
        </div>
      </div>
    </section>
  )
}

export default travelGuideCard
