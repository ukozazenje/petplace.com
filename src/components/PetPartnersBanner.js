import React from "react"

const PetPartnersBanner = ({ showPetPartners }) => {
  return (
    <div className="pet-insurance-cta-banner">
      <div className="container is-fullhd">
        <p>
          Want to learn more about pet insurance from the comfort of your home?
        </p>
        <div className="cta">
          <h4>Check out PetPartners today for a quote.</h4>
          <a
            href="https://www.petpartners.com/enroll?p=PPFB2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default PetPartnersBanner
