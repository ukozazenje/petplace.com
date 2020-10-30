import React from 'react'

const WelcomeCard = ({image, icon, title, children}) => {
  return (
    <div className="welcome-section-card">
      {image}
      <div className="welcome-section-card-wrapper">
        <div className="welcome-section-card-icon-wrapper">
          <img src={icon} alt="team icon" />
          <h3>{title}</h3>
        </div>
        <div className="welcome-section-card-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard
