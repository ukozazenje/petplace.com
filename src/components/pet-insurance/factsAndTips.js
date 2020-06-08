import plateDog from "../../images/pet-insurance/Mobile/04_ellipse_mob.png"
import React from "react"

const FactsAndTips = ({ img, data}) => (
  <div className="column is-half-tablet">
    <div className="column-card">
      <div className="columns">
        <div className="column column-image is-one-third">
          <img src={ img } alt="dog in blanket"/>
        </div>
        <div className="column">
          <div dangerouslySetInnerHTML={{
            __html: data
          }} />
        </div>
      </div>
    </div>
  </div>
  )

export default FactsAndTips;
