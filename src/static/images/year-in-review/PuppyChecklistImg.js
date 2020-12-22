import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PuppyChecklistImg = () => {
  const data = useStaticQuery(graphql`
    query {
      puppyChecklistImg: file(relativePath: { eq: "year-in-review/article-img-10.jpg" }) {
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
      fluid={data.puppyChecklistImg.childImageSharp.fluid}
    />
  )
}

export default PuppyChecklistImg
