import React from 'react'
import arrowImg from "../../../images/arrow.png"
import { Link } from "gatsby"

const CategoryCard = ({icon, link, title, text}) => {
  return (
    <Link to={link} >
      <div className="category-card">
        <div className="image-wrapper">
          <img src={icon} alt="icon" />
        </div>
        <h3><Link to={link}>{title}</Link></h3>
        <hr className="divider" />
        <p>{text}</p>
        <Link to={link} className="read-more-btn"><img src={arrowImg} alt="read more" />Read more</Link>
      </div>
    </Link>
  )
}

export default CategoryCard
