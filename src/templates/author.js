import React, { Component } from 'react'
import Layout from '../components/layout'
import facebook from '../images/facebookIcon.svg'
import pintrest from '../images/pinterestIcon.svg'
import twitter from "../images/twitterIcon.svg"
import emailIcon from '../images/emailIcon.svg'
import { Link } from 'gatsby'
import PopularPosts from '../components/categories/PopularPosts'
import AuthorHeroImg from "../static/images/authorHeroImg"
import rightArrow from '../images/right-arrow-bc.svg';
import homeIcon from '../images/home_bread_crumb.svg';

class Author extends Component  {

  render(){
    const author = this.props.data.wordpressTtgUsers
    return (
      <Layout>
        <section className="section single-post post-hero-section">
          <div className="container is-fullhd">
            <div className="breadcrumbs">
              <Link to="/" className="home"><img src={homeIcon} alt="home" /></Link>
              <img className="divider" src={rightArrow} alt="right arrow"/>
              <Link to="/authors" className="category-link purple">Authors</Link>
              <img className="divider" src={rightArrow} alt="right arrow"/>
              <Link to={`/authors/${author.slug}`} className="category-link purple">{author.display_name}</Link>
            </div>
          </div>
        </section>
        <AuthorHeroImg authorImg={author.img} />
        <section className="section author-content">
          <div className="container is-fullhd">
            <div className="columns">
              <div className="column">
                <h1 dangerouslySetInnerHTML={{
                  __html: author.display_name
                }} />
                <div className="author-description" dangerouslySetInnerHTML={{
                  __html: author.description
                }} />
                <hr />
                <div className="share-icons-horizontal author-social-icons">
                  <p>Share:</p>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}/authors/${author.slug}`} target="_blank" rel="noopener noreferrer"><img src={facebook}  alt="facebook" /></a>
                  <a href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}/authors/${author.slug}`} target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="twitter" /></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/authors/${author.slug}&media=&description=${author.display_name}`} target="_blank" rel="noopener noreferrer"> <img src={pintrest}  alt="pinterest" /></a>
                  <a href={`mailto:info@petplace.com?&subject=${author.display_name}&body=${process.env.GATSBY_WEB_SITE_URL}/authors/${author.slug}`} target="_blank" rel="noopener noreferrer"><img src={emailIcon}  alt="email" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PopularPosts />
      </Layout>

    )
  }
}

export default Author

export const pageQuery = graphql`
  query AuthorPage($id: String!){
    wordpressTtgUsers(id: { eq: $id }) {
      id
      img
      display_name
      description
      slug
    }
  }
`

