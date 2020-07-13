import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image'
import { setBreedColor } from '../functions'
import {navigate} from 'gatsby'
import NoImg from "../../static/images/noSearchPostImg"

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
        <h3>Related Breeds</h3>
        <Slider {...factsSettings}>
          {breeds_to_explore.map( (breed, index) => (
            <div className={`breeds_to_explore-slide`}>
              <div className="breeds_to_explore-content" onClick={ () => navigate(`/breed/${breed.slug}`)}>
                { breed && breed.featured_img && breed.featured_img.localFile && breed.featured_img.localFile.childImageSharp && breed.featured_img.localFile.childImageSharp.fluid ?  <Img sizes={{...breed.featured_img.localFile.childImageSharp.fluid, aspectRatio: 1/1}} /> : <NoImg />}
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
