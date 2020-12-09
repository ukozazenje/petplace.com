import React from 'react'

const AboutUsHero = () => {
  return (
    <section className="section about-us-hero">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column image-wrapper">              
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/7tZdK2Qa1HQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>              
          </div>
          <div className="column">
            <h1>
              The Ultimate Destination for Pet Parents
            </h1>
            <p className="about-us-subheading">
              If you’re crazy about cats or passionate about pups, you’ve come to the right place. PetPlace is a fun and informative online community built by pet professionals, for pet lovers of all stripes and spots. Whether you’re looking for pet parenthood guides, animal news, or just cute pictures of four-legged friends from around the web, PetPlace has you covered. 
            </p>
            <p className="about-us-subheading">
              PetPlace was started by a veterinarian who wanted to create a one-stop-shop for all things furry, feathered, and scaled. Take a look around PetPlace and you’ll find expert insights written with the average pet lover in mind. You won’t need a veterinary dictionary to make your way through our library of pet-focused content, trust us. 
            </p>
          </div>
        </div>         
      </div>
    </section>
  )
}

export default AboutUsHero