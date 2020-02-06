import React, {Component} from 'react'
import { Link } from 'gatsby'
// import BottomScrollListener from 'react-bottom-scroll-listener'
import NextPostImg from "../../images/next-post.png"
import NoImg from '../../static/images/noNextPost'
import Img from 'gatsby-image'
class  NextPost extends Component {
  render(){
    const post = this.props.post.node
    const nextPostImg = this.props.nextPostImg
    return (
      <section className="section next-post-section">
        <div className="container is-fullhd">
          <div className="nex-post">
            <h3>Next Article</h3>
            <Link to={post.path}>
              {
                nextPostImg &&
                nextPostImg.localFile && 
                nextPostImg.localFile.childImageSharp ? 
                <Img className="next-img" fixed={nextPostImg.localFile.childImageSharp.fixed} /> :
                <NoImg />
              }
            </Link>
            { post && post.categories && post.categories[0] && post.categories[0].path ?
              <Link to={post.categories[0].path}>
                <p dangerouslySetInnerHTML={{
                  __html:post.categories[0].name
                }} />
              </Link> :
              null
            }
            <Link to={post.path}>
              <h4 dangerouslySetInnerHTML={{
                __html: post.title
              }} /> 
            </Link>
            <Link to={post.path}>
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