import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PawsomeFallReportHeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      PawsomeFallReportHeroMobileImg: file(
        relativePath: { eq: "pawsome-fall-report/hero_mobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PawsomeFallReportHeroDesktopImg: file(
        relativePath: { eq: "pawsome-fall-report/hero_desktop.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="is-hidden-widescreen">
        <Img
          fluid={data.PawsomeFallReportHeroMobileImg.childImageSharp.fluid}
        />
      </div>
      <div className="is-hidden-until-widescreen">
        <Img
          fluid={data.PawsomeFallReportHeroDesktopImg.childImageSharp.fluid}
        />
      </div>
    </>
  )
}

export default PawsomeFallReportHeroImg
