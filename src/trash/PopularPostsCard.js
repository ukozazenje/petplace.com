import React from 'react'
import {Link} from 'gatsby'
import coverImg from '../images/post-bg.png'

const PopularPostCard = ({post}) => {
  return (
    <div className="popular-posts-card">
      <div className="card-img">
        <img src={coverImg} alt="coverImg" />
      </div>
      
      <div className="card-content">
        <div className="card-title">
          <div className="card-date">
            <span>{post.date}</span> |  <Link to={`${post.path}`}>{post.author && post.author.name || 'author name'}</Link>
          </div>
        </div>
        <div className="card-text">
          <h3>{post.title}</h3>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.excerpt
              .substring(0, 150)
              .replace(/<[^>]+>/g, "")
              .concat("[...]"),
          }}
        />
      </div>
    </div>
  )
}

export default PopularPostCard
