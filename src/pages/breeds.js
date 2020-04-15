import React, { useState, useEffect } from 'react'
import {Formik, Field, Form} from 'formik'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import HomeHeroImg from "../static/images/breedHomeImage"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"
import NoImg from '../static/images/noPostImg'
import downArrow from '../images/down-arrow.png'
import upArrow from '../images/up-arrow.png'
import AutoSuggest from 'react-autosuggest';
import Autocomplete from '../components/Autocomplete'
import AutsideAlert from '../components/autsideAlert'
import Pagination from '../components/search/pagination'

// const getSuggestionValue = suggestion => suggestion.name;
 
// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion.name}
//   </div>
// );

const Breeds = ({ data }) => {
  const breeds = data.allWordpressBreedPosts.edges
  // const [totalPages, setTotalPages] = useState(0)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [currentPosts, setCurrentPosts] = useState([])
  const limit = 2


  // useEffect(() => {
  //   setCurrentPosts(data.allWordpressBreedPosts.edges.slice(0, limit))
  //   setCurrentPage(1)
  // }, )

  // const handlePageChange = (page) => {
  
  //   const offset = (page - 1) * limit;
  //   const currentBreeds= breeds.slice(offset, offset + limit);
  //   window.scrollTo({
  //     top: 100,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  //   setCurrentPage(page)
  //   setCurrentPosts(currentBreeds)
  //   // this.setState({
  //   //   currentPage: page,
  //   //   currentPosts,
  //   // });
  // };

  const [filterType, setFilterType] = useState(true)
  const [menu, setMenu] = useState(false)
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const breedsCopy = [...breeds.map(({node:breed}) =>   {
    return  {
      title: breed.title,
      slug: breed.slug
    }
  })];
  console.log(breedsCopy)
  // console.log(lowerCasedCompanies)
  // const getSuggestions = (value ) => {
  //   return lowerCasedCompanies.filter(language =>
  //     language.startsWith(value.trim().toLowerCase())
  //   );
  // }
  return (
    <Layout>
      <div className="flex-container search-breed-container">
        <section className="container is-fullhd search-hero-section-flex">
          <div className="container is-fullhd form-container">
            

              <div className="form-wrapper">
                <h1>Find Your<br />
                Perfect Dog Breed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                {/* <Formik
                  initialValues={{title: ""}}
                  // onSubmit={(values, actions) => {
                  //   this.search(values.title)
                  // }}
                >
                  {(props) => (
                    <Form>
                      <Field type="text" name="title" placeholder="Search...." className="search-input" />
                      <button type="submit" className="search-button" >Search</button>
                      {props.errors.title && props.touched.title ? <div className="form-error ">{props.errors.title}</div> : null}
                    </Form>
                  )}
                </Formik> */}
                {/* <AutoSuggest
                    suggestions={suggestions}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionsFetchRequested={({ value }) => {
                      setValue(value);
                      console.log(value)
                      setSuggestions(getSuggestions(value));
                    }}
                    onSuggestionSelected= {console.log('zeko')}
                    getSuggestionValue={suggestion => suggestion}
                    renderSuggestion={suggestion => <span onClick={ () => navigate(`/breed/${suggestion}`)} >{suggestion}</span>}
                    inputProps={{
                      placeholder: "Type 'c'",
                      value: value,
                      className: "search-input",
                      onChange: (e) => setValue(e.target.value)
                    }}
                    highlightFirstSuggestion={true}
                  /> */}
                  <Autocomplete
                    suggestions={[...breedsCopy]}
                  />
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
            <div className="filter-btn" onClick={() => setMenu((menu) => !menu)}>
              <span>Filters</span>
            </div>
            <div className={`category-filters search-filters ${menu ? 'is-active' : ''}`}>
              <h3 onClick={ () => setFilterType(filterType => !filterType) }>Type <span className="filter-type-icon"><img src={ filterType ? upArrow : downArrow } /></span></h3>
              <div className={`filter-type ${ filterType ? "is-active" : ""} `}>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Sporting" />
                  <span>Sporting</span>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Hound" />
                  <span>Hound</span>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Terrier" />
                  <span>Terrier</span>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Toy" />
                  <span>Toy</span>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Non-Sporting" />
                  <span>Non-Sporting</span>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" checked={true} name="Herding" />
                  <span>Herding</span>
                </div>
              </div>
            </div>
            </div>
              <div className="column">
                  <div className="columns posts-list-container">
                    {
                      breeds.map(({node:breed}) => (
                        <div
                          className="column is-one-third"
                          key={breed.id}
                        >
                          <div className="category-post-card">
                            <div className="card-img">
                              <Link to={`/breed/${breed.slug}`}>
                                {
                                  breed.featured && breed.featured.localFile && breed.featured.localFile.childImageSharp && breed.featured.localFile.childImageSharp.fluid ?
                                  <Img sizes={{ ...breed.featured.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={'post image'}  /> :
                                  <NoImg />
                                }
                              </Link>
                            </div>
                            <div className="card-content">
                              <div className="card-title">
                                <h3>
                                  <Link to={`${breed.slug}`}>
                                    {breed.title.replace(/&amp;/g, '&') || 'title'}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                    {/* <div className="pagination">
                    <Pagination limit={limit} total={total} currentPage={currentPage} onPageChange={this.handlePageChange} />
                  </div> */}
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* <Pagination limit={limit} total={breeds.length} currentPage={currentPage} onPageChange={handlePageChange} /> */}
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
}
`

export default Breeds
