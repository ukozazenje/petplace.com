import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const AdvertiseHero = () => {
  const data = useStaticQuery(graphql`
    query {
      homeHeroImageDesktop: file(
        relativePath: { eq: "advertorial-hero-desktop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeHeroImageMobile: file(
        relativePath: { eq: "advertorial-hero-mobile.png" }
      ) {
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
      <section className="advertorial-hero-image">
        <div className="container is-fullhd hero-image-container">
          <h1>An Emergency Vet Bill Left Me with Sticker Shock</h1>
        </div>
        <Img
          className="is-hidden-touch"
          fluid={data.homeHeroImageDesktop.childImageSharp.fluid}
          alt="advertise with us"
        />
        <Img
          className="is-hidden-desktop is-hidden-mobile"
          sizes={{
            ...data.homeHeroImageDesktop.childImageSharp.fluid,
            aspectRatio: 21 / 9,
          }}
          alt="advertise with us"
        />

        <Img
          className="is-hidden-tablet"
          fluid={data.homeHeroImageMobile.childImageSharp.fluid}
          alt="advertise with us"
        />
      </section>
    </>
  )
}

export default AdvertiseHero
