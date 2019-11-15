import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const PopularPosts = (props) => {
  
  const {allWordpressPost, wordpressPage, placeholderImage} = useStaticQuery(
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
                    fluid(maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "no-img.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const featuredPost = wordpressPage.acf.featured_posts.map((el) => el.featured_post.post_name)
  const popularPosts = allWordpressPost.edges.filter(({node:post}) => featuredPost.includes(post.slug) )
  
  return (
    <section className="section similar-post-section">
      <div className="container is-fullhd">
        <h2>Popular Posts</h2>
        <div className="columns">
          { popularPosts.map(({node:post}) => (
            <div key={post.id} className="column">
              <Link to={post.path} className="similar-post-card" >
                { (post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp.fluid) ? 
                <Img className="similar-post-card-image" sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> : 
                <Img className="similar-post-card-image" sizes={{ ...placeholderImage.childImageSharp.fluid, aspectRatio: 1 / 1 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> }
                 
                <div className="similar-post-card-content">
                  <Link to={post.categories && post.categories[0].path}>{post.categories && post.categories[0].name}</Link>
                  <h3>{post.title.substring(0, 34).replace(/<[^>]+>/g, "").concat(" ...")}</h3>
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

