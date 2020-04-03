import React from 'react'
import Layout from '../components/layout'
import AkitaImg from '../static/images/akita'
import akita from '../images/akita-breed.png'
const breed = () => {
  return (
    <Layout>
      <section className="hero-section">
        <AkitaImg />
      </section>
      <div className="breed-generals">
        <div className="container is-fullhd">
          <div className="breed-generals-columns">
            <div className="breed-generals-column breed-name">
              <h1>Akita Inu</h1>
              <h2>Japanese Akita</h2>
            </div>
            <div className="breed-generals-column general-attributes-wrapper">
              <div className="general-attributes">
                <span>Height</span>
                <span>23-28"</span>
              </div>
              <div className="general-attributes">
                <span>Weight</span>
                <span>65-115 Ib</span>
              </div>
              <div className="general-attributes">
                <span>Type</span>
                <span>Working</span>
              </div>
              <div className="general-attributes">
                <span>Life Expectancy</span>
                <span>10-13 years</span>
              </div>
              <div className="general-attributes">
                <span>Area of Origin</span>
                <span>Japan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column breed-main-content">
              <p>This is a large and powerful breed, with much substance and heavy bone, and is slightly longer than tall. The Akita’s build reflects its original job of finding big game in deep snow and rugged terrain. This breed’s double coat consists of a dense undercoat and straight, rough, outer coat standing off from the body, about 2 inches or less in length. Such a combination provides ample insulation from water and weather. The gait is brisk and powerful. The Akita is a versatile dog of large spitz type, able to perform as hiking companion and protector.</p>
              <p>Akitas are quiet, fastidious dogs. Wary of strangers and often intolerant of other animals, Akitas will gladly share their silly, affectionate side with family and friends. They thrive on human companionship. The large, independent-thinking Akita is hardwired for protecting those they love. They must be well socialized from birth with people and other dogs.</p>
            </div>
            <div className="column breed-main-image">
              <img src={akita} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default breed
