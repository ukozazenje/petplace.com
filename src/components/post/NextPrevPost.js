import React from "react"
import { Link, navigate } from "gatsby"
// import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import NoImg from "../../static/images/noNextPost"
import Img from "gatsby-image"
import NextIcon from "../../images/NextIcon.svg"
import PrevIcon from "../../images/PrevIcon.svg"

const checkForImage = (images, slug) => {
  // console.log(images)
  // console.log(slug)
  const filteredImages = images.filter(image => image.node.slug === slug)
  if (filteredImages.length > 0) {
    return (
      <Img
        className="prev-img"
        fixed={filteredImages[0].node.localFile.childImageSharp.fixed}
      />
    )
  } else {
    return <NoImg />
  }
}
const NextPrevPost = ({ nextPost, prevPost, images }) => {
  // const post = props.post && props.post.node
  // const nextPostImg = props.nextPostImg
  const nextPostSImageSlug =
    (nextPost &&
      nextPost.node &&
      nextPost.node.featured_media &&
      nextPost.node.featured_media.slug) ||
    "no-slug"

  const prevPostSImageSlug =
    (prevPost &&
      prevPost.node &&
      prevPost.node.featured_media &&
      prevPost.node.featured_media.slug) ||
    "no-slug"

  // console.log("prevPost", prevPost)
  // console.log("images", images)
  const nextImg = checkForImage(images, nextPostSImageSlug)
  const prevImg = checkForImage(images, prevPostSImageSlug)

  // const nextImage = next
  return (
    <section className="section next-prev-post-section">
      <div className="container is-fullhd next-prev-post-container-mobile is-hidden-desktop">
        <div className="next-prev-post-mobile">
          <p className="next-prev-post-mobile-headline">
            Previous / Next Article
          </p>
          <div className="next-prev-post-mobile-post-wrapper">
            <img
              className="navigation-icon"
              onClick={() => navigate(prevPost && prevPost.node.path)}
              src={PrevIcon}
              alt="Previous Article button"
            />
            <div className="next-prev-post-mobile-content-wrapper">
              <div className="next-prev-post-mobile-image">
                <Link to={(nextPost && nextPost.node.path) || "/"}>
                  {/* {nextImg &&
                  nextImg.localFile &&
                  nextImg.localFile.childImageSharp ? (
                    <Img
                      className="prev-img"
                      fixed={nextImg.localFile.childImageSharp.fixed}
                    />
                  ) : (
                    <NoImg />
                  )} */}
                  {nextImg}
                </Link>
              </div>
              <div className="next-prev-post-mobile-title">
                {nextPost &&
                nextPost.node.categories &&
                nextPost.node.categories[0] &&
                nextPost.node.categories[0].path ? (
                  <Link to={nextPost.node.categories[0].path}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: nextPost.node.categories[0].name,
                      }}
                    />
                  </Link>
                ) : null}
                <Link to={(nextPost && nextPost.node.path) || "/"}>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: (nextPost && nextPost.node.title) || "no title",
                    }}
                  />
                </Link>
              </div>
            </div>
            <img
              className="navigation-icon"
              onClick={() => navigate(nextPost && nextPost.node.path)}
              src={NextIcon}
              alt="Next Article button"
            />
          </div>
        </div>
      </div>
      <div className="container is-fullhd next-prev-post-container is-hidden-touch">
        <div className="prev-post-container">
          <img
            className="navigation-icon"
            onClick={() => navigate(prevPost && prevPost.node.path)}
            src={PrevIcon}
            alt="Previous Article button"
          />
          <div className="prev-post-image-wrapper">
            <h3>Previous Article</h3>
            <Link to={(prevPost && prevPost.node.path) || "/"}>
              {/* {prevImg &&
              prevImg.localFile &&
              prevImg.localFile.childImageSharp ? (
                <Img
                  className="prev-img"
                  fixed={prevImg.localFile.childImageSharp.fixed}
                />
              ) : (
                <NoImg />
              )} */}
              {prevImg}
            </Link>
          </div>
          <div className="prev-post-content-wrapper">
            {prevPost &&
            prevPost.node.categories &&
            prevPost.node.categories[0] &&
            prevPost.node.categories[0].path ? (
              <Link to={prevPost.node.categories[0].path}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: prevPost.node.categories[0].name,
                  }}
                />
              </Link>
            ) : null}
            <Link to={(prevPost && prevPost.node.path) || "/"}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: (prevPost && prevPost.node.title) || "no title",
                }}
              />
            </Link>
          </div>
        </div>

        <div className="prev-post-container">
          <div className="prev-post-image-wrapper">
            <h3>Next Article</h3>
            <Link to={(nextPost && nextPost.node.path) || "/"}>
              {/* {nextImg &&
              nextImg.localFile &&
              nextImg.localFile.childImageSharp ? (
                <Img
                  className="prev-img"
                  fixed={nextImg.localFile.childImageSharp.fixed}
                />
              ) : (
                <NoImg />
              )} */}
              {nextImg}
            </Link>
          </div>
          <div className="prev-post-content-wrapper">
            {nextPost &&
            nextPost.node.categories &&
            nextPost.node.categories[0] &&
            nextPost.node.categories[0].path ? (
              <Link to={nextPost.node.categories[0].path}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: nextPost.node.categories[0].name,
                  }}
                />
              </Link>
            ) : null}
            <Link to={(nextPost && nextPost.node.path) || "/"}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: (nextPost && nextPost.node.title) || "no title",
                }}
              />
            </Link>
          </div>
          <img
            className="navigation-icon"
            onClick={() => navigate(nextPost && nextPost.node.path)}
            src={NextIcon}
            alt="Next Article button"
          />
        </div>
      </div>
    </section>
  )
}

export default NextPrevPost
