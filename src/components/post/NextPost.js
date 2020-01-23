import React, {Component} from 'react'
import { Link } from 'gatsby'
// import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import NoImg from '../../static/images/noNextPost'
import Img from 'gatsby-image'
class  NextPost extends Component {
  render(){
    const post = this.props.post
    const nextPostImg = this.props.nextPostImg
    // console.log(nextPostImg)
    return (
      <section className="section next-post-section">
        <div className="container is-fullhd">
          <div className="nex-post">
            <h3>Next Article</h3>
            <Link to={post.path}>
              {
                nextPostImg && 
                nextPostImg.featured_img &&
                nextPostImg.featured_img.localFile && 
                nextPostImg.featured_img.localFile.childImageSharp ? 
                <Img className="next-img" fixed={nextPostImg.featured_img.localFile.childImageSharp.fixed} /> :
                <NoImg />
              }
            </Link>
            { post && post.categories && post.categories[0] && post.categories[0].path ?
              <Link to={post.categories[0].path}>
                <p>{post.categories[0].name.replace(/&amp;/g, '&')}</p>
              </Link> :
              null
            }
            <Link to={post.path}>
              <h4 dangerouslySetInnerHTML={{
                __html: post.title
              }} /> 
            </Link>
            <Link to={post.path} state={{ lastLocation: this.props.location }}>
              <img src={NextPostImg} alt="Next post" />
            </Link>
            {/* <BottomScrollListener debounce={300} onBottom={ () => window.location.href = `${post.path}`} /> */}
          </div>
        </div>
      </section>
    )
  }
}

export default NextPost