import React from 'react'
import Layout from '../components/layout'
import PopularPosts from '../components/categories/PopularPosts'
import ContactUsSection from "../components/homepage/contact-us"
import VideoBg from "../images/video-bg.png"
import VideoPost from "../images/video-img.png"
import { Link, graphql  } from 'gatsby'
import Img from 'gatsby-image'
import NoPostImg from '../static/images/noPostImg'
const VideosPage = ({data}) => {
  console.log(data.allWordpressPost.edges[0].node)
  return (
    <Layout>
      <section className="section featured-video-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-one-third">
              <h1>
              Are You a Pet Parent?
              </h1>
              <p>
              Check Out Our Videos for Vet-Approved Tips and the Latest in Pet News!
              </p>
              <Link to="/" className="video-btn">Find out More</Link>
            </div>
            <div className="column featured-video" 
              dangerouslySetInnerHTML={{
                    __html: data.allWordpressPost.edges[0].node.content.match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/)[0]
                  }} />
          </div>
        </div>
      </section>
      <section className="section category-posts videos-section">
        <div className="container is-fullhd">
          <h3 className="has-text-centered">Suggested Videos</h3>
          <div className="columns video-posts">
            <div className="column">
              <div to="/" className="category-post-card video-post-card">
                <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                  { data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid ?
                    <Img sizes={{ ...data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.alt_text) || 'post image'}  /> :
                    <NoPostImg />
                  }
                </Link>
                
                <div className="card-content">
                  <div className="card-title">
                    <h3>
                    <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                    {data.allWordpressPost.edges[0].node.title}
                    </Link>
                    </h3>
                  </div>
                  <div className="card-author">
                    <span>{data.allWordpressPost.edges[0].node.date || 'date'}   ·  </span><span >{data.allWordpressPost.edges[0].node.author ? data.allWordpressPost.edges[0].node.author.name || 'author' : null }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div to="/" className="category-post-card video-post-card">
                <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                  { data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid ?
                    <Img sizes={{ ...data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.alt_text) || 'post image'}  /> :
                    <NoPostImg />
                  }
                </Link>
                
                <div className="card-content">
                  <div className="card-title">
                    <h3>
                    <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                    {data.allWordpressPost.edges[0].node.title}
                    </Link>
                    </h3>
                  </div>
                  <div className="card-author">
                    <span>{data.allWordpressPost.edges[0].node.date || 'date'}   ·  </span><span >{data.allWordpressPost.edges[0].node.author ? data.allWordpressPost.edges[0].node.author.name || 'author' : null }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div to="/" className="category-post-card video-post-card">
                <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                  { data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid ?
                    <Img sizes={{ ...data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(data.allWordpressPost.edges[0].node.featured_media && data.allWordpressPost.edges[0].node.featured_media.alt_text) || 'post image'}  /> :
                    <NoPostImg /> 
                  }
                </Link>
                
                <div className="card-content">
                  <div className="card-title">
                    <h3>
                    <Link to={`${data.allWordpressPost.edges[0].node.path}`}>
                    {data.allWordpressPost.edges[0].node.title}
                    </Link>
                    </h3>
                  </div>
                  <div className="card-author">
                    <span>{data.allWordpressPost.edges[0].node.date || 'date'}   ·  </span><span >{data.allWordpressPost.edges[0].node.author ? data.allWordpressPost.edges[0].node.author.name || 'author' : null }</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularPosts />
      <ContactUsSection />
    </Layout>
  )
}

export default VideosPage

export const query = graphql`
  {
    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "videos"}}}}) {
      edges {
        node {
          id
          title
          content
          excerpt
          wordpress_id
          author {
            name
            slug
          }
          date(formatString: "MMMM DD, YYYY")
          slug
          path
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
          categories {
            id
            path
            name
          }
        }
      }
    }
  }
`