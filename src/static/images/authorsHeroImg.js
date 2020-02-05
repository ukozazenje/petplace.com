import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AuthorsHeroImage = ({authorImg}) => {
  const data = useStaticQuery(graphql`
    query {
      AuthorHeroImage: file(relativePath: { eq: "authors_directory_img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="desktop-img">
        <Img fluid={data.AuthorHeroImage.childImageSharp.fluid} />
      </div>
      <div className="tablet-img">
        <Img sizes={{...data.AuthorHeroImage.childImageSharp.fluid, aspectRatio: 16 / 8}} alt="pet care" />
      </div>
      <div className="mobile-img">
        <Img sizes={{...data.AuthorHeroImage.childImageSharp.fluid, aspectRatio: 16 / 10}} alt="pet care" />
      </div>
    </>
  )
}

export default AuthorsHeroImage