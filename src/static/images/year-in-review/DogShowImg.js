import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogShowImg = () => {
  const data = useStaticQuery(graphql`
    query {
      dogShowImg: file(relativePath: { eq: "year-in-review/article-img-4.jpg" }) {
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
      fluid={data.dogShowImg.childImageSharp.fluid}
    />
  )
}

export default DogShowImg
