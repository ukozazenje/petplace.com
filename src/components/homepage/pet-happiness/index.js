import React from 'react'
// import worldImg from "../../../images/world.png"
// import articles from "../../../images/articles.png"
// import organized from "../../../images/organized.png"
// import expert from "../../../images/expert.png"
import PetHappinessImage from "../../../static/images/petHappinesImg"
import OrganizedIcon from "../../../static/images/organizedIcon"
import ExpertIcon from "../../../static/images/expertIcon"
import WorldIcon from "../../../static/images/worldwideIcon"
import ArticleIcon from "../../../static/images/articlesIcon"
const PetHappiness = () => {
  return (
    <section className="section pet-happiness">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column intro">
            <h2>Your Pet’s <span className="highlight">Health</span> and <span className="highlight">Happiness</span> Comes First!</h2>
            <p>Our dedicated team of authors and experts are here to provide you with pet information that you can depend on.</p>
            {/* <img src={happinessImg} /> */}
            <PetHappinessImage />
          </div>
          <div className="column happiness-list">
            <div className="columns">
              <div className="column">
                {/* <img src={expert} alt="" /> */}
                <ExpertIcon />
                <h4>Pet Experts</h4>
                <p>A world-class editorial team of pet experts and authors.</p>
              </div>
              <div className="column">
                {/* <img src={worldImg} alt="" /> */}
                <WorldIcon />
                <h4>Worldwide Vets</h4>
                <p>Vets, vet techs, trainers, behaviorists, and industry experts from around the world.</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                {/* <img src={articles} alt="" /> */}
                <ArticleIcon />
                <h4>10,000 approved articles</h4>
                <p>A library featuring over 10,000 veterinarian-written/approved articles.</p>
              </div>
              <div className="column">
                {/* <img src={organized} alt="" /> */}
                <OrganizedIcon />
                <h4>Super Organized</h4>
                <p>Access to all of the information you need to make more informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PetHappiness
