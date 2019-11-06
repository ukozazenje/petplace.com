import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import Image from "../components/image"
import SEO from "../components/seo"
import dogImg from "../images/dog.png"
import arrowImg from "../images/arrow.png"
import petCareIcon from "../images/pet-care.png"
import petHealthIcon from "../images/pet-health.png"
import petInsuranceIcon from "../images/pet-insurance.png"
import petTrainingIcon from "../images/pet-training.png"
import breedLibraryIcon from "../images/breed-library.png"
import justForFun from "../images/just-for-fun.png"
import categoryImg from "../images/BG.png"
import LatestStories from "../components/homepage/latest-stories"
import HappinessSection from "../components/homepage/pet-happiness"
import ContactUsSection from "../components/homepage/contact-us"
import CategoryListSection from "../components/homepage/categories-list"
import happinessImg from "../images/happiness.png"
import worldImg from "../images/world.png"
import articles from "../images/articles.png"
import organized from "../images/organized.png"
import expert from "../images/expert.png"
import searchHero from "../components/homepage/searchHero"
import SearchHero from "../components/homepage/searchHero"
const IndexPage = () => {

  const {allWordpressPost, allWordpressPage, allWordpressCategory} = useStaticQuery(
    graphql`
      query {
        allWordpressPost(filter: {categories: {elemMatch: {slug: {in: ["dog-care", "cat-care","small-pet-care"]}}}}) {
          edges {
            node {
              id
              title
              excerpt
              wordpress_id
              author {
                name
                slug
              }
              date(formatString: "MMMM DD, YYYY")
              slug
              path
              categories {
                id
                path
                name
                slug
              }
              featured_media {
                source_url
                alt_text
                localFile {
                  childImageSharp {
                    fixed(width: 200, height: 200) {
                      ...GatsbyImageSharpFixed
                    }
                    fluid(maxWidth: 768, quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        allWordpressPage(filter: {slug: {eq: "home"}}) {
          edges {
            node {
              acf {
                category_rows {
                  category
                }
              }
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
              id
              name
              path
              parent_element {
                path
                slug
              }
            }
          }
        }
      }
    `
  )
    console.log(allWordpressPost.edges)
    const smallPets = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'small-pet-care')
    const dogs = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'dog-care')
    const cats = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'cat-care') 
    const allCategories  = allWordpressCategory.edges
  return (
    <Layout>
      <SEO title="Home" />
      <SearchHero />
      <LatestStories dogs={dogs} cats={cats} smallPets={smallPets} categories={allCategories}/>
      <CategoryListSection />
      <HappinessSection />
      <ContactUsSection />
    </Layout>
  )
}

export default IndexPage