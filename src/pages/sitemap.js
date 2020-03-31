import React from 'react'
import Layout from '../components/layout'
import {useStaticQuery, Link} from "gatsby"
import Img from "gatsby-image"
import PetCare from '../static/images/category-images/pet'
import ContactUsSection from "../components/homepage/contact-us"
const Sitemap = () => {
  // in case we want images for categories
  const data = useStaticQuery(graphql`
      query {
        petCareImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        petHealthImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        petBehaviorImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        breedsImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        petInsuranceImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        justForFunImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pagesImg: file(relativePath: { eq: "pet-care.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
  return (
    <Layout>
      <section className="hero-section">
        <PetCare />
        <div className={`hero-title purple-transparent`}>
          <div className="container is-fullhd category-title"> 
            <h1>Sitemap</h1>
          </div>
        </div>
      </section>
      <section className="section">
        {/* <div className="container is-full-hd sitemap-heading">
          <h3>Categories</h3>
        </div> */}
        <div className="container is-full-hd">
          <div className="columns">
            <div className="column">
              <div className="sitemap-list">
               {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/pet-care/">
                  <h3>Pet Care</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/pet-care/cat-care/">
                      <strong>Cat care</strong>
                    </Link>
                    <ul>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/cat-adoption/">
                          Cat Adoption
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/cat-exercises-play/">
                        Cat Exercises & Play
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/grooming-your-cat/">
                        Grooming Your Cat
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/kitten-care/">
                        Kitten Care
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/litter-box-training-cat-care/">
                        Litter Box Training
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/cat-care/senior-cat-care/">
                        Senior Cat Care
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/article/category/pet-care/dog-care/">
                      <strong>Dog care</strong>
                    </Link>
                    <ul>
                      <li>
                        <Link to="/article/category/pet-care/dog-care/dog-adoption/">
                        Dog Adoption
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/dog-care/dog-exercises-play/">
                        Dog Exercises & Play
                        </Link>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/dog-care/grooming-your-dog/">
                        Grooming Your Dog
                        </Link>
                      </li>
                      <li to="/article/category/pet-care/dog-care/puppy-care/">
                        <Link>
                        <strong>Puppy Care</strong>
                        </Link>
                        <ul>
                          <li>
                            <Link to="/article/category/pet-care/dog-care/puppy-care/puppy-diaries/">
                            Puppy Diaries
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/article/category/pet-care/dog-care/senior-dog-care/">
                        Senior Dog Care
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/article/category/pet-care/small-pet-care/">
                      <strong>Small Pet care</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-care/small-pet-care/birds/">
                          Bird Pet Care
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-care/small-pet-care/fish/">
                          Fish Pet Care
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-care/small-pet-care/reptile/">
                          Reptile Pet Care
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-care/small-pet-care/small-mammals/">
                          Small Mammals Pet Care
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/pet-health/">
                  <h3>Pet Health</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/pet-health/cat-health/">
                      <strong>Cat Health</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-health/cat-health/cat-diet-nutrition/">
                          Cat Diet & Nutrition
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/cat-health/cat-diseases-symptoms/">
                          Cat Diseases & Symptoms
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/cat-health/cat-injuries-safety/">
                          Cat Injuries & Safety
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/cat-health/cat-medications-vaccinations/">
                          Cat Medications & Vaccinations
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/pet-health/dog-health/">
                      <strong>Dog Health</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-health/dog-health/dog-dental-care/">
                          Dog Dental Care
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/dog-health/dog-diet-nutrition/">
                          Dog Diet & Nutrition
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/dog-health/dog-diseases-symptoms/">
                          Dog Diseases & Symptoms
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/dog-health/dog-injuries-safety/">
                          Dog Injuries & Safety
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/dog-health/dog-medications-vaccinations/">
                          Dog Medications & Vaccinations
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/pet-health/small-pet-health/">
                      <strong>Small Pet Health</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-health/small-pet-health/birds-small-pet-health/">
                          Bird Health
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/small-pet-health/fish-small-pet-health/">
                          Fish Health
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/small-pet-health/reptile-small-pet-health/">
                          Reptile Health
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-health/small-pet-health/small-mammals-small-pet-health/">
                          Small Mammal Health
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/pet-behavior-training/">
                  <h3>Pet Behavior & Training</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/pet-behavior-training/cat-behavior-training/">
                      <strong>Cat Behavior & Training</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-behavior-training/cat-behavior-training/bonding-with-your-cat/">
                          Bonding With Your Cat
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/cat-behavior-training/cat-behavior-problems/">
                          Cat Behavior Problems
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/cat-behavior-training/litter-box-training/">
                          Litter Box Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/cat-behavior-training/loss-mourning-a-cat/">
                          Loss & Mourning A Cat
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/cat-behavior-training/normal-cat-behavior/">
                          Normal Cat Behavior
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/pet-behavior-training/dog-behavior-training/">
                      <strong>Dog Behavior & Training</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-behavior-training/dog-behavior-training/bonding-with-your-dog/">
                          Bonding With Your Dog
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/dog-behavior-training/dog-behavior-problems/">
                          Dog Behavior Problems
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/dog-behavior-training/loss-mourning-a-dog/">
                          Loss & Mourning A Dog
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/dog-behavior-training/normal-dog-behavior/">
                          Normal Dog Behavior
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/dog-behavior-training/training-your-dog/">
                          Training Your Dog
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/">
                      <strong>Small Pet Behavior & Training</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/birds-small-pet-behavior-training/">
                          Bird Behavior & Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/fish-small-pet-behavior-training/">
                          Fish Behavior & Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/reptile-small-pet-behavior-training/">
                          Reptile Behavior & Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/pet-behavior-training/small-pet-behavior-training/small-mammals-small-pet-behavior-training/">
                          Small Mammals Behavior & Training
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="columns">
            <div className="column">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/breeds/">
                  <h3>Breeds</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/breeds/cat-breeds/">
                      <strong>Cat Breeds</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/breeds/cat-breeds/domestic-longhair/">
                          Domestic Longhair
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/cat-breeds/maine-coon/">
                          Maine Coon
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/cat-breeds/selecting-a-cat/">
                          Selecting a Cat Breed
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/breeds/dog-breeds/">
                      <strong>Dog Breeds</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/breeds/dog-breeds/best-breeds-for-kids/">
                          Best Breeds for Kids
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/dog-breeds/popular-dog-breeds/">
                          Popular Dog Breeds
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/dog-breeds/selecting-a-dog/">
                          Selecting a Dog Breed
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/dog-breeds/top-dog-breeds/">
                          Top Dog Breeds
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/breeds/small-pet-breeds/">
                      <strong>Small Pet Breeds</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/breeds/small-pet-breeds/birds-small-pet-breeds/">
                          Birds Pet Breeds
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/small-pet-breeds/fish-small-pet-breeds/">
                          Fish Breeds
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/small-pet-breeds/reptile-small-pet-breeds/">
                          Reptiles Breeds
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/breeds/small-pet-breeds/small-mammals-small-pet-breeds/">
                          Small Mammals Breeds
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/pet-insurance/">
                  <h3>Pet Insurance</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/pet-insurance/dog-pet-insurance-pet-insurance/">
                      Dog Insurance
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/pet-insurance/cat-pet-insurance/">
                      Cat Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link to="/article/category/just-for-fun/">
                  <h3>Just For Fun</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/article/category/just-for-fun/pet-peeves/">
                      Pet Peeves
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/videos/">
                      Pet News & Videos
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/fun-stuff/">
                      Fun Stuff
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/just-for-kids/">
                      Just For Kids
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/surveys-polls/">
                      Surveys & Polls
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/reader-stories/">
                      Reader Stories
                    </Link>
                  </li>
                  <li>
                    <Link to="/article/category/just-for-fun/reviews/">
                      <strong>Reviews</strong>
                      <ul>
                        <li>
                          <Link to="/article/category/just-for-fun/reviews/pet-book-reviews/">
                            Pet Book Reviews
                          </Link>
                        </li>
                        <li>
                          <Link to="/article/category/just-for-fun/reviews/pet-product-reviews/">
                            Pet Product Reviews
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="sitemap-list">
                {/* <Img sizes={{...data.petCareImg.childImageSharp.fluid, aspectRatio: 18 / 5}} /> */}
                <Link>
                  <h3>Pages</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/about-us/">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use/">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to="/newsletter-signup/">
                      News Letter Signup
                    </Link>
                  </li>
                  <li>
                    <Link to="/prnews/">
                      PR News
                    </Link>
                  </li>
                  <li>
                    <Link to="/authors/">
                      Authors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </Layout>
  )
}

export default Sitemap
