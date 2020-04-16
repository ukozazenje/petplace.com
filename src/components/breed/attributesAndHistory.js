import React from 'react'
import Img from 'gatsby-image'
import one from '../../images/1.svg'
import two from '../../images/2.svg'
import three from '../../images/3.svg'
import four from '../../images/4.svg'
import five from '../../images/5.svg' 

const attributeLevel = (level) => {
  switch (level) {
    case "1":
      return <img src={one} />
    case "2":
      return <img src={two} />
    case "3":
      return <img src={three} />
    case "4":
      return <img src={four} />
    case "5":
      return <img src={five} />
    default:
      break;
  }
}

const attributesAndHistory = ({hideAttributes ,hideHistory, energy_level, playfulness, friendliness_to_dogs, friendliness_to_other_pets, friendliness_to_strangers, exercise_requirements, affection_level, watchfulness, vocality, grooming_requirements, history, history_image, title}) => {
  return (
    <section className="section attributes-section">
      <div className="container is-fullhd">
        <div className="columns">
        {!hideAttributes ? <div className="column columns attributes-wrapper">
            <div className="column">
              <div className="attribute">
                <p>Energy Level</p>
              {attributeLevel(energy_level) }
              </div>
              <div className="attribute">
                <p>Playfulness</p>
                {attributeLevel(playfulness)}
              </div>
              <div className="attribute">
                <p>Friendliness to dogs</p>
                {attributeLevel(friendliness_to_dogs)}
              </div>
              <div className="attribute">
                <p>Friendliness to strangers</p>
                {attributeLevel(friendliness_to_strangers)}
              </div>
              <div className="attribute">
                <p>exercise requirements</p>
                {attributeLevel(exercise_requirements)}
              </div>
            </div>
            <div className="column">
              <div className="attribute">
                <p>affection level</p>
                {attributeLevel(affection_level)}
              </div>
              <div className="attribute">
                <p>friendliness to other pets</p>
                {attributeLevel(friendliness_to_other_pets)}
              </div>
              <div className="attribute">
                <p>watchfulness</p>
                {attributeLevel(watchfulness)}
              </div>
              <div className="attribute">
                <p>Grooming Requirements</p>
                {attributeLevel(grooming_requirements)}
              </div>
              <div className="attribute">
                <p>Vocality</p>
                {attributeLevel(vocality)}
              </div>
            </div>
          </div> : null
        }
        </div> 
        {!hideHistory ? <div className="history-wrapper">
          <div className="columns">
            <div className="column history-image-wrapper">
              <Img fluid={history_image.localFile.childImageSharp.fluid} />
            </div>
            <div className="column history-content">
              <h3 dangerouslySetInnerHTML={{
                __html: title
              }} />
              <h4>History</h4>
              <div dangerouslySetInnerHTML={{
                __html: history
              }} />
            </div>
          </div>
        </div> : 
        null
        }
      </div>
    </section>
  )
}

export default attributesAndHistory
