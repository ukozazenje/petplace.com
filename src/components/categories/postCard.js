import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import coverImg from '../image'
import Img from 'gatsby-image'

const PostCard = ({post}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "no-img.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to={`${post.path}`} className="category-post-card">
      <div className="card-img">
        <Img fluid={(post.featured_media && post.featured_media.localFile.childImageSharp.fluid) || data.placeholderImage.childImageSharp.fluid} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'} />
        <Link to={post.categories && post.categories[0].path} className="card-category">
          {post.categories && post.categories[0].name}
        </Link>
      </div>
      
      <div className="card-content">
        <div className="card-title">
          <h3>
            <Link to={`${post.path}`}>
            {post.title}
            </Link>
          </h3>
        </div>
        <div className="card-author">
          <span>{post.date || 'date'}   ·  </span><span >{post.author && post.author.name || 'author' }</span>
        </div>
      </div>
    </Link>
  )
}

export default PostCard