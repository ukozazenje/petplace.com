import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PetsMakeADifferenceImg = () => {
  const data = useStaticQuery(graphql`
    query {
      petsMakeADifferenceImg: file(relativePath: { eq: "year-in-review/article-img-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 482, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.petsMakeADifferenceImg.childImageSharp.fluid}
    />
  )
}

export default PetsMakeADifferenceImg
