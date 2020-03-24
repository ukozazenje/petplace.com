import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const PopularPosts = (props) => {

  const {wordpressTtgPages, placeholderImage} = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(wordpress_id: {eq: 6}) {
          acf {
            featured_posts {
              category_link
              category_path
              category_name
              author_name
              post_date
              path
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
        placeholderImage: file(relativePath: { eq: "no-next-post.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
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
              <Link to={post.path} className="similar-post-card" >
                { (post.featured_image && post.featured_image.full && post.featured_image.full.localFile && post.featured_image.full.localFile.childImageSharp.fluid) ?
                <Img className="similar-post-card-image" sizes={{ ...post.featured_image.full.localFile.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_image && post.featured_image.alt_text) || 'post image'}  /> :
                <Img className="similar-post-card-image" sizes={{ ...placeholderImage.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_image && post.featured_image.alt_text) || 'post image'}  /> }
              </Link>

                <div className="similar-post-card-content">
                  <Link to={post.category_path}>{post.category_name.replace(/&amp;/g, '&')}</Link>
                  <Link to={post.path} className="similar-post-card" ><h3>{post.post_title.substring(0, 34).replace(/<[^>]+>/g, "").concat(" ...")}</h3></Link>
                </div>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  )
}

export default PopularPosts

