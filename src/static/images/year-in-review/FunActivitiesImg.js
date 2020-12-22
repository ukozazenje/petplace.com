import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FunActivitiesImg = () => {
  const data = useStaticQuery(graphql`
    query {
      funActivitiesImg: file(relativePath: { eq: "year-in-review/article-img-6.jpg" }) {
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
      fluid={data.funActivitiesImg.childImageSharp.fluid}
    />
  )
}

export default FunActivitiesImg
