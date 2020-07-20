import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { setBreedColor } from "../functions"
import { navigate } from "gatsby"
import NoImg from "../../static/images/noSearchPostImg"
import { Link, graphql, useStaticQuery } from "gatsby"

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

const BreedsToExplore = props => {
  const { allWordpressBreedPosts } = useStaticQuery(
    graphql`
      {
        allWordpressBreedPosts(sort: { fields: date, order: DESC }, limit: 3) {
          edges {
            node {
              id
              path
              title
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
            }
          }
        }
      }
    `
  )
  const breedPosts = allWordpressBreedPosts.edges
  return (
    <section className="section breeds-to-explore-section">
      <div className="container is-fullhd">
        <h3>Latest Articles</h3>
        <Slider {...factsSettings}>
          {breedPosts.map(({ node: breed }, index) => (
            <div key={index} className={`breeds_to_explore-slide`}>
              <div
                className="breeds_to_explore-content"
                onClick={() => navigate(`/breed/${breed.slug}`)}
              >
                {breed &&
                breed.featured &&
                breed.featured.localFile &&
                breed.featured.localFile.childImageSharp &&
                breed.featured.localFile.childImageSharp.fluid ? (
                  <Img
                    sizes={{
                      ...breed.featured.localFile.childImageSharp.fluid,
                      aspectRatio: 1 / 1,
                    }}
                  />
                ) : (
                  <NoImg />
                )}
                <div
                  className={`breeds_to_explore-title ${setBreedColor(index)}`}
                  dangerouslySetInnerHTML={{
                    __html: breed.title,
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default BreedsToExplore
