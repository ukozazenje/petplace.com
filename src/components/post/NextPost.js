import React, {Component} from 'react'
import { Link, navigate } from 'gatsby'
import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import Img from 'gatsby-image'
import NoImg from '../../static/images/noNextPost'
class  NextPost extends Component {
  render(){
    const post = this.props.post
    return (
      <section  className="section next-post-section">
        <div className="container is-fullhd">
          <div className="nex-post">
            <h3>Next Article</h3>
            <Link to={post.path}>
              {
                post && post.featured_media && post.featured_media.source_url ?
                <img className="next-post-img" src={post.featured_media.source_url} alt="nex post" /> :
                <NoImg />
              }
            </Link>
            <Link to={post.categories[0].path}>
              <p>{post.categories[0].name.replace(/&amp;/g, '&')}</p>
            </Link>
            <Link to={post.path}>
              <h4>{post.title}</h4>
            </Link>
            <Link to={post.path} state={{ lastLocation: this.props.location }}>
              <img src={NextPostImg} alt="Next post" />
            </Link>
            <BottomScrollListener debounce={100} onBottom={ () => window.location.href = `${post.path}`} />
          </div>
        </div>
      </section>
    )
  }
}

export default NextPost
