import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PetConImg = () => {
  const data = useStaticQuery(graphql`
    query {
      petConImg: file(relativePath: { eq: "year-in-review/article-img-1.jpg" }) {
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
      fluid={data.petConImg.childImageSharp.fluid}
    />
  )
}

export default PetConImg
