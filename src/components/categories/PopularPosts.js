import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import coverImg from '../image'
import {categoryColor} from '../functions'
const PopularPosts = (props) => {
  
  const {allWordpressPost, wordpressPage} = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: {eq: "home"}) {
          id
          acf {
            featured_posts {
              featured_post {
                post_name
              }
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              id
              title
              excerpt
              author {
                name
                slug
              }
              date(formatString: "MMMM DD, YYYY")
              slug
              path
              categories {
                id
                path
                name
              }
              featured_media {
                source_url
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const featuredPost = wordpressPage.acf.featured_posts.map((el) => el.featured_post.post_name)
  const popularPosts = allWordpressPost.edges.filter(({node:post}) => featuredPost.includes(post.slug) )
  return (
    <section className="section popular-post-section">
      <div className="container is-widescreen">
        <h2>Popular Posts</h2>
        <div className="columns">
          { popularPosts.map(({node:post}) => (
            <div key={post.id} className="column">
              <Link to={post.path} className="popular-post-card" >
                <Img className="popular-post-card-image" fluid={(post.featured_media && post.featured_media.localFile.childImageSharp.fluid) || coverImg} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> 
                <div className={`popular-post-card-content ${categoryColor(post.categories[0].name)}-transparent`}>
                  <h3>{post.title}</h3>
                  <div className="meta">{post.date} | {(post.author && post.author.name) || 'author'}</div>
                </div>
              </Link>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  )
}

export default PopularPosts

