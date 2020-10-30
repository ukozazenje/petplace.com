import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TheTeamImage = () => {
  const data = useStaticQuery(graphql`
    query {
      TheTeam: file(relativePath: { eq: "welcome-to-petplace/desktop/just_for_fun@2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
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

export default TheTeamImage