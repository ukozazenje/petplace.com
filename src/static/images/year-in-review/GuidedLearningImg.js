import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GuidedLearningImg = () => {
  const data = useStaticQuery(graphql`
    query {
      guidedLearningImg: file(relativePath: { eq: "year-in-review/article-img-11.jpg" }) {
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
      fluid={data.guidedLearningImg.childImageSharp.fluid}
    />
  )
}

export default GuidedLearningImg
