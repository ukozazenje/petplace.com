import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NationalDogShowImg = () => {
  const data = useStaticQuery(graphql`
    query {
      nationalDogShowImg: file(relativePath: { eq: "year-in-review/article-img-23.jpg" }) {
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
      fluid={data.nationalDogShowImg.childImageSharp.fluid}
    />
  )
}

export default NationalDogShowImg