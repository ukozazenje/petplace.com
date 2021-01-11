import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import NoImg from "../static/images/noPostImg"
import { categoryColor } from "../components/functions"
import Pagination from "../components/search/pagination"
import HeroSection from "../components/categories/categoryHero"
import SideBar from "../components/categories/sideBar"
import PopularPosts from "../components/categories/PopularPosts"
import Img from "gatsby-image"
import Seo from "../components/seo"
import logo from "../images/PPlogo.jpg"
import Helmet from "react-helmet"

class categoryTemplate extends Component {
  state = {
    posts: this.props.data.allWordpressPost.edges,
    currentPosts: [],
    currentPage: 1,
    totalPages: 0,
    limit: 18,
  }

  componentDidMount() {
    const { limit } = this.state
    this.setState({
      currentPosts: this.props.data.allWordpressPost.edges.slice(0, limit),
      currentPage: 1,
    })
  }

  handlePageChange = page => {
    const { posts, limit } = this.state
    const offset = (page - 1) * limit
    const currentPosts = posts.slice(offset, offset + limit)
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    })
    this.setState({
      currentPage: page,
      currentPosts,
    })
  }

  render() {
    console.log("Posts--->", this.props.data.allWordpressPost.edges)
    console.log(this.props.data.allWordpressCategory)
    const { limit, currentPage, posts } = this.state
    const total = posts.length
    return (
      <Layout>
        <Seo
          title={`${this.props.pageContext.cat_name} | Petplace`}
          description="PetPlace is the most comprehensive resource for pet information available on the web"
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
                "@id": "${process.env.GATSBY_WEB_SITE_URL}${this.props.pageContext.cat_path}"
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
        <HeroSection title={this.props.pageContext.cat_name} />
        <section className="section category-posts">
          <div className="container is-fullhd">
            <div className="columns categories-columns">
              <SideBar
                subcategories={this.props.data.allWordpressCategory.edges}
              />
              <div className="column">
                <div className="columns posts-list-container">
                  {this.state.currentPosts.map(({ node: post }) => (
                    <div className="column is-one-third" key={post.id}>
                      <div className="category-post-card">
                        <div className="card-img">
                          <Link to={post.path}>
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
                              <NoImg />
                            )}
                          </Link>
                          <Link
                            to={post.categories[0]["path"]}
                            className={`card-category ${categoryColor(
                              post.categories[0]["name"].replace(/&amp;/g, "&")
                            )}`}
                          >
                            {post.categories[0]["name"].replace(/&amp;/g, "&")}
                          </Link>
                        </div>
                        <div className="card-content">
                          <div className="card-title">
                            <h3>
                              <Link to={`${post.path}`}>
                                {post.title.replace(/&amp;/g, "&") || "title"}
                              </Link>
                            </h3>
                          </div>
                          <div className="card-author">
                            <span>{post.date || "date"} · </span>
                            <span>{post.author.name || "author"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pagination">
                    <Pagination
                      limit={limit}
                      total={total}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PopularPosts />
      </Layout>
    )
  }
}

export default categoryTemplate

export const testCategoryQuery = graphql`
  query TestCategory($id: Int!, $categories: [Int!]) {
    allWordpressPost(
      filter: {
        categories: { elemMatch: { wordpress_id: { in: $categories } } }
      }
    ) {
      edges {
        node {
          id
          content
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
