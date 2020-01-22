import React from 'react'
import { Link } from 'gatsby'
const authorsCard = ({ display_name, img, slug, id}) => {
  return (
    <div key={id} className="column is-one-third-tablet is-one-quarter-widescreen  author-card-wrapper">
      <Link to={`/authors/${slug}`} className="author-card">
        <img src={img} alt={`${display_name}`}/>
        <div className="author-card-content">
          <h3 dangerouslySetInnerHTML={{
            __html: display_name
          }} />
          <span>Read more</span>
        </div>
      </Link>
    </div>
  )
}

export default authorsCard
