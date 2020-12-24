import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TravelGuideImg = () => {
  const data = useStaticQuery(graphql`
    query {
      travelGuideImg: file(relativePath: { eq: "year-in-review/article-img-16.jpg" }) {
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
      fluid={data.travelGuideImg.childImageSharp.fluid}
    />
  )
}

export default TravelGuideImg
