import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrusselsSproutImg = () => {
  const data = useStaticQuery(graphql`
    query {
      brusselsSproutImg: file(relativePath: { eq: "year-in-review/article-img-12.jpg" }) {
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
      fluid={data.brusselsSproutImg.childImageSharp.fluid}
    />
  )
}

export default BrusselsSproutImg
