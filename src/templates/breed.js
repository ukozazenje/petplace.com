import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import one from '../images/1.svg'
// import two from '../images/2.svg'
// import three from '../images/3.svg'
// import four from '../images/4.svg'
// import five from '../images/5.svg'
import Slider from "react-slick"
import exerciseImg from "../images/exercise.png"
import groomingImg from "../images/grooming.png"
import healthImg from "../images/health.png"
import nutritionImg from "../images/nutrition.png"
import trainingImg from "../images/training.png"
import MobileSlider from "../components/breed/mobileSlider"
import { isMobile } from "react-device-detect"
import Img from "gatsby-image"
import { setBreedColor } from "../components/functions"
import ContactUsSection from "../components/homepage/contact-us"
import BreedsToExplore from "../components/breed/breedsToExplore"
import AttributesAndHistory from "../components/breed/attributesAndHistory"
import Accordion from "../components/breed/Accordion"
import CatFooterImg from "../static/images/CatFooterImage"
import { filterAuthorsLink } from "../components/functions"
import avatarImg from "../images/author.svg"
import { Link } from "gatsby"
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
        infinite: true,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const factsSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

// const attributeLevel = (level) => {
//   switch (level) {
//     case "1":
//       return <img src={one} />
//     case "2":
//       return <img src={two} />
//     case "3":
//       return <img src={three} />
//     case "4":
//       return <img src={four} />
//     case "5":
//       return <img src={five} />
//     default:
//       break;
//   }
// }

