import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
const PopularPosts = (props) => {
  
  const {allWordpressPost, wordpressPage, allWordpressCategory} = useStaticQuery(
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
    // console.log(filteredPosts)
    return filteredPosts
  }
  const acfPosts = wordpressPage.acf.category_rows
  const posts = acfPosts.reduce((acc, acf) => {
    acc.push(
          {
            category: filterCategories(acf.category, allWordpressCategory),
            posts: filterPosts(acf.posts.filter((el, key) => { if(key < 3) { return el.post.wordpress_id}}), allWordpressPost)
            // posts: filterPosts(acf, allWordpressPost)
          }
        )
    return acc
  },[])
  
  const tileParent = (post) => (
    <div className="tile is-parent">
      <div className="tile is-child main-box">
        <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(post.featured_media.alt_text || 'post')} />
        <div className="main-content">
          <h3><Link to={post.path}>{post.title}</Link>Zeko</h3>
          <p className="date">{post.date || 'no date'} ·  {(post.author && post.author.name) || 'PetPlace.com'}</p>
        </div>
      </div>
    </div>
  )

  const tillChild = (key, post) => {
    switch (key) {
      case 1:
        return (
          <div className="tile is-child thumbnail-box flex-start">
            <Link to={post.path}>
              <Img fluid={(post.featured_media.localFile.childImageSharp.fluid)} alt={(post.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
  objectPosition="50% 50%" />
            </Link>
            <div className="sub-content">
              <h3><Link to={post.path}>{post.title}</Link></h3>
              <p className="date">{post.date} ·  {post.author.name}</p>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="tile is-child thumbnail-box flex-end">
            <Link to={post.path}>
              <Img fluid={(post.featured_media.localFile.childImageSharp.fluid)} alt={(post.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
    objectPosition="50% 50%" />
            </Link>
            <div className="sub-content align-slef-start">
              <h3><Link to={post.path} >{post.title}</Link></h3>
              <p className="date">{post.date} ·  {post.author.name}</p>
            </div>
          </div>
        )
    
      default: return null
    }
  }

  const tills = (posts) => {
    const mainPost = posts[0][0].node
    const firstPost = posts[1][0].node
    const secondPost = posts[2][0].node
    
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child main-box">
            <Img sizes={{ ...mainPost.featured_media.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(mainPost.featured_media.alt_text || 'post')} />
            <div className="main-content">
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
            </Link>
            <div className="sub-content">
              <h3><Link to={firstPost.path}>{firstPost.title}</Link></h3>
              <p className="date">{firstPost.date} ·  {firstPost.author.name}</p>
            </div>
          </div>
          <div className="tile is-child thumbnail-box flex-end">
            <Link to={secondPost.path}>
              <Img fluid={(secondPost.featured_media.localFile.childImageSharp.fluid)} alt={(secondPost.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
    objectPosition="50% 50%" />
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
  // const featuredPost = wordpressPage.acf.featured_posts.map((el) => el.featured_post.post_name)
  // const popularPosts = allWordpressPost.edges.filter(({node:post}) => featuredPost.includes(post.slug) )
  console.log('posts', posts)
  return (
    <section className="section latest-stories-section">
      <div className="container is-widescreen">
        <h1>Latest Stories</h1>
          {posts.map((post) => {
            // console.log(post.posts.map(el => el[0].node))
            
            return (
              <div className="featured-categories">
                <h2>{post.category.name}</h2>
                {tills(post.posts)}
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default PopularPosts

