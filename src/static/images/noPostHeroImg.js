import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PostHeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      postHeroImg: file(relativePath: { eq: "defaultImg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.postHeroImg.childImageSharp.fluid} />
}

export default PostHeroImg
