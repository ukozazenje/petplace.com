import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GiftGuideImg = () => {
  const data = useStaticQuery(graphql`
    query {
      giftGuideImg: file(relativePath: { eq: "year-in-review/article-img-24.jpg" }) {
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
      fluid={data.giftGuideImg.childImageSharp.fluid}
    />
  )
}

export default GiftGuideImg