import React, {useState} from 'react'
import Layout from '../components/layout'
import AkitaImg from '../static/images/akita'
import akita from '../images/akita-breed.png'
import five from '../images/5.svg'
import Slider from "react-slick";
import exerciseImg from '../images/exercise.png'
import groomingImg from '../images/grooming.png'
import healthImg from '../images/health.png'
import nutritionImg from '../images/nutrition.png'
import trainingImg from '../images/training.png'
import MobileSlider from "../components/breed/mobileSlider"
import { isMobile } from "react-device-detect";

const nutrition = <div className="columns care-content">
      <div className="column">
        <h3>Nutrition</h3>
        <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
      </div>
    </div> 
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const Breed = () => {

  const [isNutrition, setNutrition] = useState({
    nutrition: false, 
    grooming: false,
    health: false,
    training: false, 
    exercise: false
  })

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
      <section className="section attributes-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column columns attributes-wrapper">
              <div className="column">
                <div className="attribute">
                  <p>Energy Level</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>Playfulness</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>Friendliness to dogs</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>Friendliness to strangers</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>exercise requirements</p>
                  <img src={five} />
                </div>
              </div>
              <div className="column">
                <div className="attribute">
                  <p>affection level</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>friendliness to other pets</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>watchfulness</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>Grooming Requirements</p>
                  <img src={five} />
                </div>
                <div className="attribute">
                  <p>Vocality</p>
                  <img src={five} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      { isMobile ? <MobileSlider /> : <section className="section care-section">
        <div className="container is-fullhd">
          <h3>Akita Inu Care</h3>
          <Slider {...settings}>
            <div className="care-slider">
              <div className="care-card">
                <div className="image-wrapper">
                  <img src={nutritionImg} />
                </div>
                <p>Nutrition</p>
              </div>
            </div>
            <div className="care-slider">
              <div onClick={ () => setNutrition({...isNutrition, nutrition: true})} className={`care-card ${isNutrition && isNutrition.grooming ? 'active' : ""}`}>
                <div className="image-wrapper">
                  <img src={groomingImg} />
                </div>
                <p>Grooming</p>
              </div>
            </div>
            <div className="care-slider">
              <div className="care-card">
                <div className="image-wrapper">
                  <img src={healthImg} />
                </div>
                <p>Health</p>
              </div>
            </div>
            <div className="care-slider">
              <div className="care-card">
                <div className="image-wrapper">
                  <img src={trainingImg} />
                </div>
                <p>Training</p>
              </div>
            </div>
            <div className="care-slider">
              <div className="care-card">
                <div className="image-wrapper">
                  <img src={exerciseImg} />
                </div>
                <p>Exercise</p>
              </div>
            </div>
          </Slider>
          {
            isNutrition && isNutrition.nutrition ? nutrition : null
          }
          {/* {
            isNutrition && isNutrition.grooming ? grooming : null
          }
          {
            isNutrition && isNutrition.health ? health : null
          }
          {
            isNutrition && isNutrition.training ? training : null
          }
          {
            isNutrition && isNutrition.exercise ? exercise : null
          } */}
          {/* <div className="columns care-content">
            <div className="column">
              <h3>Nutrition</h3>
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div> */}
        </div>
        </section> }
    </Layout>
  )
  
}

export default Breed
