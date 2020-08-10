import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { categoryColor } from "../../functions"

const BreedRow = props => {
  const { allWordpressBreedPosts } = useStaticQuery(
    graphql`
      query {
        allWordpressBreedPosts(sort: { fields: date, order: DESC }, limit: 3) {
          edges {
            node {
              id
              path
              title
              slug
              date
              acf {
                breed_author_name
              }
              featured {
                source_url
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "no-img.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  const breedPosts = allWordpressBreedPosts.edges
  const mainPost = breedPosts[0].node
  const firstPost = breedPosts[1].node
  const secondPost = breedPosts[2].node
  console.log(mainPost)
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child main-box">
          <div className="main-box-mobile-img">
            <Link
              className={`category-link-btn ${categoryColor(
                mainPost.category_name || "pet-care"
              )} hide-desktop`}
              to={"/article/breed/"}
              dangerouslySetInnerHTML={{
                __html: "Breeds",
              }}
            />
            <Img
              sizes={{
                ...mainPost.featured.localFile.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt={mainPost.featured.alt_text || "post"}
            />
          </div>
          <div className="main-box-desktop-img">
            <Img
              sizes={{
                ...mainPost.featured.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
              alt={mainPost.featured.alt_text || "post"}
            />
          </div>
          <div
            className={`main-content ${categoryColor(
              mainPost.category_name || "pet-care"
            )}-transparent`}
          >
            <Link
              className={`category-link-btn ${categoryColor(
                mainPost.category_name || "pet-care"
              )}  hide-mobile`}
              to={"/article/breed/"}
              dangerouslySetInnerHTML={{
                __html: "Breeds",
              }}
            />
            <Link to={mainPost.path}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: mainPost.title,
                }}
              />
            </Link>
            <p className="date">
              {mainPost.date || "no date"} ·{" "}
              {mainPost.acf.breed_author_name || "PetPlace.com"}
            </p>
          </div>
        </div>
      </div>
      <div className="tile is-5 is-vertical is-parent">
        <div className="tile is-child thumbnail-box flex-start">
          <Link to={firstPost.path}>
            <Img
              fluid={firstPost.featured.localFile.childImageSharp.fluid}
              alt={firstPost.featured.alt_text || "post image"}
              className="thumbnail-img"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </Link>
          <div className="sub-content">
            <Link
              className={`category-link-btn ${categoryColor(
                firstPost.category_name || "pet-care"
              )}`}
              to={"/article/breed"}
              dangerouslySetInnerHTML={{
                __html: "Breeds",
              }}
            />
            <Link to={firstPost.path}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: firstPost.title,
                }}
              />
            </Link>
            <p className="date">
              {firstPost.date} · {firstPost.acf.breed_author_name}
            </p>
          </div>
        </div>
        <div className="tile is-child thumbnail-box flex-end">
          <Link to={secondPost.path}>
            <Img
              fluid={secondPost.featured.localFile.childImageSharp.fluid}
              alt={secondPost.featured.alt_text || "post image"}
              className="thumbnail-img"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </Link>
          <div className="sub-content align-slef-start">
            <Link
              className={`category-link-btn ${categoryColor(
                secondPost.category_name || "pet-care"
              )}`}
              to={"/article/breed/"}
              dangerouslySetInnerHTML={{
                __html: "Breeds",
              }}
            />
            <Link to={secondPost.path}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: secondPost.title,
                }}
              />
            </Link>
            <p className="date">
              {secondPost.date} · {secondPost.acf.breed_author_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreedRow
