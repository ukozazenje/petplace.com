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


const MobileSlider = () => {
  return (
    <section className="section care-section mobile-care-section">
      <div className="container is-fullhd">
        <h3>Akita Inu Care</h3>
        <Slider {...mobile_settings}>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={nutritionImg} />
              </div>
              <p>Nutrition</p>
            </div>
            <div className="mobile-slider-content">
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div>
          <div className="care-slider">
            <div className={`care-card `}>
              <div className="image-wrapper">
                <img src={groomingImg} />
              </div>
              <p>Grooming</p>
            </div>
            <div className="mobile-slider-content">
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={healthImg} />
              </div>
              <p>Health</p>
            </div>
            <div className="mobile-slider-content">
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={trainingImg} />
              </div>
              <p>Training</p>
            </div>
            <div className="mobile-slider-content">
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div>
          <div className="care-slider">
            <div className="care-card">
              <div className="image-wrapper">
                <img src={exerciseImg} />
              </div>
              <p>Exercise</p>
            </div>
            <div className="mobile-slider-content">
              <p>The Shiba Inu has a compact build. The standard Shiba should look like a small Akita. They stand 13.5-15.5 inches tall and weigh 20-30 pounds.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default MobileSlider
