import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import HeroSection from "../components/categories/categoryHero"
import SideBar from "../components/categories/newSideBar"
// import PopularPosts from "../components/categories/PopularPosts"
import Img from "gatsby-image"
// import NoImg from "../static/images/noPostImg"
import { categoryColor } from "../components/functions"
import logo from "../images/PPlogo.jpg"
import placeholderImg from "../images/no-next-post.jpg"

const VideoCategoryTemplate = ({ pageContext, data }) => {
  return (
    <Layout>
      <Seo
        title={`${(pageContext && pageContext.cat_name) || " "} | Petplace`}
        description="PetPlace is the most comprehensive resource for pet information available on the web"
        image="/images/pet-health.jpg"
      />
      <Helmet>
        {/* inline script elements */}
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "headline": "PetPlace: The Web's #1 Source of Pet Information",
              "description": "PetPlace is the most comprehensive resource for pet information available on the web",
              "author": {
                "@type": "Organization",
                "name": "PetPlace Staff"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${process.env.GATSBY_WEB_SITE_URL}${(pageContext &&
          pageContext.cat_path) ||
          "/"}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              }
            }
          `}</script>
      </Helmet>
      {/* <HeroSection title={(pageContext && pageContext.cat_name) || " "} /> */}
      <section className="section featured-video-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-one-third">
              <h1>Are You a Pet Parent?</h1>
              <p>
                Check Out Our Videos for Vet-Approved Tips and the Latest in Pet
                News!
              </p>
              <Link
                to={data.allWordpressPost.edges[0].node.path}
                className="video-btn"
              >
                Find out More
              </Link>
            </div>
            <div
              className="column featured-video"
              dangerouslySetInnerHTML={{
                __html: data.allWordpressPost.edges[0].node.content.match(
                  /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/
                ),
              }}
            />
          </div>
        </div>
      </section>
      <section className="section category-posts">
        <div className="container is-fullhd">
          <div className="columns categories-columns">
            {/* <SideBar
              subcategories={
                (data &&
                  data.allWordpressCategory &&
                  data.allWordpressCategory.edges) ||
                ""
              }
            /> */}
            <div className="column">
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
                        to={`${
                          pageContext.previousPagePath === pageContext.cat_path
                            ? pageContext.previousPagePath
                            : `${pageContext.previousPagePath}/`
                        }`}
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
      {/* <PopularPosts /> */}
    </Layout>
  )
}

export default VideoCategoryTemplate

export const videoCategoryQueryTemplate = graphql`
  query videoCategoryQueryTemplate(
    $id: Int!
    $categories: [Int!]
    $limit: Int!
    $skip: Int!
  ) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        categories: { elemMatch: { wordpress_id: { in: $categories } } }
      }
    ) {
      edges {
        node {
          id
          title
          content
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
    allWordpressCategory(
      filter: { parent_element: { wordpress_id: { eq: $id } } }
    ) {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`
