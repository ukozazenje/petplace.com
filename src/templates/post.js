import React, { Component }  from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import avatarImg from '../images/avatar.png'
import bannerImg from '../images/baner-sidebar.png'
import facebookIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import pintrestIcon from '../images/pintrest.png'
import emailIcon from '../images/email.png'
import SimilarPosts from "../components/post/SimilarPosts"
import NoHeroPostImg from "../static/images/noPostHeroImg"
import NextPost from "../components/post/NextPost"


class Post extends Component  {

  render(){
    const post = this.props.data.wordpressPost
    const { edges: posts } = this.props.data.allWordpressPost
    const tagList = (tags) => (
      <div className="post-tags">
        <span><strong>Tags:</strong> </span>
        {post.tags.map(tag => (
          <button className="button tag-button" type="button">{tag.name}</button>
        ))}
      </div>
    )
    return (
      <Layout noFooter>
        <div className="single-post">
        <section className="section post-hero-section">
          <div className="container is-widescreen"> 
            <div><Link to="/" className="category-link">{(post.categories && post.categories[0] && post.categories[0].name) || 'category'}</Link></div>
            <h1>{post.title}</h1>
          </div>
        </section>
          {post.featured_media && post.featured_media.localFile.childImageSharp ? 
          <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 22 / 7 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'} /> : 
          <NoHeroPostImg 
          />}
        <section className="section">
          <div className="container is-widescreen"> 
            <div className="columns">
              <div className="column is-one-quarter single-post-sidebar">
                <img className="author-img" src={avatarImg} alt="avatar" />
                <p className="author-name">{post.author ? post.author.name : 'author name'}</p>
                <p className="post-date">{post.date}</p>
                <div className="social-icons">
                  <img src={facebookIcon}  alt="facebook" />
                  <img src={twitterIcon}  alt="twitter" />
                  <img src={pintrestIcon}  alt="pinterest" />
                  <img src={emailIcon}  alt="email" />
                </div>
                <img src={bannerImg} alt="banner" />
              </div>
              <div className="column">
                <div className="single-post-content" 
                  dangerouslySetInnerHTML={{
                    __html: post.content
                  }}
                />
                <hr />
                <div className="columns">
                  <div className="column">
                    <div className="share-icons">
                      <span><strong>Share:</strong></span> 
                      <img src={facebookIcon}  alt="facebook" />
                      <img src={twitterIcon}  alt="twitter" />
                      <img src={pintrestIcon}  alt="pinterest" />
                      <img src={emailIcon}  alt="email" />
                    </div>
                  </div>
                  <div className="column">
                    { post.tags ? tagList(post.tags) : null }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SimilarPosts />
        <NextPost posts={posts} />
        </div>
      </Layout>
    )
  }
  
}

export default Post


export const pageQuery = graphql`
  query PostPage($id: String!, $nextPostId: String!){
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      wordpress_id
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
            fluid(maxWidth: 1920, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allWordpressPost(filter: {id: {eq: $nextPostId}}) {
      edges {
        node {
          id
          title
          excerpt
          wordpress_id
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
                fixed(width: 164, height: 164) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    
  }
`