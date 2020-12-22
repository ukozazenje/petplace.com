import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CatsDogsImg = () => {
  const data = useStaticQuery(graphql`
    query {
      catsDogsImg: file(relativePath: { eq: "year-in-review/article-img-22.jpg" }) {
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
      fluid={data.catsDogsImg.childImageSharp.fluid}
    />
  )
}

export default CatsDogsImg