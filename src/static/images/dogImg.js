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

const DogImg = () => {
  const data = useStaticQuery(graphql`
    query {
      homeHeroImage: file(relativePath: { eq: "dog.png" }) {
        childImageSharp {
          fluid(maxWidth: 299, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.homeHeroImage.childImageSharp.fluid}
      style={{ maxWidth: "299px" }}
    />
  )
}

export default DogImg
