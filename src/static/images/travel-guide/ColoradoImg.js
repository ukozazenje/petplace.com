import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ColoradoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      coloradoImage: file(relativePath: { eq: "travel-guide/colorado-BG.jpg" }) {
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
      fluid={data.coloradoImage.childImageSharp.fluid}
    />
  )
}

export default ColoradoImg
