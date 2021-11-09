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

const TagsPage = ({ pageContext, data }) => {
  return (
    <Layout>
      <Seo
        title={`${(pageContext && pageContext.tag_name) || " "} | Petplace`}
        description="PetPlace is the most comprehensive resource for pet information available on the web"
        image="/images/pet-health.jpg"
      />
      <HeroSection title={(pageContext && pageContext.tag_name) || " "} />
      <section className="section category-posts">
        <div className="container is-fullhd">
          <div className="columns categories-columns">
            <SideBar noSubcategory />
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

export default TagsPage

export const tagsQueryTemplate = graphql`
  query tagsQueryTemplate($limit: Int!, $skip: Int!, $slug: String!) {
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
