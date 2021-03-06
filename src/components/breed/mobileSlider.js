import React from 'react'
import Slider from "react-slick"
import exerciseImg from '../../images/exercise.png'
import groomingImg from '../../images/grooming.png'
import healthImg from '../../images/health.png'
import nutritionImg from '../../images/nutrition.png'
import trainingImg from '../../images/training.png'


const mobile_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const MobileSlider = ({nutrition, grooming, health, training, exercise, nutrition_title, grooming_title, health_title, training_title, exercise_title}) => {
  return (
    <section className="section care-section mobile-care-section">
      <div className="container is-fullhd">
        <h3>Care</h3>
        <Slider {...mobile_settings}>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={nutritionImg} />
              </div>
              <p>{`${nutrition_title || 'Nutrition'}`}</p>
            </div>
            <div className="mobile-slider-content" dangerouslySetInnerHTML={{
              __html: nutrition
            }}
             />
          </div>
          <div className="care-slider">
            <div className={`care-card `}>
              <div className="image-wrapper">
                <img src={groomingImg} />
              </div>
              <p>{`${grooming_title || 'Grooming'}`}</p>
            </div>
            <div className="mobile-slider-content" dangerouslySetInnerHTML={{
              __html: grooming
            }}
             />
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={healthImg} />
              </div>
              <p>{`${health_title || 'Health'}`}</p>
            </div>
            <div className="mobile-slider-content" dangerouslySetInnerHTML={{
              __html: health
            }}
             />
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={trainingImg} />
              </div>
              <p>{`${training_title || 'Training'}`}</p>
            </div>
            <div className="mobile-slider-content" dangerouslySetInnerHTML={{
              __html: training
            }}
             />
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={exerciseImg} />
              </div>
              <p>{`${exercise_title || 'Exercise'}`}</p>
            </div>
            <div className="mobile-slider-content" dangerouslySetInnerHTML={{
              __html: exercise
            }}
             />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default MobileSlider
