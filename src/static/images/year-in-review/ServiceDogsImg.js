import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ServiceDogsImg = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceDogsImg: file(relativePath: { eq: "year-in-review/article-img-8.jpg" }) {
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
      fluid={data.serviceDogsImg.childImageSharp.fluid}
    />
  )
}

export default ServiceDogsImg
