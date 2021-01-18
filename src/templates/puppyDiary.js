import React, { Component } from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import avatarImg from "../images/puppy-diaries/author.png"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import downloadIcon from "../images/download.svg"
import SimilarPosts from "../components/post/SimilarPosts"
import PuppyDiariesPostMobileImg from "../static/images/puppy-diaries/PuppyDiariesPostMobileImg"
import PuppyDiariesPostImg from "../static/images/puppy-diaries/PuppyDiariesPostImg"
import NextPost from "../components/post/NextPost"
import Seo from "../components/seo"
import Sticky from "react-stickynode"
import Breadcrumbs from "../components/Breadcrumbs"
import AdSet from "../components/AdSet"
import AdMobile from "../components/AdMobile"
import { Link } from "gatsby"
import { filterAuthorsLink, filterFaqPosts } from "../components/functions"
import { isMobile, isMobileOnly } from "react-device-detect"
import LikeArticleWidget from "../components/LikeArticleWidget"
import axios from "axios"
import CounterImg from "../images/footer-counter.png"
import PawsomeContent from "../components/PawsomeFallStyleReportContent"
import PetPartnersBanner from "../components/PetPartnersBanner"
import ContactUsSection from "../components/homepage/contact-us"
import storyNumber from "../images/puppy-diaries/story-number.svg"
import puppyDiariesLogo from "../images/puppy-diaries/puppy-diaries-logo.svg"
import homeIcon from "../images/home_bread_crumb.svg"

class Post extends Component {
  state = {
    likes: 0,
    likedPosts: [],
    liked: false,
  }

