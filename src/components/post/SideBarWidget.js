import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SideBarWidget = ({ acf }) => {
  const data = useStaticQuery(graphql`
    query {
      widgetImg: file(relativePath: { eq: "widget-large.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="side-bar-widget">
      <a
        href={
          acf && acf.sidebar_image_url
            ? acf.sidebar_image_url
            : "https://www.petplace.com/enroll/?p=PPSEP21"
        }
        target="_blank"
      >
        {acf && acf.sidebar_image ? (
          <Img fluid={acf.sidebar_image.localFile.childImageSharp.fluid} />
        ) : (
          <Img fluid={data.widgetImg.childImageSharp.fluid} />
        )}
      </a>
    </div>
  )
}

export default SideBarWidget
