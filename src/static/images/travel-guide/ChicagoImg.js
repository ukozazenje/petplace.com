import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChicagoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      californiaImage: file(relativePath: { eq: "travel-guide/chicago-BG.jpg" }) {
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
      fluid={data.californiaImage.childImageSharp.fluid}
    />
  )
}

export default ChicagoImg
