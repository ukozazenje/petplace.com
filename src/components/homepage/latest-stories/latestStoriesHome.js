import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { categoryColor } from "../../functions"
import BreedRow from "./breedRow"
import LatestVideos from "./latestVideos"
const PopularPosts = props => {
  const { wordpressTtgPages } = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(wordpress_id: { eq: 6 }) {
          acf {
            category_rows {
              category
              link
              path
              posts {
                author_name
                category_name
                category_path
                link
                path
                post_date
                post_title
                featured_image {
                  full {
                    source_url
                    alt_text
                    localFile {
                      childImageSharp {
                        fluid(maxHeight: 600, quality: 60) {
                          ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                      }
                    }
                  }
                }
              }
              category_name
            }
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
  // const filterCategories = (id, categories) => {
  //   const category = categories.edges.filter(({node:category}) => category.wordpress_id === id)
  //   return {
  //     name: category[0].node.name,
  //     path: category[0].node.path
  //   }
  // }

  // const filterPosts = (posts, allWordpressPost) => {
  //   const postIds = posts.map(el => el.post.wordpress_id )
  //   const filteredPosts = postIds.map((id) => {
  //     return allWordpressPost.edges.filter(({node: post}) => post.wordpress_id === id)
  //   })
  //   return filteredPosts
  // }
  // const acfPosts = wordpressPage.acf.category_rows
  // const posts = acfPosts.reduce((acc, acf) => {
  //   acc.push(
  //         {
  //           category: filterCategories(acf.category, allWordpressCategory),
  //           posts: filterPosts(acf.posts.filter((el, key) => { if(key < 3) { return el.post.wordpress_id}}), allWordpressPost)
  //         }
  //       )
  //   return acc
  // },[])

  const tills = (posts, category) => {
    const mainPost = posts[0]
    const firstPost = posts[1]
    const secondPost = posts[2]

    return (
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
                  ...mainPost.featured_image.full.localFile.childImageSharp
                    .fluid,
                  aspectRatio: 4 / 3,
                }}
                alt={mainPost.featured_image.full.alt_text || "post"}
              />
            </div>
            <div className="main-box-desktop-img">
              <Img
                sizes={{
                  ...mainPost.featured_image.full.localFile.childImageSharp
                    .fluid,
                  aspectRatio: 16 / 9,
                }}
                alt={mainPost.featured_image.full.alt_text || "post"}
              />
            </div>
            <div
              className={`main-content ${categoryColor(
                mainPost.category_name
              )}-transparent`}
            >
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
                fluid={
                  firstPost.featured_image.full.localFile.childImageSharp.fluid
                }
                alt={firstPost.featured_image.full.alt_text || "post image"}
                className="thumbnail-img"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </Link>
            <div className="sub-content">
              <Link
                className={`category-link-btn ${categoryColor(
                  firstPost.category_name
                )}`}
                to={firstPost.category_path}
                dangerouslySetInnerHTML={{
                  __html: firstPost.category_name,
                }}
              />
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
                fluid={
                  secondPost.featured_image.full.localFile.childImageSharp.fluid
                }
                alt={secondPost.featured_image.alt_text || "post image"}
                className="thumbnail-img"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </Link>
            <div className="sub-content align-slef-start">
              <Link
                className={`category-link-btn ${categoryColor(
                  secondPost.category_name
                )}`}
                to={secondPost.category_path}
                dangerouslySetInnerHTML={{
                  __html: secondPost.category_name,
                }}
              />
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
    )
  }
  return (
    <section className="section latest-stories-section">
      <div className="container is-fullhd">
        {/* <h2>Latest Stories</h2> */}
        {wordpressTtgPages.acf.category_rows.map((category_row, i) => {
          return (
            <div className="featured-categories" key={i}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: category_row.category_name,
                }}
              />
              {tills(category_row.posts, category_row.category_name)}
            </div>
          )
        })}
        <div className="featured-categories">
          <h3>Breed Guide</h3>
          <BreedRow />
        </div>
        <LatestVideos />
      </div>
    </section>
  )
}

export default PopularPosts
