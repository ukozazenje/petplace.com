import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyleReportImg = () => {
  const data = useStaticQuery(graphql`
    query {
      styleReportImg: file(relativePath: { eq: "year-in-review/article-img-20.jpg" }) {
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
      fluid={data.styleReportImg.childImageSharp.fluid}
    />
  )
}

export default StyleReportImg
