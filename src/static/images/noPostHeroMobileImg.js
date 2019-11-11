import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NoPostHeroMobileImg = () => {
  const data = useStaticQuery(graphql`
    query {
      noPostHeroMobileImg: file(relativePath: { eq: "no-post-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img sizes={{...data.noPostHeroMobileImg.childImageSharp.fluid, aspectRatio: 16 / 12}} alt="" /> 
}

export default NoPostHeroMobileImg
