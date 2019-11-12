import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TableCategoryHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      tableCategoryHeroImage: file(relativePath: { eq: "category-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return  <Img sizes={{ ...data.tableCategoryHeroImage.childImageSharp.fluid, aspectRatio: 16 / 7}} alt="hero"  /> 
}

export default TableCategoryHeroImage
