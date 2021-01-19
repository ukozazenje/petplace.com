import React from "react"
import Layout from "../../components/layout"
import ContactUsSection from "../../components/homepage/contact-us"
import Img from "gatsby-image"
import ArrowIcon from "../../images/travel-guide/arrow.svg"
import PuppyDiariesDesktopImg from "../../static/images/puppy-diaries/PuppyDiariesImg"
import PuppyDiariesPostTabletImg from "../../static/images/puppy-diaries/PuppyDiariesPostTabletImg"
import PuppyDiariesPostMobileImg from "../../static/images/puppy-diaries/PuppyDiariesPostMobileImg"
import { navigate } from "gatsby"

const PuppyDiaries = ({ data }) => {
  const diaries = data.allWordpressPuppyDiariesPosts.edges
  return (
    <Layout>
      <div className="puppy-diary-page">
        <section className="puppy-diaries-hero-section">
          <div className="container is-fullhd">
            {/* <div className="puppy-diaries-hero-intro">
              <h1>Puppy Diaries</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure.
              </p>
            </div> */}
          </div>
          <div className="mobile-image">
            <PuppyDiariesPostMobileImg />
          </div>
          <div className="tablet-image">
            <PuppyDiariesPostTabletImg />
          </div>
          <div className="desktop-image">
            <PuppyDiariesDesktopImg />
          </div>
        </section>
        <section className="section diary-section">
          <div className="container is-fullhd">
            {diaries.map(({ node: diary }) => (
              <div className="diary-wrapper">
                <div className="diary-content">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: diary.title,
                    }}
                  />
                  <div
                    className="diary-intro-text"
                    dangerouslySetInnerHTML={{
                      __html: diary.acf.intro_text,
                    }}
                  />
                  <button onClick={() => navigate(diary.path)}>
                    <img src={ArrowIcon} alt="read more" />
                    Read More
                  </button>
                </div>
                <div className="diary-img-wrapper">
                  {diary.featured &&
                  diary.featured.localFile &&
                  diary.featured.localFile.childImageSharp ? (
                    <Img
                      sizes={{
                        ...diary.featured.localFile.childImageSharp.fluid,
                        aspectRatio: 48 / 34,
                      }}
                      alt={diary.featured.alt_text || "diary"}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactUsSection />
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPuppyDiariesPosts {
      edges {
        node {
          date
          acf {
            intro_text
          }
          title
          slug
          path
          content
          featured {
            source_url
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 483, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PuppyDiaries
