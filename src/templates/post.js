import React, { Component }  from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import avatarImg from '../images/author.svg'
import facebook from '../images/facebookIcon.svg'
import pintrest from '../images/pinterestIcon.svg'
import twitter from "../images/twitterIcon.svg"
import emailIcon from '../images/emailIcon.svg'
import SimilarPosts from "../components/post/SimilarPosts"
import NoHeroPostImg from "../static/images/noPostHeroImg"
import NoMobileHeroPostImg from "../static/images/noPostHeroMobileImg"
import NextPost from "../components/post/NextPost"
import {categoryColor} from "../components/functions"
import Seo from '../components/seo'
import Sticky from 'react-stickynode'

class Post extends Component  {

  render(){
    const post = this.props.data.wordpressPost
    // const { edges: posts } = this.props.data.allWordpressPost
    const tagList = (tags) => (
      <div className="post-tags">
        <span><strong>Tags:</strong> </span>
        {post.tags.map(tag => (
          <button className="button tag-button" type="button">{tag.name}</button>
        ))}
      </div>
    )
    console.log(this.props.pageContext)
    const pageLink = this.props.location && this.props.location.href
    console.log(this.props.data)
    return (
      <Layout noFooter>
        <Seo title={post.title} />
        <div className="single-post">
        <section className="section post-hero-section">
          <div className="container is-fullhd"> 
            <div><Link to={(post.categories && post.categories[0] && post.categories[0].path) || '/'} className={`category-link ${categoryColor(post.categories && post.categories[0] && post.categories[0].name)}`}>{(post.categories && post.categories[0] && post.categories[0].name.replace(/&amp;/g, '&')) || 'category'}</Link></div>
            <h1>{post.title}</h1>
          </div>
        </section>
        <div className="post-hero-img">
          <div className="is-hidden-touch">
            {post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp ? 
            <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 22 / 7 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'} /> : 
            <NoHeroPostImg />}
          </div>
          <div className="is-hidden-desktop">
            {post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp ? 
            <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 16 / 8 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'} /> : 
            <NoMobileHeroPostImg />}
          </div>
        </div>
        <section className="main-content">
          <div className="container is-fullhd"> 
            <div className="columns">
              <div className="column is-one-quarter single-post-sidebar">
                <img className="author-img" src={avatarImg} alt="avatar" />
                <p className="author-name">{post.author ? post.author.name : 'author name'}</p>
                <p className="post-date">{post.date}</p>
                <div className="share-icons-horizontal">
                  <p>Share:</p>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={facebook}  alt="facebook" /></a>
                  <a href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="twitter" /></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`} target="_blank" rel="noopener noreferrer"> <img src={pintrest}  alt="pinterest" /></a>
                  <a href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={emailIcon}  alt="email" /></a>
                </div>
                <Sticky enabled={true} top={20} bottomBoundary='.single-post-sidebar'>
                    <div className="share-icons-vertical">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={facebook}  alt="facebook" /></a>
                      <a href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="twitter" /></a>
                      <a href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`} target="_blank" rel="noopener noreferrer"> <img src={pintrest}  alt="pinterest" /></a>
                      <a href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={emailIcon}  alt="email" /></a>
                    </div>
                </Sticky>
              </div>
              <div className="column single-post-content">
                <div 
                  dangerouslySetInnerHTML={{
                    __html: post.content
                  }}
                />
                <hr />
                <div className="share-icons-horizontal">
                  <p>Share:</p>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={facebook}  alt="facebook" /></a>
                  <a href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="twitter" /></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`} target="_blank" rel="noopener noreferrer"> <img src={pintrest}  alt="pinterest" /></a>
                  <a href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={emailIcon}  alt="email" /></a>
                </div>
                <div className="container is-fullhd">
                  <div className="columns">
                    <div className="column">
                      { post.tags ? tagList(post.tags) : null }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SimilarPosts />
        <NextPost post={this.props.pageContext.nextPost} location={{...this.props.location}} />
        </div>
      </Layout>
    )
  }
  
}

export default Post


export const pageQuery = graphql`
  query PostPage($id: String!){
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
  }
`