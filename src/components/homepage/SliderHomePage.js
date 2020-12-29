import React from 'react'
import Slider from "react-slick"
import catImgSliderMob from '../../images/homepage-slider/cat-slide-mobile.jpg'
import catImgSliderTab from '../../images/homepage-slider/cat-slide-tablet.jpg'
import catImgSliderDesk from '../../images/homepage-slider/cat-slide-desktop.jpg'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const SliderHomePage = () => {
  return (    
    <Slider {...settings}>
      <div className="slider-container">
        <span className="slider-overlay"></span>
        <div className="image-wrapper">
          <picture>
              <source srcset={catImgSliderDesk} media="(min-width: 769px)" />
              <source srcset={catImgSliderTab} media="(min-width: 440px)" />
              <img src={catImgSliderMob} alt="Some picture" />
          </picture>          
        </div>
        <div className="text-wrapper">
          <div className="text-content">
            <h1>Cats are Friendlier Than You Think</h1>
            <a class="read-more-btn" href="#"><img class="arrow-ico" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxOSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNi41SDE4TTE4IDYuNUwxMi40MzQ4IDFNMTggNi41TDEyLjQzNDggMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Arrow Icon" />Read More</a>
          </div>          
        </div>
      </div>
      <div className="slider-container">
        <span className="slider-overlay"></span>
        <div className="image-wrapper">
          <picture>
              <source srcset={catImgSliderDesk} media="(min-width: 769px)" />
              <source srcset={catImgSliderTab} media="(min-width: 440px)" />
              <img src={catImgSliderMob} alt="Some picture" />
          </picture>
        </div>
        <div className="text-wrapper">
          <div className="text-content">
            <h1>Cats are Friendlier Than You Think</h1>
          </div>          
        </div>
      </div>
    </Slider>
  )
}

export default SliderHomePage
