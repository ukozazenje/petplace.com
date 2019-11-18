import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {categoryColor} from '../functions'
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
    <div className="category-post-card">
      <div className="card-img">
        <Link to={`${post.path}`}>
          { post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp && post.featured_media.localFile.childImageSharp.fluid ?
            <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> :
            <Img sizes={{ ...data.placeholderImage.childImageSharp.fluid, aspectRatio: 4 / 3}} alt='post image' />
          }
        </Link>
        <Link to={post.categories && post.categories[0].path} className={`card-category ${categoryColor(post.categories && post.categories[0].name)}`}>
          {post.categories && post.categories[0].name.replace(/&amp;/g, '&')}
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
          <span>{post.date || 'date'}   ·  </span><span >{post.author ? post.author.name || 'author' : null }</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
