import React, {Component} from 'react'
import { Link } from 'gatsby'
import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import NoImg from '../../static/images/noNextPost'
import Img from 'gatsby-image'
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
              post && 
              post.featured_image && 
              post.featured_image.full && 
              post.featured_image.full.localFile && 
              post.featured_image.full.localFile.childImageSharp ? 
              <Img className="next-img" fixed={post.featured_image.full.localFile.childImageSharp.fixed} /> :
              <NoImg />
              }
            </Link>
            { post && post.category_path ?
              <Link to={post.category_path}>
                <p>{post.category.cat_name.replace(/&amp;/g, '&')}</p>
              </Link> :
              null
            }
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
