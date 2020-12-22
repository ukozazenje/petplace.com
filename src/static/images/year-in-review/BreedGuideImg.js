import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BreedGuideImg = () => {
  const data = useStaticQuery(graphql`
    query {
      breedGuideImg: file(relativePath: { eq: "year-in-review/article-img-18.jpg" }) {
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
      fluid={data.breedGuideImg.childImageSharp.fluid}
    />
  )
}

export default BreedGuideImg
