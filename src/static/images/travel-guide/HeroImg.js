import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CaliforniaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      californiaImage: file(relativePath: { eq: "travel-guide/hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 562, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="travel-guide-hero-img"
      fluid={data.californiaImage.childImageSharp.fluid}
    />
  )
}

export default CaliforniaImg
