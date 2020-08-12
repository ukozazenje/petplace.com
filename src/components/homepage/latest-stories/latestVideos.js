import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"
import { categoryColor } from "../../functions"
import VideoBtn from "../../../images/playbtn.svg"
const LatestVideos = props => {
  const { wordpressTtgPages } = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(wordpress_id: { eq: 6 }) {
          id
          acf {
            latest_videos {
              category_link
              category_name
              path
              post_date
              post_title
              author_name
              featured_img {
                source_url
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "no-img.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  const latestVideosPosts = wordpressTtgPages.acf.latest_videos
  const mainPost = latestVideosPosts[0]
  const firstPost = latestVideosPosts[1]
  const secondPost = latestVideosPosts[2]
  console.log(mainPost)
  return (
    <div className="featured-categories">
      <h3>Latest Videos</h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child main-box">
            <div className="main-box-mobile-img">
              <Link
                className={`category-link-btn ${categoryColor(
                  mainPost.category_name
                )} hide-desktop`}
                to={mainPost.category_path}
                dangerouslySetInnerHTML={{
                  __html: mainPost.category_name,
                }}
              />
              <Img
                sizes={{
                  ...mainPost.featured_img.localFile.childImageSharp.fluid,
                  aspectRatio: 4 / 3,
                }}
                alt={
                  (mainPost.featured_img && mainPost.featured_img.alt_text) ||
                  "post"
                }
              />
            </div>
            <div className="main-box-desktop-img">
              <Img
                sizes={{
                  ...mainPost.featured_img.localFile.childImageSharp.fluid,
                  aspectRatio: 16 / 9,
                }}
                alt={
                  (mainPost.featured_img && mainPost.featured_img.alt_text) ||
                  "post"
                }
              />
            </div>
            <div
              className={`main-content ${categoryColor(
                mainPost.category_name
              )}-transparent`}
            >
              <img
                onClick={() => navigate(mainPost.path)}
                src={VideoBtn}
                className="play-btn hide-btn-mobile"
              />
              <Link
                className={`category-link-btn ${categoryColor(
                  mainPost.category_name
                )}  hide-mobile`}
                to={mainPost.category_path}
                dangerouslySetInnerHTML={{
                  __html: mainPost.category_name,
                }}
              />
              <Link to={mainPost.path}>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: mainPost.post_title,
                  }}
                />
              </Link>
              <p className="date">
                {mainPost.post_date || "no date"} ·{" "}
                {mainPost.author_name || "PetPlace.com"}
              </p>
            </div>
          </div>
        </div>
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child thumbnail-box flex-start">
            <Link to={firstPost.path}>
              <Img
                fluid={firstPost.featured_img.localFile.childImageSharp.fluid}
                alt={
                  (firstPost.featured_img && firstPost.featured_img.alt_text) ||
                  "post image"
                }
                className="thumbnail-img"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </Link>
            <div className="sub-content">
              <div className="category-links-wrapper">
                <Link
                  className={`category-link-btn ${categoryColor(
                    firstPost.category_name
                  )}`}
                  to={firstPost.category_path}
                  dangerouslySetInnerHTML={{
                    __html: firstPost.category_name,
                  }}
                />
                <Link
                  className={`category-link-btn video-link`}
                  to={"/article/category/just-for-fun/videos/"}
                >
                  Video
                </Link>
              </div>
              <Link to={firstPost.path}>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: firstPost.post_title,
                  }}
                />
              </Link>
              <p className="date">
                {firstPost.post_date} · {firstPost.author_name}
              </p>
            </div>
          </div>
          <div className="tile is-child thumbnail-box flex-end">
            <Link to={secondPost.path}>
              <Img
                fluid={secondPost.featured_img.localFile.childImageSharp.fluid}
                alt={
                  (secondPost.featured_image &&
                    secondPost.featured_image.alt_text) ||
                  "post image"
                }
                className="thumbnail-img"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </Link>
            <div className="sub-content align-slef-start">
              <div className="category-links-wrapper">
                <Link
                  className={`category-link-btn ${categoryColor(
                    secondPost.category_name
                  )}`}
                  to={secondPost.category_path}
                  dangerouslySetInnerHTML={{
                    __html: secondPost.category_name,
                  }}
                />
                <Link
                  className={`category-link-btn video-link`}
                  to={"/article/category/just-for-fun/videos/"}
                >
                  Video
                </Link>
              </div>
              <Link to={secondPost.path}>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: secondPost.post_title,
                  }}
                />
              </Link>
              <p className="date">
                {secondPost.post_date} · {secondPost.author_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestVideos
