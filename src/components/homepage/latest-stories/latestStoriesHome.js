import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import {categoryColor} from '../../functions'
const PopularPosts = (props) => {
  
  const {wordpressTtgPages} = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(wordpress_id: {eq: 6}) {
          acf {
            category_rows {
              category
              link
              posts {
                author_name
                link
                post_date
                post_title
                featured_image {
                  full {
                    source_url
                    alt_text
                    localFile {
                      childImageSharp {
                        fluid(maxHeight: 600) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              category_name
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
              <Img sizes={{ ...mainPost.featured_image.full.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(mainPost.featured_image.full.alt_text || 'post')} />
            </div>
            <div className="main-box-desktop-img">
              <Img sizes={{ ...mainPost.featured_image.full.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(mainPost.featured_image.full.alt_text || 'post')} />
            </div>
            <div className={`main-content ${categoryColor(category)}-transparent`}>
              <h3><Link to={mainPost.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>{mainPost.post_title}</Link></h3>
              <p className="date">{mainPost.post_date || 'no date'} ·  {(mainPost.author_name) || 'PetPlace.com'}</p>
            </div>
          </div>
        </div>
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child thumbnail-box flex-start">
            <Link to={firstPost.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>
              <Img fluid={(firstPost.featured_image.full.localFile.childImageSharp.fluid)} alt={(firstPost.featured_image.full.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
  objectPosition="50% 50%" />
            </Link>
            <div className="sub-content">
              <h3><Link to={firstPost.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>{firstPost.post_title}</Link></h3>
              <p className="date">{firstPost.post_date} ·  {firstPost.author_name}</p>
            </div>
          </div>
          <div className="tile is-child thumbnail-box flex-end">
            <Link to={secondPost.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>
              <Img fluid={(secondPost.featured_image.full.localFile.childImageSharp.fluid)} alt={(secondPost.featured_image.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
    objectPosition="50% 50%" />
            </Link>
            <div className="sub-content align-slef-start">
              <h3><Link to={secondPost.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')} >{secondPost.post_title}</Link></h3>
              <p className="date">{secondPost.post_date} ·  {secondPost.author_name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  console.log('Oppp', wordpressTtgPages.acf.category_rows)
  return (
    <section className="section latest-stories-section">
      <div className="container is-fullhd">
        <h1>Latest Stories</h1>
          {wordpressTtgPages.acf.category_rows.map((category_row) => {
            return (
              <div className="featured-categories">
                <h2>{category_row.category_name}</h2>
                {tills(category_row.posts, category_row.category_name)}
              </div>
            )
          })}
          
      </div>
    </section>
  )
}

export default PopularPosts