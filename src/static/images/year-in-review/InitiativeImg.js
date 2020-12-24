import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InitiativeImg = () => {
  const data = useStaticQuery(graphql`
    query {
      initiativeImg: file(relativePath: { eq: "year-in-review/article-img-19.jpg" }) {
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
      fluid={data.initiativeImg.childImageSharp.fluid}
    />
  )
}

export default InitiativeImg
