import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const categoryRow = ({category, categories}) => {
  // console.log(categories[0].node.parent_element)
  return (
    <div className="featured-categories">
      <h2>{category && category[0] && category[0].node.categories[0].name}</h2>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child main-box">
          <Img sizes={{ ...category[0].node.featured_media.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }} alt={(category[0].node.featured_media && category[0].node.featured_media.alt_text) || 'post image'} className="main-img" />
            <div className="main-content">
              <h3><Link to={category[0].node.path}>{category[0].node.title}</Link></h3>
              <p className="date">{category[0].node.date} ·  {category[0].node.author.name}</p>
            </div>
          </div>
        </div>
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child thumbnail-box flex-start">
            <Link to={category[1].node.path}>
              <Img fluid={(category[1].node.featured_media && category[1].node.featured_media.localFile.childImageSharp.fluid)} alt={(category[1].node.featured_media && category[1].node.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
  objectPosition="50% 50%" />
            </Link>
            <div className="sub-content">
              <h3><Link to={category[1].node.path}>{category[1].node.title}</Link></h3>
              <p className="date">{category[1].node.date} ·  {category[1].node.author.name}</p>
            </div>
          </div>
          <div className="tile is-child thumbnail-box flex-end">
          <Link to={category[2].node.path}>
            <Img fluid={(category[2].node.featured_media && category[2].node.featured_media.localFile.childImageSharp.fluid)} alt={(category[2].node.featured_media && category[2].node.featured_media.alt_text) || 'post image'} className="thumbnail-img" objectFit="cover"
  objectPosition="50% 50%" />
          </Link>
            <div className="sub-content align-slef-start">
              <h3><Link to={category[2].node.path} >{category[2].node.title}</Link></h3>
              <p className="date">{category[2].node.date} ·  {category[2].node.author.name}</p>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default categoryRow
