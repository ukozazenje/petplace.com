import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import NoImg from "../static/images/noPostImg"
import { categoryColor } from "../components/functions"
import Pagination from "../components/search/pagination"
import HeroSection from "../components/categories/categoryHero"
import SideBar from "../components/categories/sideBar"
import PopularPosts from "../components/categories/PopularPosts"
import DefaultImg from "../images/defaultImg.jpg"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import HeroImg from "../static/images/drDebraHeroImg"
import MostPopularTags from "../components/mostPopularTags"
import DrDebraImg from "../images/dr-debra.png"
import ContactUsSection from "../components/homepage/contact-us"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import ArrowImg from "../images/ask-arrow.svg"
import placeholderImg from "../images/no-next-post.jpg"

const DrDebraPage = ({ pageContext, data, pathContext }) => {
  return (
    <Layout>
      <Helmet>
        <title>{`Ask Dr. Debra Common Questions | Petplace`}</title>
        <meta
          name="description"
          content="PetPlace is the most comprehensive resource for pet information available on the web."
        />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Ask Dr. Debra Common Questions | Petplace`}
        />
        <meta
          property="og:description"
          content="PetPlace is the most comprehensive resource for pet information available on the web."
        />
        <meta property="og:image" content={DefaultImg} />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="Petplace" />
        <meta
          name="twitter:title"
          content={`Ask Dr. Debra Common Questions | Petplace`}
        />
        <meta
          name="twitter:description"
          content="PetPlace is the most comprehensive resource for pet information available on the web."
        />
        <meta name="twitter:image" content={DefaultImg} />
        <meta name="twitter:creator" content="@PetPlaceFans" />
      </Helmet>

      <section className="section dr-debra-hero-section">
        <div className="container is-fullhd">
          <div className="columns dr-debra-hero-columns">
            <div className="column dr-debra-hero-content">
              <h1>
                <span>Ask </span>Dr. Debra
              </h1>
              <p>
                Got a question about your cat’s litter box habits or your dog’s
                digging? Wondering why training isn’t clicking with your canine
                or your new wet food isn’t a hit with your kitten?*
              </p>
              <a className="orange-btn" href="mailto:info@petplace.com">
                <img src={ArrowImg} /> Ask Now
              </a>
              <div className="dr-debra-disclaimer">
                <p>
                  * Due to the high volume of responses, Dr. Debra will be
                  unable to answer all questions received and publication of
                  accepted questions will take a minimum of two weeks.
                </p>
                <p>
                  Dr. Debra’s guidance should not be considered veterinary
                  advice like that provided by your veterinarian, since she is
                  unable to personally examine your pet. If you have an
                  immediate concern or emergency, contact a veterinarian or
                  local veterinary hospital about your specific situation.
                </p>
              </div>
            </div>
            <div className="column dr-debra-hero-image">
              <HeroImg />
            </div>
          </div>
        </div>
      </section>
      <section className="section category-posts dr-debra-posts">
        <div className="container is-fullhd">
          <div className="columns categories-columns">
            <div className="column is-one-quarter-widescreen side-bar dr-debra-sidebar">
              <div className="dr-debra-sidebar-profile">
                <img src={DrDebraImg} alt="dr debra" />
                <p>Dr. Debra Primovic - DVM</p>
                <div className="dr-debra-social-icons">
                  <a
                    className={`facebook-/tags/ask-dr-debra-common-questions/`}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}/tags/ask-dr-debra-common-questions/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`facebook-/tags/ask-dr-debra-common-questions/`}
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                  <a
                    className={`twitter-/tags/ask-dr-debra-common-questions/`}
                    href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}/tags/ask-dr-debra-common-questions/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`twitter-/tags/ask-dr-debra-common-questions/`}
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a
                    className={`pinterest-/tags/ask-dr-debra-common-questions/`}
                    href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/tags/ask-dr-debra-common-questions/&media=&description=Ask Dr. Debra Common Questions`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className={`pinterest-$/tags/ask-dr-debra-common-questions/`}
                      src={pintrest}
                      alt="pinterest"
                    />
                  </a>
                  <a
                    className={`mail-/tags/ask-dr-debra-common-questions/`}
                    href={`mailto:info@petplace.com?&subject=Ask Dr. Debra Common Questions&body=${process.env.GATSBY_WEB_SITE_URL}/tags/ask-dr-debra-common-questions/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`mail-/tags/ask-dr-debra-common-questions/`}
                      src={emailIcon}
                      alt="email"
                    />
                  </a>
                </div>
              </div>
              <div className={`category-filters`}>
                <h3>Most popular tags</h3>
                <MostPopularTags />
              </div>
              {/* <OrderBy onChange={setOrderBy} className="is-hidden-widescreen" /> */}
            </div>
            <div className="column">
              <div className="dr-debra-main-content">
                <h2>Meet Dr. Debra</h2>
                <p>
                  PetPlace’s own Dr. Debra Primovic is here to provide tips and
                  tricks for inquisitive pet parents. With over 30 years of
                  experience treating animals and hundreds of pet health
                  articles under her belt, Debra can help you tackle any pet
                  care concern and offer helpful suggestions on how to move
                  forward.
                </p>
                <p>
                  If you’re interested in submitting a question for our Ask Dr.
                  Debra column, send us an{" "}
                  <a href="mailto:info@petplace.com">email</a> with your full
                  name, name of your pet(s), 1 sentence of background on your
                  animal(s), and 1 brief question.
                </p>
                <div className="dr-debra-most-popular-tags">
                  <h3>Most popular tags</h3>
                  <MostPopularTags />
                </div>
              </div>
              <div className="columns posts-list-container">
                {data &&
                  data.allWordpressPost &&
                  data.allWordpressPost.edges.map(({ node: post }) => (
                    <div className="column is-one-third" key={post.id}>
                      <div className="category-post-card">
                        <div className="card-img">
                          <Link to={post && post.path}>
                            {post.featured_media &&
                            post.featured_media.localFile &&
                            post.featured_media.localFile.childImageSharp &&
                            post.featured_media.localFile.childImageSharp
                              .fluid ? (
                              <Img
                                sizes={{
                                  ...post.featured_media.localFile
                                    .childImageSharp.fluid,
                                  aspectRatio: 4 / 3,
                                }}
                                alt={
                                  (post.featured_media &&
                                    post.featured_media.alt_text) ||
                                  "post image"
                                }
                              />
                            ) : (
                              <img
                                style={{ width: "100%" }}
                                className="category-placeholder-image"
                                src={placeholderImg}
                                alt="no img"
                              />
                            )}
                          </Link>
                          <Link
                            to={
                              post &&
                              post.categories &&
                              post.categories[0]["path"]
                            }
                            className={`card-category ${categoryColor(
                              post &&
                                post.categories &&
                                post.categories[0]["name"].replace(
                                  /&amp;/g,
                                  "&"
                                )
                            )}`}
                          >
                            {post &&
                              post.categories &&
                              post.categories[0]["name"].replace(/&amp;/g, "&")}
                          </Link>
                        </div>
                        <div className="card-content">
                          <div className="card-title">
                            <h3>
                              <Link
                                to={`${post && post.path}`}
                                dangerouslySetInnerHTML={{
                                  __html: post.title || "title",
                                }}
                              />
                            </h3>
                          </div>
                          <div className="card-author">
                            <span>{(post && post.date) || "date"} · </span>
                            <span>
                              {(post && post.author && post.author.name) ||
                                "author"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="pagination">
                  <div className="pagination-buttons">
                    {pageContext.previousPagePath != "" && (
                      <Link
                        className="prev"
                        to={pathContext.previousPagePath}
                        rel="prev"
                      >
                        {""}
                      </Link>
                    )}

                    {data &&
                    data.allWordpressPost &&
                    data.allWordpressPost.edges &&
                    data.allWordpressPost.edges.length === 0
                      ? "No Posts"
                      : `Page: ${pageContext.humanPageNumber} of ${pageContext.numberOfPages}`}
                    {pageContext.nextPagePath != "" && (
                      <Link
                        className="next"
                        to={`${pageContext.nextPagePath}/`}
                        rel="next"
                      >
                        {""}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DrDebraPage

export const drDebraQueryTemplate = graphql`
  query drDebraQueryTemplate($limit: Int!, $skip: Int!, $slug: String!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          id
          title
          featured_media {
            source_url
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          date(formatString: "MMMM DD, YYYY")
          path
          categories {
            path
            name
          }
          author {
            name
          }
        }
      }
    }
  }
`
