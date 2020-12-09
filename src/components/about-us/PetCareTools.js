import React from 'react'
import AskDrDebraImg from '../../images/about-us/ask-dr-debra.jpg'
import BreedGuideImg from '../../images/about-us/breed-guide.jpg'
import TravelGuideImg from '../../images/about-us/travel-guide.jpg'
import {Link} from 'gatsby'

const PetCareTools = () => {
  return (
      <section className="section pet-care-tools">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column">
              <h2>More Pet Care Tools and Resources</h2>
              <div className="columns pet-care-article">
                <div className="column is-4">
                  <img src={AskDrDebraImg} alt="Ask Dr. Debra thumbnail" />
                </div>
                <div className="column">
                  <h3>
                    Ask Dr. Debra
                  </h3>
                  <p>Over more than ten years, the PetPlace team has answered a lot of pet care questions. Many of those answers have come from Dr. Debra Primovic. In addition to practicing veterinary medicine for over 30 years, Dr. Debra has offered advice and answered burning questions for hundreds of PetPlace readers. Have you got a pet care query? Write in! You may even be featured on the site. </p>
                  <Link to="/tags/ask-dr-debra-common-questions/" className="about-us-btn">Ask Dr. Debra</Link>
                </div>
              </div>
              <div className="columns pet-care-article">
                <div className="column is-4">
                  <img src={BreedGuideImg} alt="Breed guide thumbnail" />
                </div>
                <div className="column">
                  <h3>
                    Breed Guide
                  </h3>
                  <p>Did you know that the American Kennel Club recognizes more than 200 different breeds of dogs? Each is carefully bred and possesses a unique appearance, personality, and temperament. The PetPlace Breed Guide covers all this and more providing a comprehensive overview of each and every AKC-recognized breed -- from the Affenpinscher to the Yorkshire Terrier. It’s a perfect resource for prospective pet parents, avid dog show watchers, and casual canine fans alike.</p>
                  <Link to="/article/breed/" className="about-us-btn">Breed Guide</Link>
                </div>
              </div>
              <div className="columns pet-care-article">
                <div className="column is-4">
                  <img src={TravelGuideImg} alt="Walking doog, nature"  />
                </div>
                <div className="column">
                  <h3>
                    Travel Guide
                  </h3>
                  <p>Hitting the road is better with pets in tow. Plan a purrfect trip for the entire family with PetPlace’s nation-spanning travel guide. We’ve searched the country and collected an entire directory of pet-friendly attractions, restaurants, and hotels from sea to shining sea. Hit the beach, hike a mountain trail, or just relax by the pool with PetPlace as your guide.</p>
                  <Link to="/travel-guide/" className="about-us-btn">Travel Guide</Link>
                </div>
              </div>
            </div>
           
          </div>         
        </div>
      </section>
  )
}

export default PetCareTools