import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import {categoryColor} from '../../functions'
const PopularPosts = (props) => {
  
  const {allWordpressPost, wordpressPage, allWordpressCategory, placeholderImage} = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: {eq: "home"}) {
          acf {
            category_rows {
              category
              posts {
                post {
                  post_title
                  post_name
                  wordpress_id
                }
              }
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
              path
              name
              wordpress_id
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              id
              title
              excerpt
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
              }
              featured_media {
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
        }
        placeholderImage: file(relativePath: { eq: "no-img.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const filterCategories = (id, categories) => {
    const category = categories.edges.filter(({node:category}) => category.wordpress_id === id)
    return {
      name: category[0].node.name,
      path: category[0].node.path
    }
  }

  const filterPosts = (posts, allWordpressPost) => {
    const postIds = posts.map(el => el.post.wordpress_id )
    const filteredPosts = postIds.map((id) => {
      return allWordpressPost.edges.filter(({node: post}) => post.wordpress_id === id)
    })
    return filteredPosts
  }
  const acfPosts = wordpressPage.acf.category_rows
  const posts = acfPosts.reduce((acc, acf) => {
    acc.push(
          {
            category: filterCategories(acf.category, allWordpressCategory),
            posts: filterPosts(acf.posts.filter((el, key) => { if(key < 3) { return el.post.wordpress_id}}), allWordpressPost)
          }
        )
    return acc
  },[])
  
  const tills = (posts, category) => {
    const mainPost = posts[0][0].node
    const firstPost = posts[1][0].node
    const secondPost = posts[2][0].node
    
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child main-box">
            <div className="main-box-mobile-img">
              { (mainPost.featured_media && mainPost.featured_media.localFile && mainPost.featured_media.localFile.childImageSharp.fluid) ?
                <Img sizes={{ ...mainPost.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(mainPost.featured_media.alt_text || 'post')} /> :
                <Img sizes={{ ...placeholderImage.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(mainPost.featured_media.alt_text || 'post')} />
              }
            </div>
            <div className="main-box-desktop-img">
              { (mainPost.featured_media && mainPost.featured_media.localFile && mainPost.featured_media.localFile.childImageSharp.fluid) ?
                <Img sizes={{ ...mainPost.featured_media.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(mainPost.featured_media.alt_text || 'post')} /> :
                <Img sizes={{ ...placeholderImage.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(mainPost.featured_media.alt_text || 'post')} />
              }
            </div>
            <div className={`main-content ${categoryColor(category)}-transparent`}>
              <h3><Link to={mainPost.path}>{mainPost.title}</Link></h3>
              <p className="date">{mainPost.date || 'no date'} ·  {(mainPost.author && mainPost.author.name) || 'PetPlace.com'}</p>
            </div>
          </div>
        </div>
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child thumbnail-box flex-start">
            <Link to={firstPost.path}>
              <Img fluid={(firstPost.featured_media.localFile.childImageSharp.fluid)} alt={(firstPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
  objectPosition="50% 50%" />
              { (firstPost.featured_media && firstPost.featured_media.localFile && firstPost.featured_media.localFile.childImageSharp.fluid) ?
                <Img fluid={(firstPost.featured_media.localFile.childImageSharp.fluid)} alt={(firstPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover" objectPosition="50% 50%" /> :
                <Img fluid={(placeholderImage.childImageSharp.fluid)} alt={(firstPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover" objectPosition="50% 50%" /> 
              }
            </Link>
            <div className="sub-content">
              <h3><Link to={firstPost.path}>{firstPost.title}</Link></h3>
              <p className="date">{firstPost.date} ·  {firstPost.author.name}</p>
            </div>
          </div>
          <div className="tile is-child thumbnail-box flex-end">
            <Link to={secondPost.path}>
              { (secondPost.featured_media && secondPost.featured_media.localFile && secondPost.featured_media.localFile.childImageSharp.fluid) ?
                <Img fluid={(secondPost.featured_media.localFile.childImageSharp.fluid)} alt={(secondPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover" objectPosition="50% 50%" /> :
                <Img fluid={(placeholderImage.childImageSharp.fluid)} alt={(secondPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover" objectPosition="50% 50%" /> 
              }
            </Link>
            <div className="sub-content align-slef-start">
              <h3><Link to={secondPost.path} >{secondPost.title}</Link></h3>
              <p className="date">{secondPost.date} ·  {secondPost.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <section className="section latest-stories-section">
      <div className="container is-fullhd">
        <h1>Latest Stories</h1>
          {posts.map((post) => {
            return (
              <div className="featured-categories">
                <h2>{post.category.name}</h2>
                {tills(post.posts, post.category.name)}
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default PopularPosts

