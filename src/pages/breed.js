import React, {useState} from 'react'
import Layout from '../components/layout'
import AkitaImg from '../static/images/akita'
import akita from '../images/akita-breed.png'
import one from '../images/1.svg'
import two from '../images/2.svg'
import three from '../images/3.svg'
import four from '../images/4.svg'
import five from '../images/5.svg'
import Slider from "react-slick";
import exerciseImg from '../images/exercise.png'
import groomingImg from '../images/grooming.png'
import healthImg from '../images/health.png'
import nutritionImg from '../images/nutrition.png'
import trainingImg from '../images/training.png'
import MobileSlider from "../components/breed/mobileSlider"
import { isMobile } from "react-device-detect";
import Img from 'gatsby-image'

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
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const factsSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
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
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
}

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

const Breed = ({data}) => {

  const facts = data.allWordpressBreedPosts.edges[0].node.acf.facts
  const { 
    height,
    weight,
    type,
    life_expectancy,
    area_of_origin,
    energy_level,
    playfulness,
    friendliness_to_dogs,
    friendliness_to_strangers,
    exercise_requirements,
    affection_level,
    friendliness_to_other_pets,
    watchfulness,
    grooming_requirements,
    vocality,
    history,
    nutrition,
    grooming,
    health,
    training,
    exercise,
    puppy_image,
    puppy,
    general_appearance,
    head,
    body,
    tail,
    forequarters,
    coat,
    hindquarters,
    about_image,
    history_image,

   } = data.allWordpressBreedPosts.edges[0].node.acf
  const title = data.allWordpressBreedPosts.edges[0].node.title
  const content = data.allWordpressBreedPosts.edges[0].node.content
  const featured = data.allWordpressBreedPosts.edges[0].node.featured
  console.log(nutrition)
  const [care, setCare] = useState({
    nutrition: true
  })

  const [breedStandard, setBreedStandard] = useState({
    general_appearance: true,
  })
  
  const careContent = (heading, content) => (
    <div className="columns care-content">
      <div className="column">
        <h3 dangerouslySetInnerHTML={{
          __html: heading
        }} />
        {/* <h3>{heading}</h3> */}
        <p dangerouslySetInnerHTML={{
          __html: content
        }} />
      </div>
    </div> 
  )
  const nutritionContent = careContent('Nutrition', nutrition)
  const groomingContent = careContent('Grooming', grooming)
  const healthContent = careContent('Health', health)
  const trainingContent = careContent('Training', training)
  const exerciseContent = careContent('Exercise', exercise)

  console.log(featured)
  return (
    <Layout>
      <section className="hero-section">
        {/* <Img sizes={{...childImageSharp.fluid, aspectRatio: 16 / 8}} alt="pet care" /> */}
        <Img sizes={{ ...featured.localFile.childImageSharp.fluid, aspectRatio: 22 / 7 }}  />
      </section>
      <div className="breed-generals">
        <div className="container is-fullhd">
          <div className="breed-generals-columns">
            <div className="breed-generals-column breed-name">
              <h1 dangerouslySetInnerHTML={{
                __html: title
              }} />
              <h2>Dog</h2>
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
      <section className="section breed-main-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column breed-main-content" dangerouslySetInnerHTML={{
              __html: content
            }} />
            <div className="column breed-main-image">
              <Img fluid={about_image.localFile.childImageSharp.fluid} />
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
            </div>
          </div>
          <div className="history-wrapper">
            <h3 dangerouslySetInnerHTML={{
              __html: title
            }} />
            <h4>History</h4>
            <div className="columns">
              <div className="column">
                <div className="history-content" dangerouslySetInnerHTML={{
                  __html: history
                }} />
              </div>
              <div className="column history-image-wrapper">
                <Img fluid={history_image.localFile.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          </div>
      </section>
      { isMobile ? <MobileSlider /> : <section className="section care-section">
        <div className="container is-fullhd">
          <h3 dangerouslySetInnerHTML={{
            __html: `${title} Care`
          }} />
          <div className="columns care-columns">
            <div className="column">
              <div onClick={ () => setCare({nutrition: true})} className={`care-card ${ care && care.nutrition ? "active" : ""}`}>
                <div className="image-wrapper">
                  <img src={nutritionImg} />
                </div>
                <p>Nutrition</p>
              </div>
            </div>
            <div className="column">
              <div onClick={ () => setCare({grooming: true})} className={`care-card ${ care && care.grooming ? "active" : ""}`}>
                <div className="image-wrapper">
                  <img src={groomingImg} />
                </div>
                <p>Grooming</p>
              </div>
            </div>
            <div className="column">
              <div onClick={ () => setCare({health: true})} className={`care-card ${ care && care.health ? "active" : ""}`}>
                <div className="image-wrapper">
                  <img src={healthImg} />
                </div>
                <p>Health</p>
              </div>
            </div>
            <div className="column">
              <div onClick={ () => setCare({training: true})} className={`care-card ${ care && care.training ? "active" : ""}`}>
                <div className="image-wrapper">
                  <img src={trainingImg} />
                </div>
                <p>Training</p>
              </div>
            </div>
            <div className="column">
              <div onClick={ () => setCare({exercise: true})} className={`care-card ${ care && care.exercise ? "active" : ""}`}>
                <div className="image-wrapper">
                  <img src={exerciseImg} />
                </div>
                <p>Exercise</p>
              </div>
            </div>
          </div>
          {care && care.nutrition ? nutritionContent : null }
          {care && care.grooming ? groomingContent : null }
          {care && care.health ? healthContent : null }
          {care && care.training ? trainingContent : null }
          {care && care.exercise ? exerciseContent : null }
          {/* <Slider {...settings}>
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
          </Slider> */}
          {/* {
            isNutrition && isNutrition.nutrition ? nutrition : null
          } */}
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
      <section className="section breed-standards-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column">
              <div className="breed-standards-list">
                <h3>Breed Standard</h3>
                <ul>
                  <li onClick={ () => setBreedStandard({general_appearance: true})}>General Appearance</li>
                  <li onClick={ () => setBreedStandard({head: true})}>Head</li>
                  <li onClick={ () => setBreedStandard({body: true})}>Body</li>
                  <li onClick={ () => setBreedStandard({tail: true})}>Tail</li>
                  <li onClick={ () => setBreedStandard({forequarters: true})}>Forequarters</li>
                  <li onClick={ () => setBreedStandard({coat: true})}>Coat</li>
                  <li onClick={ () => setBreedStandard({hindquarters: true})}>Hindquarters</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="columns breed-standards-content">
            <div className="column">
              {
                breedStandard && breedStandard.general_appearance ? 
                <p dangerouslySetInnerHTML={{
                  __html: general_appearance
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.head ? 
                <p dangerouslySetInnerHTML={{
                  __html: head
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.body ? 
                <p dangerouslySetInnerHTML={{
                  __html: body
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.tail ? 
                <p dangerouslySetInnerHTML={{
                  __html: tail
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.forequarters ? 
                <p dangerouslySetInnerHTML={{
                  __html: forequarters
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.coat ? 
                <p dangerouslySetInnerHTML={{
                  __html: coat
                }} /> :                
                null 
              }
              {
                breedStandard && breedStandard.hindquarters ? 
                <p dangerouslySetInnerHTML={{
                  __html: hindquarters
                }} /> :
                null 
              }
            </div>
          </div>
        </div>
      </section>
      <section className="section facts-section">
        <div className="container is-fullhd">
          <div className="">
            <div className="">
              <h3>Interesting Facts</h3>
              <Slider {...factsSettings}>
                {facts.map( (fact , index) => (
                  <div className="fact-slide">
                    <div className="fact-slide-content">
                      <h4>{index + 1}</h4>
                      <p dangerouslySetInnerHTML={{
                        __html: fact.post_content
                      }} />
                    </div>
                  </div>
                ) )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
  
}
export const query = graphql`
  {
    allWordpressBreedPosts {
      edges {
        node {
          title
          content
          featured {
            source_url
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          acf {
            height
            weight
            type
            life_expectancy
            area_of_origin
            energy_level
            playfulness
            friendliness_to_dogs
            friendliness_to_strangers
            exercise_requirements
            affection_level
            friendliness_to_other_pets
            watchfulness
            grooming_requirements
            vocality
            history
            nutrition
            grooming
            health
            training
            exercise
            puppy_image
            puppy
            general_appearance
            head
            body
            tail
            forequarters
            coat
            hindquarters
            facts {
              wordpress_id
              post_content 
            }
            history_image {
              source_url
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            about_image {
              source_url
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Breed
