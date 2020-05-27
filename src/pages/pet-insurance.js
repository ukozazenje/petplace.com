import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUsSection from "../components/homepage/contact-us"
import ImageCard from "../components/pet-insurance/imageCard"

import twoDogs from "../images/pet-insurance/Mobile/01_mob.png"
import dogs from "../images/pet-insurance/Mobile/02_mob.png"
import dogBlanket from "../images/pet-insurance/Mobile/03_mob.png"
import dogBlanketDesktop from "../images/pet-insurance/Desktop/age-desktop.png"
import dogsDesktop from "../images/pet-insurance/Desktop/breed-desktop.png"
import twoDogsDesktop from "../images/pet-insurance/Desktop/pre-exisiting-conditions-desktop.png"
import moneyDog from "../images/pet-insurance/money-dog.png"
import eyeglassDog from "../images/pet-insurance/eyeglass-dog.png"
import blanketDog from "../images/pet-insurance/blanket-dog.png"
import plateDog from "../images/pet-insurance/Mobile/04_ellipse_mob.png"
import FactsAndTips from "../components/pet-insurance/factsAndTips"

const PetInsurance = () => {
  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState(0)
  const { wordpressTtgPages, wordpressPage } = useStaticQuery(
    graphql`
      query {
          wordpressTtgPages(title: {eq: "Pet insurance"}) {
            id
            acf {
              what_is_the_average_cost_of_pet_insurance_per_month
              things_to_consider_when_selecting_a_deductible
              preparation_for_the_unexpected
              saves_money_in_the_long_run
              pet_insurance_pre_existing_conditions
              pet_insurance_breed
              pet_insurance_age
              fact_two
              fact_three
              fact_one
              fact_four
              enables_you_to_select_your_vet
              advantages_to_getting_pet_insurance
              additional_amenities
            }
          }
         wordpressPage(title: {eq: "Pet insurance"}) {
            id
            title
            yoast_meta {
              yoast_wpseo_canonical
              yoast_wpseo_metadesc
              yoast_wpseo_title
            }
          }
        }
    `
  );
  const data = wordpressTtgPages.acf;
  const page = wordpressPage

  const accordions = [
    {
      'title': 'Preparation for the Unexpected:',
      'content': data.preparation_for_the_unexpected
    },
    {
      'title': 'Additional Amenities:',
      'content': data.additional_amenities
    },
    {
      'title': 'Saves Money in the Long Run:',
      'content': data.saves_money_in_the_long_run
    },
    {
      'title': 'Enables You to Select Your Vet:',
      'content': data.enables_you_to_select_your_vet
    },
  ]
  return (
    <Layout noSearch={true} >
      <SEO title={page.yoast_meta.yoast_wpseo_title} description={page.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}/>
      <div className="pet-insurance">
        <main>
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container is-fullhd">
                <h1 className="title is-bold">Pet Insurance</h1>
              </div>
            </div>
          </section>
          <section className="advantages">
            <div className="container is-full-hd">
                <h2>Advantages to Getting <span>Pet Insurance</span></h2>
                <div dangerouslySetInnerHTML={{
                  __html: data.advantages_to_getting_pet_insurance
                }} />
            </div>
            <div className="four-keys">
              <div className="container is-fullhd">
                <div className="is-hidden-tablet">
                  <h3>Here are 4 key advantages of getting pet insurance for every cost-conscious pet parent:</h3>
                  <div className="columns">
                    {
                      accordions.map((accordion,key) => (
                        <div className="column" key={key}>
                          <a key={key} className="card-title" onClick={(e)=>{
                            setId(parseInt(e.target.id))
                            setToggle(!toggle)
                          }}>
                            <p id={key} className={`line-block ${ key === id && 'active-line'}`}>
                              <span></span>{accordion.title}
                            </p>
                          </a>
                          { key === id &&
                          <div className="accordion-content" dangerouslySetInnerHTML={{
                            __html: accordion.content
                          }} />
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="is-hidden-mobile container">
                  <h3>Here are 4 key advantages of getting pet insurance for every cost-conscious pet parent:</h3>
                  <div className="columns">
                    <div className="column is-one-third">
                      {
                        accordions.map((accordion, key)=> (
                          <a key={key} className="card-title" onClick={(e)=>{
                            setId(parseInt(e.target.id))
                            setToggle(!toggle)
                          }}>
                            <p id={key} className={`line-block ${ key === id && 'active-line'}`}>
                              <span></span>{accordion.title}
                            </p>
                          </a>
                        ))}
                    </div>
                    <div className="column">
                      <div className="accordion-content" dangerouslySetInnerHTML={{
                        __html: accordions[id].content
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="average-cost container is-fullhd">
            <div className="columns">
              <div className="column">
                <h2>What Is the Average Cost of <span>Pet Insurance Per Month?</span></h2>
                <div dangerouslySetInnerHTML={{
                  __html: data.what_is_the_average_cost_of_pet_insurance_per_month
                }} />
                <h3>Here are 3 factors that may increase pet insurance costs:</h3>
                <ImageCard
                  imageMain={ dogBlanketDesktop }
                  image={ dogBlanket }
                  title="Age"
                  data={ data.pet_insurance_age }
                />
                <ImageCard
                  imageMain={ dogsDesktop }
                  image={ dogs }
                  title="Breed"
                  data={ data.pet_insurance_breed }
                  position="right"
                />
                <ImageCard
                  imageMain={ twoDogsDesktop }
                  image={ twoDogs }
                  title="Pre-existing conditions"
                  data={ data.pet_insurance_pre_existing_conditions }
                />
              </div>
            </div>
          </section>
          <section className="things">
            <div className="columns">
            <div className="column container">
              <h2>Things to Consider When <span>Selecting a Deductible</span></h2>
              <div className="unlike-health" dangerouslySetInnerHTML={{
                __html: data.things_to_consider_when_selecting_a_deductible
              }} />
              <p className="p-things">
                Here are facts and tips on selecting a deductible, which can help you determine what is best for your wallet and the health of your cat or dog:
              </p>
                <div className="columns">
                  <div className="column">
                    <div className="columns">
                      <FactsAndTips
                        img={ eyeglassDog }
                        data={ data.fact_one }/>
                      <FactsAndTips
                        img={ moneyDog }
                        data={ data.fact_two }/>
                    </div>
                    <div className="columns">
                      <FactsAndTips
                        img={ blanketDog }
                        data={ data.fact_three }/>
                      <FactsAndTips
                        img={ plateDog }
                        data={ data.fact_four }/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ContactUsSection/>
    </Layout>
  )
}

export default PetInsurance;