const Breed = ({ data }) => {
  // console.log(data.wordpressBreedPosts.acf)
  // console.log(breeds_to_explore)

  const facts = data.wordpressBreedPosts.acf.facts
  const breeds_to_explore = data.wordpressBreedPosts.breeds_to_explore
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
    forequarters_title,
    general_appearance_title,
    grooming_title,
    head_title,
    health_title,
    hindquarters_title,
    history_title,
    nutrition_title,
    tail_title,
    training_title,
    exercise_title,
    coat_title,
    body_title,
    interesting_facts_title,
    breed_standard_main_title,
    care_main_title,
    references,
    breed_author_name,
  } = data.wordpressBreedPosts.acf
  const title = data.wordpressBreedPosts.title
  const content = data.wordpressBreedPosts.content
  const featured = data.wordpressBreedPosts.featured
  const { yoast_meta, yoast_title } = data.wordpressBreedPosts
  const defaultPostImgUrl = data.postHeroImg.childImageSharp.fluid.src
  const [care, setCare] = useState({
    nutrition: true,
  })

  const [maxHeight, setMaxHeight] = useState("auto")

  const [breedStandard, setBreedStandard] = useState({
    general_appearance: true,
  })
  console.log("breeds_to_explore", breeds_to_explore)

  const careContent = (heading, content) => (
    <div className="columns care-content">
      <div className="column">
        <h3
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />
        {/* <h3>{heading}</h3> */}
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </div>
  )
  const nutritionContent = careContent(
    `${nutrition_title || "Nutrition"}`,
    nutrition
  )
  const groomingContent = careContent(
    `${grooming_title || "Grooming"}`,
    grooming
  )
  const healthContent = careContent(`${health_title || "Health"}`, health)
  const trainingContent = careContent(
    `${training_title || "Training"}`,
    training
  )
  const exerciseContent = careContent(
    `${exercise_title || "Exercise"}`,
    exercise
  )

  return (
    <Layout>
      <SEO
        title={yoast_title}
        image={
          (featured &&
            featured.localFile &&
            featured.localFile.childImageSharp &&
            featured.localFile.childImageSharp.fluid.src) ||
          defaultPostImgUrl
        }
        description={yoast_meta}
      />
      <section className="hero-section">
        <div className="is-hidden-touch">
          {featured &&
          featured.localFile &&
          featured.localFile.childImageSharp ? (
            <Img
              sizes={{
                ...featured.localFile.childImageSharp.fluid,
                aspectRatio: 22 / 7,
              }}
              alt="breed"
            />
          ) : (
            <Img
              sizes={{
                ...data.postHeroImg.childImageSharp.fluid,
                aspectRatio: 22 / 7,
              }}
              alt="breed"
            />
          )}
        </div>
        <div className="is-hidden-desktop">
          {featured &&
          featured.localFile &&
          featured.localFile.childImageSharp ? (
            <Img
              sizes={{
                ...featured.localFile.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="breed"
            />
          ) : (
            <Img
              sizes={{
                ...data.postHeroImg.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="breed"
            />
          )}
        </div>
      </section>
      <div className="breed-generals">
        <div className="container is-fullhd">
          <div className="breed-generals-columns">
            <div className="breed-generals-column breed-name">
              <h1
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              />

              <p className="author-name">
                {filterAuthorsLink(breed_author_name) ? (
                  <>
                    <img className="author-img" src={avatarImg} alt="avatar" />
                    <Link
                      to={`/authors/${filterAuthorsLink(
                        breed_author_name || "PetPlace Staff"
                      )}`}
                    >
                      {breed_author_name || "PetPlace Staff"}
                    </Link>
                  </>
                ) : (
                  <>
                    <img className="author-img" src={avatarImg} alt="avatar" />
                    {breed_author_name || "PetPlace Staff"}
                  </>
                )}
              </p>
              {/* <h2>Dog</h2> */}
            </div>
            <div className="breed-generals-column general-attributes-wrapper">
              <div className="general-attributes">
                <span>Height</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: height,
                  }}
                />
              </div>
              <div className="general-attributes">
                <span>Weight</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: weight,
                  }}
                />
              </div>
              <div className="general-attributes">
                <span>Type</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: type,
                  }}
                />
              </div>
              <div className="general-attributes">
                <span>Life Expectancy</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: life_expectancy,
                  }}
                />
              </div>
              <div className="general-attributes">
                <span>Area of Origin</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: area_of_origin,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="is-hidden-desktop">
        <AttributesAndHistory
          hideHistory={true}
          energy_level={energy_level}
          playfulness={playfulness}
          friendliness_to_dogs={friendliness_to_dogs}
          friendliness_to_other_pets={friendliness_to_other_pets}
          friendliness_to_strangers={friendliness_to_strangers}
          exercise_requirements={exercise_requirements}
          affection_level={affection_level}
          watchfulness={watchfulness}
          vocality={vocality}
          grooming_requirements={grooming_requirements}
          history={history}
          history_image={history_image}
          title={title}
          history_title={history_title}
        />
      </div>
      <section className="section breed-main-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column breed-main-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
              {/* <div className="references" 
                dangerouslySetInnerHTML={{
                  __html: references
                }}
              /> */}
            </div>
            <div className="column breed-main-image">
              <Img fluid={about_image.localFile.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
      <div className="is-hidden-touch">
        <AttributesAndHistory
          energy_level={energy_level}
          playfulness={playfulness}
          friendliness_to_dogs={friendliness_to_dogs}
          friendliness_to_other_pets={friendliness_to_other_pets}
          friendliness_to_strangers={friendliness_to_strangers}
          exercise_requirements={exercise_requirements}
          affection_level={affection_level}
          watchfulness={watchfulness}
          vocality={vocality}
          grooming_requirements={grooming_requirements}
          history={history}
          history_image={history_image}
          title={title}
          history_title={history_title}
        />
      </div>
      <div className="is-hidden-desktop">
        <AttributesAndHistory
          hideAttributes={true}
          energy_level={energy_level}
          playfulness={playfulness}
          friendliness_to_dogs={friendliness_to_dogs}
          friendliness_to_other_pets={friendliness_to_other_pets}
          friendliness_to_strangers={friendliness_to_strangers}
          exercise_requirements={exercise_requirements}
          affection_level={affection_level}
          watchfulness={watchfulness}
          vocality={vocality}
          grooming_requirements={grooming_requirements}
          history={history}
          history_image={history_image}
          title={title}
          history_title={history_title}
        />
      </div>
      {/* <section className="section attributes-section">
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
          </div>
        </div>
      </section> */}
      <div className="is-hidden-desktop">
        <MobileSlider
          nutrition={nutrition}
          nutrition_title={nutrition_title}
          grooming={grooming}
          grooming_title={grooming_title}
          health={health}
          health_title={health_title}
          training={training}
          training_title={training_title}
          exercise={exercise}
          exercise_title={exercise_title}
        />
      </div>
      <div className="is-hidden-touch">
        <section className="section care-section">
          <div className="container is-fullhd">
            <h3
              dangerouslySetInnerHTML={{
                __html: `${care_main_title}`,
              }}
            />
            <div className="columns care-columns">
              <div className="column">
                <div
                  onClick={() => setCare({ nutrition: true })}
                  className={`care-card ${
                    care && care.nutrition ? "active" : ""
                  }`}
                >
                  <div className="image-wrapper">
                    <img src={nutritionImg} />
                  </div>
                  <p>{`${nutrition_title || "Nutrition"}`}</p>
                </div>
              </div>
              <div className="column">
                <div
                  onClick={() => setCare({ grooming: true })}
                  className={`care-card ${
                    care && care.grooming ? "active" : ""
                  }`}
                >
                  <div className="image-wrapper">
                    <img src={groomingImg} />
                  </div>
                  <p>{`${grooming_title || "Grooming"}`}</p>
                </div>
              </div>
              <div className="column">
                <div
                  onClick={() => setCare({ health: true })}
                  className={`care-card ${care && care.health ? "active" : ""}`}
                >
                  <div className="image-wrapper">
                    <img src={healthImg} />
                  </div>
                  <p>{`${health_title || "Health"}`}</p>
                </div>
              </div>
              <div className="column">
                <div
                  onClick={() => setCare({ training: true })}
                  className={`care-card ${
                    care && care.training ? "active" : ""
                  }`}
                >
                  <div className="image-wrapper">
                    <img src={trainingImg} />
                  </div>
                  <p>{`${training_title || "Training"}`}</p>
                </div>
              </div>
              <div className="column">
                <div
                  onClick={() => setCare({ exercise: true })}
                  className={`care-card ${
                    care && care.exercise ? "active" : ""
                  }`}
                >
                  <div className="image-wrapper">
                    <img src={exerciseImg} />
                  </div>
                  <p>{`${exercise_title || "Exercise"}`}</p>
                </div>
              </div>
            </div>
            {care && care.nutrition ? nutritionContent : null}
            {care && care.grooming ? groomingContent : null}
            {care && care.health ? healthContent : null}
            {care && care.training ? trainingContent : null}
            {care && care.exercise ? exerciseContent : null}
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
        </section>
      </div>
      <section className="section breed-standards-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column">
              <div className="breed-standards-list">
                <h3>{breed_standard_main_title}</h3>
                {/* <select className="search-select" onChange={ (e) => setBreedStandard({ [e.target.value]: true })}>
                  <option value="general_appearance">{`${ general_appearance_title || 'General Appearance'}`}</option>
                  <option value="head">{`${ head_title || 'Head'}`}</option>
                  <option value="body">{`${ body_title || 'Body'}`}</option>
                  <option value="tail">{`${ tail_title || 'Tail'}`}</option>
                  <option value="forequarters">{`${ forequarters_title || 'Forequarters'}`}</option>
                  <option value="coat">{`${ coat_title || 'Coat'}`}</option>
                  <option value="hindquarters">{`${ hindquarters_title || 'Hindquarters'}`}</option>
                </select>
                <ul>
                  <li onClick={ () => setBreedStandard({general_appearance: true})}>{`${ general_appearance_title || 'General Appearance'}`}</li>
                  <li onClick={ () => setBreedStandard({head: true})}>{`${ head_title || 'Head'}`}</li>
                  <li onClick={ () => setBreedStandard({body: true})}>{`${ body_title || 'Body'}`}</li>
                  <li onClick={ () => setBreedStandard({tail: true})}>{`${ tail_title || 'Tail'}`}</li>
                  <li onClick={ () => setBreedStandard({forequarters: true})}>{`${ forequarters_title || 'Forequarters'}`}</li>
                  <li onClick={ () => setBreedStandard({coat: true})}>{`${ coat_title || 'Coat'}`}</li>
                  <li onClick={ () => setBreedStandard({hindquarters: true})}>{`${ hindquarters_title || 'Hindquarters'}`}</li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="breed-standard-accordion">
            <Accordion
              title={general_appearance_title}
              content={general_appearance}
            />
            <Accordion title={head_title} content={head} />
            <Accordion title={body_title} content={body} />
            <Accordion title={tail_title} content={tail} />
            <Accordion title={forequarters_title} content={forequarters} />
            <Accordion title={coat_title} content={coat} />
            <Accordion title={hindquarters_title} content={hindquarters} />
          </div>
          {/* <div className="columns breed-standards-content">
            <div className="column">
              {
                breedStandard && breedStandard.general_appearance ? 
                <div dangerouslySetInnerHTML={{
                  __html: general_appearance
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.head ? 
                <div dangerouslySetInnerHTML={{
                  __html: head
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.body ? 
                <div dangerouslySetInnerHTML={{
                  __html: body
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.tail ? 
                <div dangerouslySetInnerHTML={{
                  __html: tail
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.forequarters ? 
                <div dangerouslySetInnerHTML={{
                  __html: forequarters
                }} /> :
                null 
              }
              {
                breedStandard && breedStandard.coat ? 
                <div dangerouslySetInnerHTML={{
                  __html: coat
                }} /> :                
                null 
              }
              {
                breedStandard && breedStandard.hindquarters ? 
                <div dangerouslySetInnerHTML={{
                  __html: hindquarters
                }} /> :
                null 
              }
            </div>
          </div> */}
        </div>
      </section>
      <section className="section facts-section">
        <div className="container is-fullhd">
          <div className="">
            <div
              className=""
              // ref={el => {
              //   if (el) {
              //     if (el.getBoundingClientRect().width > 1300) {
              //       setMaxHeight(`${el.getBoundingClientRect().height - 67}px`)
              //     }
              //     // console.log("maxHeight", maxHeight)
              //     // console.log(`${el.getBoundingClientRect().height}px`)
              //   }
              // }}
            >
              <h3>{`${interesting_facts_title || "Interesting Facts"}`}</h3>
              <Slider {...factsSettings}>
                {facts.map((fact, index) => (
                  <div key={`facts-${index}`} className="fact-slide">
                    <div
                      className="fact-slide-content"
                      // style={{ minHeight: maxHeight }}
                    >
                      <h4 className={`${setBreedColor(index)}`}>{index + 1}</h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: fact.post_content,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <BreedsToExplore
        heading="Other Breeds to Explore"
        breeds_to_explore={breeds_to_explore}
      />
      <section className="references-section">
        <div className="container is-fullhd references-wrapper">
          <h3>References</h3>
          <div
            className="references"
            dangerouslySetInnerHTML={{
              __html: references,
            }}
          />
        </div>
      </section>
      <section className="cat-footer">
        <CatFooterImg />
      </section>
      <ContactUsSection />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BreedPage($id: String!) {
    wordpressBreedPosts(id: { eq: $id }) {
      title
      content
      yoast_canonical
      yoast_meta
      yoast_title
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
        breed_type
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
        general_appearance
        head
        body
        tail
        coat
        hindquarters
        puppy
        puppy_image
        forequarters
        forequarters_title
        grooming_title
        head_title
        history_title
        interesting_facts_title
        nutrition_title
        references
        tail_title
        training_title
        general_appearance_title
        exercise_title
        coat_title
        care_main_title
        breed_standard_main_title
        breed_author_name
        body_title
        health_title
        hindquarters_title
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
      breeds_to_explore {
        post_title
        slug
        breed_path
        featured_img {
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
    postHeroImg: file(relativePath: { eq: "defaultImg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Breed
