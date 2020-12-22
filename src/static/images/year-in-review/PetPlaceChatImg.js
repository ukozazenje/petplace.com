import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PetPlaceChatImg = () => {
  const data = useStaticQuery(graphql`
    query {
      petPlaceChatImg: file(relativePath: { eq: "year-in-review/article-img-2.jpg" }) {
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
      fluid={data.petPlaceChatImg.childImageSharp.fluid}
    />
  )
}

export default PetPlaceChatImg
