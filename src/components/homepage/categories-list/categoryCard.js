import React from 'react'
import arrowImg from "../../../images/arrow.png"
import { Link } from "gatsby"

const CategoryCard = ({icon, link, title, text}) => {
  return (
    <Link to={link}>
      <div className="category-card">
        <div className="image-wrapper">
          <img src={icon} alt="icon" />
        </div>
        <div className="copy-wrapper">
          <h3>{title}</h3>
          <hr className="divider" />
          <p>{text}</p>
          <div className="read-more-btn"><img src={arrowImg} alt="read more" />Read more</div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
