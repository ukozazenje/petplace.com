import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MeatballImg = () => {
  const data = useStaticQuery(graphql`
    query {
      meatballImg: file(relativePath: { eq: "year-in-review/article-img-13.jpg" }) {
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
      fluid={data.meatballImg.childImageSharp.fluid}
    />
  )
}

export default MeatballImg
