import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhatYouFind = () => {
  const data = useStaticQuery(graphql`
    query {
      TheTeam: file(relativePath: { eq: "welcome-to-petplace/desktop/what_youll_find_at_petplace@2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img className="welcome-card-img" fluid={data.TheTeam.childImageSharp.fluid} />
    </>
  )
}

export default WhatYouFind