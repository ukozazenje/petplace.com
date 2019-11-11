import React, {Component} from 'react'
import { Link, navigate } from 'gatsby'
import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import Img from 'gatsby-image'
import NoImg from '../../static/images/noNextPost'
class  NextPost extends Component {
  render(){
    return (
      <section  className="section next-post-section">
        <div className="container is-fullhd">
          {this.props.posts.map(({ node: post }) => (
            <div className="nex-post">
              <h3>Next Article</h3>
              <Link to={post.path}>
                {
                  post.featured_media && post.featured_media.localFile.childImageSharp ?
                  <Img fixed={post.featured_media.localFile.childImageSharp.fixed} alt="" className="next-post-img" /> :
                  <NoImg />
                }
              </Link>
              <Link to={post.categories[0].path}>
                <p>{post.categories[0].name}</p>
              </Link>
              <Link to={post.path}>
                <h4>{post.title}</h4>
              </Link>
              <Link to={post.path} state={{ lastLocation: this.props.location }}>
                <img src={NextPostImg} alt="Next post" />
              </Link>
              <BottomScrollListener debounce={100} onBottom={ () => window.location.href = `${post.path}`} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default NextPost
