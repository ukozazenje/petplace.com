import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackyardChickensImg = () => {
  const data = useStaticQuery(graphql`
    query {
      backyardChickensImg: file(relativePath: { eq: "year-in-review/article-img-14.jpg" }) {
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
      fluid={data.backyardChickensImg.childImageSharp.fluid}
    />
  )
}

export default BackyardChickensImg
