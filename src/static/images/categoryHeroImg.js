import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CategoryHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      categoryHeroImage: file(relativePath: { eq: "category-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.categoryHeroImage.childImageSharp.fluid} />
}

export default CategoryHeroImage
