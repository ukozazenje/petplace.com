import React from 'react'
import HomeHeroImg from '../../static/images/categoryHeroImg'
import TabletHeroImg from '../../static/images/tabletCategoryHeroImg'
import MobileHeroImg from '../../static/images/mobileCategoryHeroImg'
import {categoryColor} from '../functions'
const categoryHero = ({title}) => {
  return (
    <section className="hero-section">
      <div className="desktop-img">
          <HomeHeroImg />
        </div>
        <div className="tablet-img">
          <TabletHeroImg />
        </div>
        <div className="mobile-img">
          <MobileHeroImg />
        </div>
      <div className={`hero-title ${categoryColor(title)}-transparent`}>
        <div className="container is-fullhd category-title"> 
          <h1>{title.replace(/&amp;/g, '&')}</h1>
        </div>
      </div>
    </section>
  )
}

export default categoryHero