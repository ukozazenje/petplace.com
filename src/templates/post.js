import React, { Component } from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import avatarImg from "../images/author.svg"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import downloadIcon from "../images/download.svg"
import SimilarPosts from "../components/post/SimilarPosts"
import NoHeroPostImg from "../static/images/noPostHeroImg"
import NoMobileHeroPostImg from "../static/images/noPostHeroMobileImg"
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
import NextPrevPost from "../components/post/NextPrevPost"
// import TailtraxMobile from "../images/ads/Tailtrax_300X250.png"
// import TailtraxDesktop from "../images/ads/Tailtrax_300X600.png"
// import Tailtrax from "../images/ads/Tailtrax_728X90.png"

// const setUpAdInMiddle = content => {
//   const delimiter = "</p>"
//   // removing empty paragraphs from post content
//   const filterContent = content.replace("<p></p>", "")

//   // counting number of paragraph's in content splitting in half end removing one because of quote paragraph in bottom of page
//   const start = Math.round(filterContent.split(delimiter).length / 2)
//   const tokens = filterContent.split(delimiter).slice(start)
//   const res = tokens.join(delimiter)

//   const tokens2 = filterContent.split(delimiter).slice(0, start)
//   const res2 = tokens2.join(delimiter)

//   // mailmunch code

