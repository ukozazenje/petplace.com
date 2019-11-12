import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HealthHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      categoryHeroImage: file(relativePath: { eq: "pet-health.jpg" }) {
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
          <Img fluid={data.categoryHeroImage.childImageSharp.fluid} />
        </div>
        <div className="tablet-img">
          <Img sizes={{...data.categoryHeroImage.childImageSharp.fluid, aspectRatio: 16 / 8}} alt="pet care" />
        </div>
        <div className="mobile-img">
          <Img sizes={{...data.categoryHeroImage.childImageSharp.fluid, aspectRatio: 16 / 10}} alt="pet care" />
        </div>
    </>
  )
}

export default HealthHeroImage
