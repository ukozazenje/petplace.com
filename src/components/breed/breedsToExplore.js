import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image'
import { setBreedColor } from '../functions'
import {navigate} from 'gatsby'

const factsSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
}

const breedsToExplore = ({breeds_to_explore}) => {
  return (
    <section className="section breeds-to-explore-section">
      <div className="container is-fullhd">
        <h3>Other Breeds to Explore</h3>
        <Slider {...factsSettings}>
          {breeds_to_explore.map( (breed, index) => (
            <div className={`breeds_to_explore-slide`}>
              <div className="breeds_to_explore-content" onClick={ () => navigate(`/breed/${breed.slug}`)}>
                <Img sizes={{...breed.featured_img.localFile.childImageSharp.fluid, aspectRatio: 1/1}} />
                <div className={`breeds_to_explore-title ${setBreedColor(index)}`} dangerouslySetInnerHTML={{
                  __html: breed.post_title
                }} />
              </div>
            </div>
          ) )}
        </Slider>
      </div>
    </section>
  )
}

export default breedsToExplore
