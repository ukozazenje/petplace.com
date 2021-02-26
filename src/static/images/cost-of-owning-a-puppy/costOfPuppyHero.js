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

const CostOfPuppyHero = () => {
  const data = useStaticQuery(graphql`
    query {
      homeHeroImageDesktop: file(
        relativePath: {
          eq: "cost-of-puppy/cost-of-puppy-hero.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeHeroImageMobile: file(
        relativePath: {
          eq: "cost-of-puppy/cost-of-puppy-hero-mob.jpg"
        }
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
      <section className="advertorial-hero-image cost-of-puppy">
        <div className="container is-fullhd hero-image-container">
          <h2 className="pet-partners-advertorial-heading">
            The Cost of Owning a Puppy: Months 1-6
          </h2>
        </div>
        <Img
          className="is-hidden-touch"
          fluid={data.homeHeroImageDesktop.childImageSharp.fluid}
          alt="The Cost of Owning a Puppy"
        />
        <Img
          className="is-hidden-desktop is-hidden-mobile"
          sizes={{
            ...data.homeHeroImageDesktop.childImageSharp.fluid,
            aspectRatio: 21 / 9,
          }}
          alt="The Cost of Owning a Puppy"
        />

        <Img
          className="is-hidden-tablet"
          fluid={data.homeHeroImageMobile.childImageSharp.fluid}
          alt="The Cost of Owning a Puppy"
        />
      </section>
    </>
  )
}

export default CostOfPuppyHero
