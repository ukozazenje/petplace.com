import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HappinessSection from "../components/homepage/pet-happiness"
import ContactUsSection from "../components/homepage/contact-us"
import CategoryListSection from "../components/homepage/categories-list"
import SearchHero from "../components/homepage/searchHero"
import Latest from '../components/homepage/latest-stories/latestStoriesHome'
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"

const IndexPage = () => {

  // const {allWordpressPost, allWordpressPage, allWordpressCategory} = useStaticQuery(
  //   graphql`
  //     query {
  //       allWordpressPost(filter: {categories: {elemMatch: {slug: {in: ["dog-care", "cat-care","small-pet-care"]}}}}) {
  //         edges {
  //           node {
  //             id
  //             title
  //             excerpt
  //             wordpress_id
  //             author {
  //               name
  //               slug
  //             }
  //             date(formatString: "MMMM DD, YYYY")
  //             slug
  //             path
  //             categories {
  //               id
  //               path
  //               name
  //               slug
  //             }
  //             featured_media {
  //               source_url
  //               alt_text
  //               localFile {
  //                 childImageSharp {
  //                   fixed(width: 200, height: 200) {
  //                     ...GatsbyImageSharpFixed
  //                   }
  //                   fluid(maxWidth: 768, quality:100) {
  //                     ...GatsbyImageSharpFluid
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //       allWordpressPage(filter: {slug: {eq: "home"}}) {
  //         edges {
  //           node {
  //             acf {
  //               category_rows {
  //                 category
  //               }
  //             }
  //           }
  //         }
  //       }
  //       allWordpressCategory {
  //         edges {
  //           node {
  //             id
  //             name
  //             path
  //             parent_element {
  //               path
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
    // console.log(allWordpressPost.edges)
    // const smallPets = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'small-pet-care')
    // const dogs = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'dog-care')
    // const cats = allWordpressPost.edges.filter((edge) => edge.node.categories[0].slug === 'cat-care')
    // const allCategories  = allWordpressCategory.edges
  return (
    <Layout noSearch={true}>
      <SEO title="Home" />
      <div className="flex-container">
        <div className="search-wrapper">
          <SearchHero />
        </div>
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
      <CategoryListSection />
      <Latest />
      <HappinessSection />
      <ContactUsSection />
    </Layout>
  )
}

export default IndexPage
