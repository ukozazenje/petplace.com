import React from "react"
import { Link } from "gatsby"
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
      allWordpressTag(
        filter: {
          slug: {
            in: [
              "choosing-a-breed"
              "ask-dr-debra-common-questions"
              "videos-fun"
              "dr-debras-posts"
              "pet-tips-for-dogs"
              "pet-tips-for-cats"
              "features"
              "prescription"
              "health-safety"
              "symptoms"
            ]
          }
        }
      ) {
        edges {
          node {
            path
            name
            slug
          }
        }
      }
    }
  `)

  const { edges: tags } = data.allWordpressTag

  // console.log(tags)
  // const tags = [
  //   "choosing-a-breed",
  //                   "ask-dr-debra-common-questions",
  //                   "videos-fun",
  //                   "dr-debras-posts",
  //                   "pet-tips-for-dogs",
  //                   "pet-tips-for-cats",
  //                   "features",
  //                   "prescription",
  //                   "health-safety",
  //                   "symptoms"
  // ]
  return (
    <div className="tags">
      {tags.map(({ node: tag }) => (
        <Link key={tag.id} className="tag-links" to={`/tags/${tag.slug}/`}>
          {tag.name.replace(/&amp;/g, "&")}
        </Link>
      ))}
    </div>
  )
}

export default MostPopularTags
