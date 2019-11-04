import React from 'react'
import happinessImg from "../../../images/happiness.png"
import worldImg from "../../../images/world.png"
import articles from "../../../images/articles.png"
import organized from "../../../images/organized.png"
import expert from "../../../images/expert.png"

const PetHappiness = () => {
  return (
    <section className="section pet-happiness">
      <div className="container is-widescreen">
        <div className="columns">
          <div className="column  intro">
            <h2>Your Pet’s <span className="highlight">Health</span> and <span className="highlight">Happiness</span> Comes First!</h2>
            <p>Ask any pet parent.  Our pets are our furry children, beloved members of our family.  We love them dearly and we want to give them the best possible life.</p>
            <img src={happinessImg} />
          </div>
          <div className="column happiness-list">
            <div className="columns">
              <div className="column">
                <img src={expert} />
                <h4>Pet Experts</h4>
                <p>World-class editorial team of pet experts and authors</p>
              </div>
              <div className="column">
                <img src={worldImg} />
                <h4>Worldwide Vets</h4>
                <p>Vets, vet techs, trainers and behaviorists from industry worldwide</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <img src={articles} />
                <h4>10,000 approved articles</h4>
                <p>Library of over 10,000 veterinarian written/approved articles</p>
              </div>
              <div className="column">
                <img src={organized} />
                <h4>Super Organized</h4>
                <p>Access to all the information you need to make more informed decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PetHappiness
