import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import coverImg from '../image'
import {categoryColor} from '../functions'
const PopularPosts = (props) => {
  
  const {wordpressTtgPages} = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(wordpress_id: {eq: 6}) {
          acf {
            featured_posts {
              category_link
              category_name
              author_name
              post_date
              link
              path
              post_title
              wordpress_id
              featured_image {
                full {
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
      }
    `
  )

  const featuredPosts = wordpressTtgPages.acf.featured_posts
  return (
    <section className="section popular-post-section">
      <div className="container is-fullhd">
        <h2>Popular Posts</h2>
        <div className="columns">
          { featuredPosts.map((post) => (
            <div key={post.wordpress_id} className="column">
              <Link to={post.path} className="popular-post-card" >
                <Img className="popular-post-card-image" fluid={(post.featured_image && post.featured_image && post.featured_image.full && post.featured_image.full.localFile.childImageSharp.fluid) || coverImg} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> 
                <div className={`popular-post-card-content ${categoryColor(post.category_name)}-transparent`}>
                  <h3 dangerouslySetInnerHTML={{
                    __html: post.post_title 
                  }} />
                  <div className="meta">{post && post.post_date} | {(post && post.author_name) || 'author'}</div>
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

