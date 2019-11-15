import React from "react"
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

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

const MostPopularTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressTag(sort: {fields: count, order: DESC}, limit: 10) {
        edges {
          node {
            id
            count
            name
            slug
          }
        }
      }
    }
  `)
    
  const { edges: tags } = data.allWordpressTag 

  console.log(tags)

  return (
    tags.map(({ node: tag }) => (
      <Link key={tag.id} className="tag-links" to="/">{tag.name.replace(/&amp;/g, '&')}</Link>
    ))
  )
}

export default MostPopularTags
