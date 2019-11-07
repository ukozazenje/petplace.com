import React from 'react'
import HeroImg from './images/heroImage'

const categoryHero = ({title}) => {
  return (
    <section className="hero-section">
      <HeroImg />
      <div className="hero-title">
        <div className="container is-widescreen"> 
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default categoryHero
