import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AuthorsHeroImage = ({authorImg}) => {
  const data = useStaticQuery(graphql`
    query {
      AuthorHeroImage: file(relativePath: { eq: "authors-cover.png" }) {
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
      <div className="post-hero-img">
        <div className="is-hidden-touch">
          <Img fluid={data.AuthorHeroImage.childImageSharp.fluid} />
        </div>
        <div className="is-hidden-desktop">
          <Img sizes={{ ...data.AuthorHeroImage.childImageSharp.fluid, aspectRatio: 16 / 8 }} alt="author" />
        </div>
      </div>
      <section className="section authors-list-wrapper">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AuthorsHeroImage