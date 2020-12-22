import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogDocImg = () => {
  const data = useStaticQuery(graphql`
    query {
      dogDocImg: file(relativePath: { eq: "year-in-review/article-img-5.jpg" }) {
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
      fluid={data.dogDocImg.childImageSharp.fluid}
    />
  )
}

export default DogDocImg
