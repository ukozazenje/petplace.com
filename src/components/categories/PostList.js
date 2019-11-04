import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Card from './postCard'

export default class PostList extends Component {
  render() {
    const { posts, title } = this.props

    return (
      <>
        <div className="columns posts-list-container">
          {posts.map(({ node: post }) => (
            <div
              className="column is-one-third"
              key={post.id}
            >
              <Card post={post} />
            </div>
          ))}
        </div>
      </>
    )
  }
}



export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
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
  query {
    coverImage: file(
      relativePath: { regex: "post-bg.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
