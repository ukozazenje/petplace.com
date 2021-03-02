import React, { useState, useEffect, useCallback, useRef } from "react"
import { Formik, Field, Form } from "formik"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import HomeHeroImg from "../../static/images/breedHomeImage"
import MobileHeroImg from "../../static/images/mobileBreedHomeHeroImage"
import TabletHeroImg from "../../static/images/tabletBreedHomeHeroImage"
import NoImg from "../../static/images/noPostImg"
import downArrow from "../../images/down-arrow.png"
import upArrow from "../../images/up-arrow.png"
import AutoSuggest from "react-autosuggest"
import Autocomplete from "../../components/Autocomplete"
import AutsideAlert from "../../components/autsideAlert"
import Pagination from "../../components/search/pagination"
import FilterCheckBox from "../../components/breed/filterCheckBox"
import useFilterBreeds from "../../components/breed/useFilterBreeds"
import BreedsToExplore from "../../components/breed/breedsToExplore"
import SEO from "../../components/seo"

const Breeds = ({ data }) => {
  const shareImage = data.BreedHomeHeroImage.childImageSharp.fluid.src
  const isInitialMount = useRef(true)
  const breeds = data.allWordpressBreedPosts.edges
  const limit = 6

  const [filterType, setFilterType] = useState(true)
  const [menu, setMenu] = useState(false)
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const breedsCopy = [
    ...breeds.map(({ node: breed }) => {
      return {
        title: breed.title,
        slug: breed.slug,
      }
    }),
  ]
  const [displayBreeds, setDisplayBreeds] = useState([...breeds])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentBreeds, setCurrentBreeds] = useState(
    displayBreeds.slice(0, limit)
  )
  const [types, setTypes] = useState([
    "Sporting",
    "Hound",
    "Terrier",
    "Non-Sporting",
    "Toy",
    "Herding",
    "Working",
    "N/A",
  ])

  const handleChange = value => {
    types.includes(value)
      ? setTypes(types.filter(type => type !== value))
      : setTypes([...types, value])
  }

  const handlePageChange = page => {
    console.log(page)
    const offset = (page - 1) * limit
    setCurrentBreeds(displayBreeds.slice(offset, offset + limit))
    setCurrentPage(page)
  }

  useFilterBreeds(
    isInitialMount,
    breeds,
    setDisplayBreeds,
    setCurrentPage,
    handlePageChange,
    types
  )

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      handlePageChange(1)
    }
  }, [displayBreeds])

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    })
  }, [currentPage])

  console.log(types)
  return (
    <Layout>
      <SEO
        title="Breed Guide - PetPlace"
        description="Find the perfect companion for your lifestyle, living space, and family dynamic."
        // image={shareImage}
      />
      <div className="flex-container search-breed-container">
        <section className="container is-fullhd search-hero-section-flex">
          <div className="container is-fullhd form-container">
            <div className="form-wrapper">
              <h1>
                Find Your
                <br />
                Perfect Dog Breed
              </h1>
              <p>
                Find the perfect companion for your lifestyle, living space, and
                family dynamic.
              </p>
              {/* <Autocomplete suggestions={[...breedsCopy]} /> */}
            </div>
          </div>
        </section>
        <div className="desktop-img">
          <HomeHeroImg />
        </div>
        <div className="tablet-img">
          <TabletHeroImg />
        </div>
        <div className="mobile-img">
          <MobileHeroImg />
        </div>
      </div>
      <section className="section category-posts breed-posts">
        <div className="container is-fullhd">
          <div className="columns categories-columns">
            <div className="column is-one-quarter-widescreen side-bar">
              <div
                className="filter-btn"
                onClick={() => setMenu(menu => !menu)}
              >
                <span>Filters</span>
              </div>
              <div
                className={`category-filters search-filters ${
                  menu ? "is-active" : ""
                }`}
              >
                <h3 onClick={() => setFilterType(filterType => !filterType)}>
                  Type{" "}
                  <span className="filter-type-icon">
                    <img src={filterType ? upArrow : downArrow} />
                  </span>
                </h3>
                <div
                  className={`filter-type ${filterType ? "is-active" : ""} `}
                >
                  <FilterCheckBox
                    checkBoxName="Sporting"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Hound"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Terrier"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Non-Sporting"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Toy"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Herding"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="Working"
                    handleChange={handleChange}
                    types={types}
                  />
                  <FilterCheckBox
                    checkBoxName="N/A"
                    handleChange={handleChange}
                    types={types}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns posts-list-container">
                {currentBreeds.map(({ node: breed }) => (
                  <div className="column is-one-third" key={breed.id}>
                    <div className="category-post-card">
                      <div className="card-img">
                        <Link to={`${breed.path}`}>
                          {breed.featured &&
                          breed.featured.localFile &&
                          breed.featured.localFile.childImageSharp &&
                          breed.featured.localFile.childImageSharp.fluid ? (
                            <Img
                              sizes={{
                                ...breed.featured.localFile.childImageSharp
                                  .fluid,
                                aspectRatio: 4 / 3,
                              }}
                              alt={breed.featured.alt_text || "post image"}
                            />
                          ) : (
                            <NoImg />
                          )}
                        </Link>
                      </div>
                      <div className="card-content">
                        <div className="card-title">
                          <h3>
                            <Link to={`${breed.path}`}>
                              {breed.title.replace(/&amp;/g, "&") || "title"}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <Pagination
                    limit={limit}
                    total={displayBreeds.length}
                    currentPage={currentPage}
                    onPageChange={page => handlePageChange(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreedsToExplore heading="Latest Articles" />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allWordpressBreedPosts {
      edges {
        node {
          id
          title
          content
          slug
          path
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
          }
        }
      }
    }
    BreedHomeHeroImage: file(relativePath: { eq: "search-breed.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Breeds
