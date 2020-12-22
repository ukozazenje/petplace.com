import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RoadTrippingImg = () => {
  const data = useStaticQuery(graphql`
    query {
      roadTrippingImg: file(relativePath: { eq: "year-in-review/article-img-7.jpg" }) {
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
      fluid={data.roadTrippingImg.childImageSharp.fluid}
    />
  )
}

export default RoadTrippingImg
