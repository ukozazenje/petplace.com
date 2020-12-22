import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CovidGuideImg = () => {
  const data = useStaticQuery(graphql`
    query {
      covidGuideImg: file(relativePath: { eq: "year-in-review/article-img-9.jpg" }) {
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
      fluid={data.covidGuideImg.childImageSharp.fluid}
    />
  )
}

export default CovidGuideImg
