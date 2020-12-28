import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DoggosDoingThingsImg = () => {
  const data = useStaticQuery(graphql`
    query {
      doggosDoingThingsImg: file(relativePath: { eq: "year-in-review/article-img-17.jpg" }) {
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
      fluid={data.doggosDoingThingsImg.childImageSharp.fluid}
    />
  )
}

export default DoggosDoingThingsImg
