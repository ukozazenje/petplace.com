import React from 'react'
import {categoryColor, categoryImage} from '../functions'
const categoryHero = ({title}) => {
  return (
    <section className="hero-section">
     { categoryImage(title)}
      <div className={`hero-title ${categoryColor(title)}-transparent`}>
        <div className="container is-fullhd category-title"> 
          <h1>{title.replace(/&amp;/g, '&')}</h1>
        </div>
      </div>
    </section>
  )
}

export default categoryHero