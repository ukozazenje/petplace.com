import React from 'react'
import { Link, navigate } from 'gatsby'
import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import Img from 'gatsby-image'

const NextPost = ({posts}) => {
  return (
    <section  className="section next-post-section">
      <div className="container is-widescreen">
      
        {posts.map(({ node: post }) => (
          <div className="nex-post">
            <h3>Next Aticle</h3>
            <Link to={post.path}>
              <Img fixed={post.featured_media.localFile.childImageSharp.fixed} alt="" className="next-post-img" />
            </Link>
            <Link to={post.categories[0].path}>
              <p>{post.categories[0].name}</p>
            </Link>
            <Link to={post.path}>
              <h4>{post.title}</h4>
            </Link>
            <Link to={post.path} >
              <img src={NextPostImg} alt="Next post" />
            </Link>
            <BottomScrollListener onBottom={() => navigate(`${post.path}`)} /> 
          </div>
        ))}
      </div>
    </section>
  )
}

export default NextPost