  componentDidMount() {
    // find iframe and wrap it in div
    const iFrames = [...document.getElementsByTagName("iframe")]
    const wrap = function(toWrap, wrapper) {
      wrapper = wrapper || document.createElement("div")
      wrapper.classList.add("video-wrapper")
      toWrap.parentNode.appendChild(wrapper)
      return wrapper.appendChild(toWrap)
    }
    iFrames.length &&
      iFrames.map(
        iFrame => !iFrame.src.includes("instagram.com") && wrap(iFrame)
      )
    if (localStorage.getItem("likedPosts") === null) {
      localStorage.setItem("likedPosts", "[]")
    } else {
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts"))
      const liked =
        likedPosts.filter(
          post =>
            post === this.props.data.wordpressPuppyDiariesPosts.wordpress_id
        ) > 0
          ? true
          : false
      this.setState({
        likedPosts: likedPosts,
        liked: liked,
      })
    }
    axios
      .get(
        `${process.env.GATSBY_GET_LIKED_POSTS_API}=${this.props.data.wordpressPuppyDiariesPosts.wordpress_id}`
      )
      .then(res =>
        this.setState({
          likes: res.data.likes,
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
    axios
      .post(`${process.env.GATSBY_POST_LIKED_POSTS_API}`, data)
      .then(res => {
        setSuccessMsg(true)
        axios
          .get(`${process.env.GATSBY_GET_LIKED_POSTS_API}=${wordpress_id}`)
          .then(res => {
            this.setState(
              {
                likes: res.data.likes,
                likedPosts: [...this.state.likedPosts, wordpress_id],
              },
              () =>
                localStorage.setItem(
                  "likedPosts",
                  JSON.stringify(this.state.likedPosts)
                )
            )
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    const post = this.props.data.wordpressPuppyDiariesPosts
    const post_number = this.props.pageContext.post_number
    console.log(post_number)
    const imgUrl =
      (post.featured &&
        post.featured.localFile &&
        post.featured.localFile.childImageSharp &&
        post.featured.localFile.childImageSharp.fluid &&
        post.featured.localFile.childImageSharp.fluid.src) ||
      this.props.data.postHeroImg.childImageSharp.fluid.src

    const author = post.author_name || "PetPlace Staff"
    return (
      <Layout>
        <Seo
          title={`${post.yoast_title}`}
          description={post.yoast_meta}
          image={
            (post.featured &&
              post.featured.localFile &&
              post.featured.localFile.childImageSharp &&
              post.featured.localFile.childImageSharp.fluid &&
              post.featured.localFile.childImageSharp.fluid.src) ||
            this.props.data.postHeroImg.childImageSharp.fluid.src
          }
        />
        <div className="single-post puppy-diary-post">
          <div className="post-hero-img">
            {/* <div className="is-hidden-touch"> */}
            <div className="mobile-image">
              <Img
                fluid={post.acf.mobile_image.localFile.childImageSharp.fluid}
              />
            </div>
            <div className="tablet-image">
              <Img
                fluid={post.acf.tablet_image.localFile.childImageSharp.fluid}
              />
            </div>
            <div className="desktop-image">
              <Img
                fluid={post.acf.desktop_image.localFile.childImageSharp.fluid}
              />
            </div>
            {/* <div className="container is-fullhd">
                <img
                  className="puppy-diaries-logo"
                  src={puppyDiariesLogo}
                  alt="puppy diaries logo"
                />
              </div> */}
            {/* </div> */}
            {/* <div className="is-hidden-desktop">
              <PuppyDiariesPostMobileImg />
            </div> */}
            <div className="container is-fullhd breadcrumbs-wrapper">
              <div className="breadcrumbs">
                <Link to="/" className="home">
                  <img src={homeIcon} alt="home" />
                </Link>
                <Link
                  to="/article/puppy-diaries/"
                  className={`category-link purple`}
                >
                  puppy diaries
                </Link>
              </div>
            </div>
          </div>

          <section className="main-content">
            <div className="container is-fullhd">
              <div className="columns">
                <div className="column is-one-quarter single-post-sidebar">
                  <div className="post-info">
                    <img className="author-img" src={avatarImg} alt="avatar" />
                    <p className="author-name">
                      {/* <Link to={`/authors/${filterAuthorsLink(author)}`}> */}
                      {author}
                      {/* </Link> */}
                    </p>
                    <p className="post-date">{post.date}</p>
                    <div className="share-icons-horizontal">
                      <p>Share:</p>
                      <a
                        className={`facebook-${post.path}`}
                        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`facebook-${post.path}`}
                          src={facebook}
                          alt="facebook"
                        />
                      </a>
                      <a
                        className={`twitter-${post.path}`}
                        href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`twitter-${post.path}`}
                          src={twitter}
                          alt="twitter"
                        />
                      </a>
                      <a
                        className={`pinterest-${post.path}`}
                        href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <img
                          className={`pinterest-${post.path}`}
                          src={pintrest}
                          alt="pinterest"
                        />
                      </a>
                      <a
                        className={`mail-${post.path}`}
                        href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`mail-${post.path}`}
                          src={emailIcon}
                          alt="email"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hide-mobile">
                    <AdSet />
                  </div>
                  {/* {isMobile ? <AdMobile /> : } */}
                  <div className="hide-mobile">
                    <LikeArticleWidget
                      url={post.path}
                      wordpress_id={post.wordpress_id}
                      likes={this.state.likes}
                      HandleSubmit={this.handleSubmit}
                      liked={this.state.liked}
                    />
                  </div>
                  <Sticky
                    enabled={true}
                    top={20}
                    bottomBoundary=".single-post-sidebar"
                  >
                    <div className="share-icons-vertical">
                      <a
                        className={`facebook-${post.path}`}
                        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`facebook-${post.path}`}
                          src={facebook}
                          alt="facebook"
                        />
                      </a>
                      <a
                        className={`twitter-${post.path}`}
                        href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`twitter-${post.path}`}
                          src={twitter}
                          alt="twitter"
                        />
                      </a>
                      <a
                        className={`pinterest-${post.path}`}
                        href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <img
                          className={`pintrest-${post.path}`}
                          src={pintrest}
                          alt="pinterest"
                        />
                      </a>
                      <a
                        className={`mail-${post.path}`}
                        href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={`mail-${post.path}`}
                          src={emailIcon}
                          alt="email"
                        />
                      </a>
                    </div>
                  </Sticky>
                </div>
                <div className="column">
                  <div className="single-post-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<img class="story-number" src=/images/bookmark-${post_number}.svg alt="story number" />${post.content}`,
                      }}
                    />
                  </div>
                  <div className="counter-wrapper">
                    <img src={CounterImg} alt="number-of-posts" />
                    <span>
                      <strong>{this.state.likes}</strong> paws up
                    </span>
                  </div>
                  <div className="hide-desktop">
                    <LikeArticleWidget
                      url={post.path}
                      wordpress_id={post.wordpress_id}
                      likes={this.state.likes}
                      HandleSubmit={this.handleSubmit}
                      liked={this.state.liked}
                    />
                  </div>
                  <hr />
                  <div className="share-icons-horizontal">
                    <p>Share:</p>
                    <a
                      className={`facebook-${post.path}`}
                      href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={`facebook-${post.path}`}
                        src={facebook}
                        alt="facebook"
                      />
                    </a>
                    <a
                      className={`twitter-${post.path}`}
                      href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={`twitter-${post.path}`}
                        src={twitter}
                        alt="twitter"
                      />
                    </a>
                    <a
                      className={`pinterest-${post.path}`}
                      href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}${post.path}&media=&description=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img
                        className={`pinterest-${post.path}`}
                        src={pintrest}
                        alt="pinterest"
                      />
                    </a>
                    <a
                      className={`mail-${post.path}`}
                      href={`mailto:info@petplace.com?&subject=${post.title}&body=${process.env.GATSBY_WEB_SITE_URL}${post.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={`mail-${post.path}`}
                        src={emailIcon}
                        alt="email"
                      />
                    </a>
                  </div>
                  {/* <div className="container is-fullhd">
                    <div className="columns">
                      <div className="column">
                        {post.tags ? tagList(post.tags) : null}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <SimilarPosts />
          <ContactUsSection />
        </div>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query PuppyDiaries($id: String!) {
    wordpressPuppyDiariesPosts(id: { eq: $id }) {
      author_name
      content
      date
      title
      yoast_meta
      yoast_title
      wordpress_id
      featured {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 483, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      acf {
        intro_text
        desktop_image {
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        tablet_image {
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mobile_image {
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
