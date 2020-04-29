import React, { Component }  from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import avatarImg from '../images/author.svg'
import facebook from '../images/facebookIcon.svg'
import pintrest from '../images/pinterestIcon.svg'
import twitter from "../images/twitterIcon.svg"
import emailIcon from '../images/emailIcon.svg'
import SimilarPosts from "../components/post/SimilarPosts"
import NoHeroPostImg from "../static/images/noPostHeroImg"
import NoMobileHeroPostImg from "../static/images/noPostHeroMobileImg"
import NextPost from "../components/post/NextPost"
import Seo from '../components/seo'
import Sticky from 'react-stickynode'
import Breadcrumbs from '../components/Breadcrumbs'
import AdSet from '../components/AdSet'
import AdMobile from '../components/AdMobile'
import logo from '../images/PPlogo.jpg'
import Helmet from "react-helmet"
import {Link} from 'gatsby'
import { filterAuthorsLink, filterFaqPosts } from '../components/functions'
import {
  isMobile, isMobileOnly
} from "react-device-detect";
import LikeArticleWidget from '../components/LikeArticleWidget'
import axios from 'axios'
import CounterImg from '../images/footer-counter.svg'
class Post extends Component  {
  
  state = {
    likes: 0,
    likedPosts: [],
    liked: false
  }

  componentDidMount() {
    // find iframe and wrap it in div
    const iFrames = [...document.getElementsByTagName('iframe')]
    const wrap = function (toWrap, wrapper) {
      wrapper = wrapper || document.createElement('div')
      wrapper.classList.add('video-wrapper')
      toWrap.parentNode.appendChild(wrapper)
      return wrapper.appendChild(toWrap)
    }
    iFrames.length && iFrames.map(iFrame => !iFrame.src.includes('instagram.com') && wrap(iFrame))
    if (localStorage.getItem("likedPosts") === null) {
      localStorage.setItem('likedPosts', '[]')
    } else {
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts"))
      const liked = likedPosts.filter( post => post ===  this.props.data.wordpressPost.wordpress_id) > 0 ? true : false      
      this.setState({ 
        likedPosts: likedPosts,
        liked: liked
      })
    }
    axios.get(`${process.env.GATSBY_GET_LIKED_POSTS_API}=${this.props.data.wordpressPost.wordpress_id}`)
    .then(res => 
      this.setState({
        likes: res.data.likes
      })
      )
    .catch(err => console.log(err))
  }

  handleSubmit = (setSuccessMsg, url, wordpress_id, helpful, feedback) => {

    const d = new Date()
    const day = d.getDay()
    const year = d.getFullYear() 
    const month = d.getMonth()
    const hour = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()
    const timestamp = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    const data = {
      post_id: wordpress_id,
      helpful,
      url: process.env.GATSBY_WEB_SITE_URL + url,
      feedback: feedback || "none",
      timestamp,
    }
    axios.post(`${process.env.GATSBY_POST_LIKED_POSTS_API}`, data
    ).then(res =>  
      {
        setSuccessMsg(true);
        axios.get(`${process.env.GATSBY_GET_LIKED_POSTS_API}=${wordpress_id}`)
        .then(res => {
          this.setState({
            likes: res.data.likes,
            likedPosts: [...this.state.likedPosts, wordpress_id]
          }, () => localStorage.setItem('likedPosts', JSON.stringify(this.state.likedPosts)))
        })
        .catch(err => console.log(err))
      }
    )
    .catch( err => console.log(err))
  }

  render(){
    // const nextPost = this.props.data.wordpressTtgPosts
    const post = this.props.data.wordpressPost
    const tagList = (tags) => (
      <div className="post-tags">
        <span><strong>Tags:</strong> </span>
        {post.tags.map(tag => (
          <button className="button tag-button" type="button">{tag.name}</button>
        ))}
      </div>
    )
    
    const imgUrl = (post.featured_media &&
      post.featured_media.localFile &&
      post.featured_media.localFile.childImageSharp &&
      post.featured_media.localFile.childImageSharp.fluid &&
      post.featured_media.localFile.childImageSharp.fluid.src) ||
      this.props.data.postHeroImg.childImageSharp.fluid.src
    
    const author = (post.author && post.author.name ) || "PetPlace Staff"
    return (
      <Layout hideFooterNavigation>
        <Seo title={`${post.yoast_meta.yoast_wpseo_title}`} description={post.yoast_meta.yoast_wpseo_metadesc} image={
          (post.featured_media &&
          post.featured_media.localFile &&
          post.featured_media.localFile.childImageSharp &&
          post.featured_media.localFile.childImageSharp.fluid &&
          post.featured_media.localFile.childImageSharp.fluid.src) ||
          this.props.data.postHeroImg.childImageSharp.fluid.src
          }/>
        {filterFaqPosts(post, author, imgUrl)}
        
        <div className="single-post">
        <section className="section post-hero-section">
          <div className="container is-fullhd">
            <Breadcrumbs category={post.categories && post.categories[0]} />
            <h1 dangerouslySetInnerHTML={{
                __html: post.title
              }}
            />
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
                <div className="post-info">
                  <img className="author-img" src={avatarImg} alt="avatar" />
                  <p  className="author-name">
                    {
                      filterAuthorsLink(author) ? 
                      <Link to={`/authors/${filterAuthorsLink(author)}`}>{author}</Link> :
                      author
                    }
                  </p>
                  <p className="post-date">{post.date}</p>
                  <div className="share-icons-horizontal">
                    <p>Share:</p>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={facebook}  alt="facebook" /></a>
                    <a href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="twitter" /></a>
                    <a href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`} target="_blank" rel="noopener noreferrer"> <img src={pintrest}  alt="pinterest" /></a>
                    <a href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`} target="_blank" rel="noopener noreferrer"><img src={emailIcon}  alt="email" /></a>
                  </div>
                </div>
                {isMobile ? <AdMobile /> : <AdSet /> }
                <div className="hide-mobile">
                  <LikeArticleWidget url={post.path} wordpress_id={post.wordpress_id} likes={this.state.likes} HandleSubmit={this.handleSubmit} liked={this.state.liked}/>
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
              <div className="column">
                <div className="single-post-content" dangerouslySetInnerHTML={{
                    __html: post.content
                  }}
                />
                <div className="counter-wrapper">
                  <img src={CounterImg} alt="number-of-posts" />
                  <span><strong>{this.state.likes}</strong> paws up</span>
                </div>
                <div className="hide-desktop">
                  <LikeArticleWidget url={post.path} wordpress_id={post.wordpress_id} likes={this.state.likes} HandleSubmit={this.handleSubmit} liked={this.state.liked}/>
                </div>
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
        <NextPost post={this.props.pageContext.randomPost} location={{...this.props.location}} nextPostImg={this.props.data.wordpressWpMedia} />
        </div>
      </Layout>
    )
  }

}

export default Post


export const pageQuery = graphql`
  query PostPage($id: String!, $randomPostImg: String!){
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
        slug
      }
      yoast_meta {
        yoast_wpseo_canonical
        yoast_wpseo_metadesc
        yoast_wpseo_title
      }
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    postHeroImg: file(relativePath: { eq: "defaultImg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wordpressWpMedia(slug: {eq: $randomPostImg}) {
      localFile {
        childImageSharp {
          fixed(width: 164, height: 164) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
