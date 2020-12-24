import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkAfterLockdownImg = () => {
  const data = useStaticQuery(graphql`
    query {
      workAfterLockdownImg: file(relativePath: { eq: "year-in-review/article-img-15.jpg" }) {
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
      fluid={data.workAfterLockdownImg.childImageSharp.fluid}
    />
  )
}

export default WorkAfterLockdownImg
