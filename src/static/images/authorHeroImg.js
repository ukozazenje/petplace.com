import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AuthorHeroImage = ({authorImg}) => {
  const data = useStaticQuery(graphql`
    query {
      AuthorHeroImage: file(relativePath: { eq: "author-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="post-hero-img author-cover">
      <div className="is-hidden-touch">
        <Img fluid={data.AuthorHeroImage.childImageSharp.fluid} />
      </div>
      <div className="is-hidden-desktop">
        <Img sizes={{ ...data.AuthorHeroImage.childImageSharp.fluid, aspectRatio: 16 / 8 }} alt="author" />
      </div>
      <div className="container is-fullhd avatar-wrapper">
        <img className="author-avatar" src={authorImg} alt="author avatar" />
      </div>
    </div>
  )
}

export default AuthorHeroImage