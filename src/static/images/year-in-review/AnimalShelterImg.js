import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AnimalShelterImg = () => {
  const data = useStaticQuery(graphql`
    query {
      animalShelterImg: file(relativePath: { eq: "year-in-review/article-img-21.jpg" }) {
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
      fluid={data.animalShelterImg.childImageSharp.fluid}
    />
  )
}

export default AnimalShelterImg
