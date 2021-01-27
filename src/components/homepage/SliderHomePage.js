import React from "react"
import Slider from "react-slick"
import catImgSliderMob from "../../images/homepage-slider/cat-slide-mobile.jpg"
import catImgSliderTab from "../../images/homepage-slider/cat-slide-tablet.jpg"
import catImgSliderDesk from "../../images/homepage-slider/cat-slide-desktop.jpg"
import { useStaticQuery, Link } from "gatsby"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
}

const SliderHomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressTtgPages(wordpress_id: { eq: 6 }) {
        acf {
          slider_posts {
            author
            path
            post_title
            acf {
              slider_title
              slide_image {
                localFile {
                  childImageSharp {
                    fixed(width: 1920, height: 580) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            featured_img {
              localFile {
                childImageSharp {
                  fixed(width: 1920, height: 580) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            featured_img_tablet {
              localFile {
                childImageSharp {
                  fixed(width: 580, height: 400) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            featured_img_mobile {
              localFile {
                childImageSharp {
                  fixed(width: 320, height: 400) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
      missingDesktopPostImg: file(relativePath: { eq: "defaultImg.jpg" }) {
        childImageSharp {
          fixed(width: 1920, height: 580) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      missingMobilePostImg: file(relativePath: { eq: "defaultImg.jpg" }) {
        childImageSharp {
          fixed(width: 580, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const truncateString = (str, num) => {
    if (str.length > num) {
      const cutString = str.slice(0, num)
      return `${str.slice(0, cutString.lastIndexOf(" "))} ...`
    } else {
      return str
    }
  }

  const { slider_posts } = data.wordpressTtgPages.acf
  const missingDesktopImg = data.missingDesktopPostImg.childImageSharp.fixed.src
  const missingMobileImg = data.missingMobilePostImg.childImageSharp.fixed.src
  console.log("slider_posts", slider_posts)
  return (
    <Slider {...settings}>
      {slider_posts &&
        slider_posts.map(slide => (
          <div className="slider-container">
            <span className="slider-overlay"></span>
            <div className="image-wrapper">
              <picture>
                <source
                  srcset={
                    (slide.acf &&
                      slide.acf.slide_image &&
                      slide.acf.slide_image.localFile &&
                      slide.acf.slide_image.localFile.childImageSharp.fixed
                        .src) ||
                    slide.featured_img.localFile.childImageSharp.fixed.src ||
                    missingDesktopImg
                  }
                  media="(min-width: 769px)"
                />
                <source
                  srcset={
                    slide.featured_img_tablet.localFile.childImageSharp.fixed
                      .src || missingMobileImg
                  }
                  media="(min-width: 440px)"
                />
                <img
                  src={
                    slide.featured_img_mobile.localFile.childImageSharp.fixed
                      .src || missingMobileImg
                  }
                  alt="Some picture"
                />
              </picture>
            </div>
            <div className="text-wrapper">
              <div className="text-content">
                <h1
                  // dangerouslySetInnerHTML={{
                  //   __html: slide.post_title || "No title",
                  // }}

                  dangerouslySetInnerHTML={{
                    __html:
                      slide && slide.acf && slide.acf.slider_title
                        ? slide.acf.slider_title
                        : truncateString(slide.post_title, 40) || "No title",
                  }}
                />
                <Link class="read-more-btn" to={slide.path || "/"}>
                  <img
                    class="arrow-ico"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxOSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNi41SDE4TTE4IDYuNUwxMi40MzQ4IDFNMTggNi41TDEyLjQzNDggMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    alt="Arrow Icon"
                  />
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      {/* <div className="slider-container">
        <span className="slider-overlay"></span>
        <div className="image-wrapper">
          <picture>
            <source srcset={catImgSliderDesk} media="(min-width: 769px)" />
            <source srcset={catImgSliderTab} media="(min-width: 440px)" />
            <img src={catImgSliderMob} alt="Some picture" />
          </picture>
        </div>
        <div className="text-wrapper">
          <div className="text-content">
            <h1>Cats are Friendlier Than You Think</h1>
          </div>
        </div>
      </div> */}
    </Slider>
  )
}

export default SliderHomePage
