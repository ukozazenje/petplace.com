import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

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
              post_title
              wordpress_id
              featured_image {
                full {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 300) {
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

  const featuredPost = wordpressTtgPages.acf.featured_posts
  
  return (
    <section className="section similar-post-section">
      <div className="container is-fullhd">
        <h2>Popular Posts</h2>
        <div className="columns">
          { featuredPost.map((post) => (
            <div key={post.wordpress_id} className="column">
              <Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')} className="similar-post-card" >
                { (post.featured_image && post.featured_image.full.localFile.childImageSharp.fluid) ? 
                <Img className="similar-post-card-image" sizes={{ ...post.featured_image.full.localFile.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_image && post.featured_image.alt_text) || 'post image'}  /> : 
                <Img className="similar-post-card-image" sizes={{ ...props.data.placeholderImage.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_image && post.featured_image.alt_text) || 'post image'}  /> }
                 
                <div className="similar-post-card-content">
                  <Link to={post.category_link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>{post.category_name.replace(/&amp;/g, '&')}</Link>
                  <Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')} className="similar-post-card" ><h3>{post.post_title.substring(0, 34).replace(/<[^>]+>/g, "").concat(" ...")}</h3></Link>
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

