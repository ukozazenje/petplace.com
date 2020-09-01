import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DrDebraHeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      DrDebraHeroImgMobile: file(
        relativePath: { eq: "askdebra-hero-mobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DrDebraHeroImgDesktop: file(relativePath: { eq: "askdebra-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="is-hidden-widescreen">
        <Img fluid={data.DrDebraHeroImgMobile.childImageSharp.fluid} />
      </div>
      <div className="is-hidden-until-widescreen">
        <Img fluid={data.DrDebraHeroImgDesktop.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default DrDebraHeroImg
