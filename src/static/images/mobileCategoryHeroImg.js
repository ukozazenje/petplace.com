import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileCategoryHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileCategoryHeroImage: file(relativePath: { eq: "mobile-category-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.mobileCategoryHeroImage.childImageSharp.fluid} />
}

export default MobileCategoryHeroImage