//   return [res2 + delimiter, res]
// }
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
          post => post === this.props.data.wordpressPost.wordpress_id
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
        `${process.env.GATSBY_GET_LIKED_POSTS_API}=${this.props.data.wordpressPost.wordpress_id}`
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
    const post = this.props.data.wordpressPost
    const petpartnersRegex = /petpartners.com/gi
    const petpartnersDisclosure = post.content.match(petpartnersRegex)
    // const content = setUpAdInMiddle(post.content)
    const tagList = tags => (
      <div className="post-tags">
        <span>
          <strong>Tags:</strong>{" "}
        </span>
        {post.tags.map(tag => (
          <button className="button tag-button" type="button">
            {tag.name}
          </button>
        ))}
      </div>
    )

    const imgUrl =
      (post.featured_media &&
        post.featured_media.localFile &&
        post.featured_media.localFile.childImageSharp &&
        post.featured_media.localFile.childImageSharp.fluid &&
        post.featured_media.localFile.childImageSharp.fluid.src) ||
      this.props.data.postHeroImg.childImageSharp.fluid.src

    const author = (post.author && post.author.name) || "PetPlace Staff"
    return (
      <Layout
        hideFooterNavigation
        hideHolidayBanner={
          post.slug === "pet-insurance-as-a-gift" ? true : false
        }
      >
        <Seo
          title={`${post.yoast_meta.yoast_wpseo_title}`}
          description={post.yoast_meta.yoast_wpseo_metadesc}
          image={
            (post.featured_media &&
              post.featured_media.localFile &&
              post.featured_media.localFile.childImageSharp &&
              post.featured_media.localFile.childImageSharp.fluid &&
              post.featured_media.localFile.childImageSharp.fluid.src) ||
            this.props.data.postHeroImg.childImageSharp.fluid.src
          }
        />
        {console.log(this.props.data)}
        {filterFaqPosts(post, author, imgUrl)}

        <div className="single-post new-single-post">
          <section className="section post-hero-section is-hidden-desktop">
            <div className="container is-fullhd">
              <Breadcrumbs category={post.categories && post.categories[0]} />
              <h1
                dangerouslySetInnerHTML={{
                  __html: post.title,
                }}
              />
            </div>
          </section>

          <div className="post-hero-img">
            <section className="post-breadcrumbs-desktop-image is-hidden-touch">
              <div className="container is-fullhd">
                <Breadcrumbs
                  category={post.categories && post.categories[0]}
                  desktop={true}
                />
                <h1
                  dangerouslySetInnerHTML={{
                    __html: post.title,
                  }}
                />
              </div>
            </section>
            <div className="is-hidden-touch">
              {post.featured_media &&
              post.featured_media.localFile &&
              post.featured_media.localFile.childImageSharp ? (
                <Img
                  sizes={{
                    ...post.featured_media.localFile.childImageSharp.fluid,
                    aspectRatio: 22 / 7,
                  }}
                  alt={
                    (post.featured_media && post.featured_media.alt_text) ||
                    "post image"
                  }
                />
              ) : (
                <NoHeroPostImg />
              )}
            </div>
            <div className="is-hidden-desktop">
              {post.featured_media &&
              post.featured_media.localFile &&
              post.featured_media.localFile.childImageSharp ? (
                <Img
                  sizes={{
                    ...post.featured_media.localFile.childImageSharp.fluid,
                    aspectRatio: 16 / 8,
                  }}
                  alt={
                    (post.featured_media && post.featured_media.alt_text) ||
                    "post image"
                  }
                />
              ) : (
                <NoMobileHeroPostImg />
              )}
            </div>
          </div>
          {post.slug === "pet-insurance-as-a-gift" ? (
            <PetPartnersBanner />
          ) : null}
          <section className="main-content">
            <div className="post-container">
              <div className="columns">
                <div className="column single-post-column">
                  {/* <a
                    className="tailtrax-post-image is-hidden-desktop"
                    href="https://www.tailtrax.com/"
                  >
                    <img src={Tailtrax} alt="tailtrax" />
                  </a> */}
                  {post && post.title === "Pawsome Fall Style Report" ? (
                    <PawsomeContent />
                  ) : (
                    <div className="single-post-content">
                      {petpartnersDisclosure && (
                        <p className="petpartners-disclosure">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.petpartners.com/"
                          >
                            PetPartners, Inc.
                          </a>{" "}
                          is an indirect corporate affiliate of PetPlace.com.
                          PetPlace may be compensated when you click on or make
                          a purchase using the links in this article.
                        </p>
                      )}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.replace(
                            /http:\/\/prod.ppl.torchte.ch\//gi,
                            "https://prod.ppl.torchte.ch/"
                          ),
                        }}
                      />
                      {/* <div
                        dangerouslySetInnerHTML={{
                          __html: content[0].replace(
                            /http:\/\/prod.ppl.torchte.ch\//gi,
                            "https://prod.ppl.torchte.ch/"
                          ),
                        }}
                      /> */}
                      {/* <a
                        className="tailtrax-post-image"
                        href="https://www.tailtrax.com/"
                      >
                        <img src={Tailtrax} alt="tailtrax" />
                      </a> */}
                      {/* <div
                        dangerouslySetInnerHTML={{
                          __html: content[1].replace(
                            /http:\/\/prod.ppl.torchte.ch\//gi,
                            "https://prod.ppl.torchte.ch/"
                          ),
                        }}
                      /> */}
                    </div>
                  )}
                  <div className="counter-wrapper">
                    <img src={CounterImg} alt="number-of-posts" />
                    <span>
                      <strong>{this.state.likes}</strong> paws up
                    </span>
                  </div>
                  <div className="is-hidden-tablet">
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
                  <div className="container is-fullhd">
                    <div className="columns">
                      <div className="column">
                        {post.tags ? tagList(post.tags) : null}
                      </div>
                    </div>
                  </div>
                </div>
                {/* sidebar */}
                <div className="column single-post-sidebar">
                  <div className="post-info">
                    <img className="author-img" src={avatarImg} alt="avatar" />
                    <p className="author-name">
                      {filterAuthorsLink(author) ? (
                        <Link to={`/authors/${filterAuthorsLink(author)}`}>
                          {author}
                        </Link>
                      ) : (
                        author
                      )}
                    </p>
                    <p className="post-date">{post.date}</p>
                    {/* <a
                      className="is-hidden-mobile"
                      href="https://www.tailtrax.com/"
                    >
                      <img src={TailtraxMobile} alt="tailtrax" />
                    </a> */}
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
                  {/* <div className="is-hidden-mobile">
                    <AdSet />
                  </div> */}
                  {/* {isMobile ? <AdMobile /> : } */}

                  <div className="is-hidden-mobile">
                    <LikeArticleWidget
                      url={post.path}
                      wordpress_id={post.wordpress_id}
                      likes={this.state.likes}
                      HandleSubmit={this.handleSubmit}
                      liked={this.state.liked}
                    />
                  </div>
                  {/* <a
                    className="is-hidden-mobile"
                    href="https://www.tailtrax.com/"
                  >
                    <img src={TailtraxDesktop} alt="tailtrax" />
                  </a> */}
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
                {/* /sidebar */}
              </div>
            </div>
          </section>
          <SimilarPosts />
          {/* <NextPost
            post={this.props.pageContext.nextPost}
            location={{ ...this.props.location }}
            // nextPostImg={this.props.data.allWordpressWpMedia.node[0]}
          />
          <NextPost
            post={this.props.pageContext.prevPost}
            location={{ ...this.props.location }}
            nextPostImg={this.props.data.allWordpressWpMedia.edges[0].node}
          /> */}
          <NextPrevPost
            nextPost={this.props.pageContext.nextPost}
            prevPost={this.props.pageContext.prevPost}
            images={this.props.data.allWordpressWpMedia.edges}
          />
        </div>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query PostPage($id: String!, $nextPostImg: String!, $prevPostImg: String!) {
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
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    postHeroImg: file(relativePath: { eq: "defaultImg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluid
        }
      }
    }
    allWordpressWpMedia(
      filter: { slug: { in: [$nextPostImg, $prevPostImg] } }
    ) {
      edges {
        node {
          id
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
`
