import React from 'react'
import PetLoversImg from '../../images/about-us/pet-library.jpg'
import {Link} from 'gatsby'

const PetLoversSection = () => {
  return (
    <>
      <section className="section pet-lovers">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column">
              <h2>PetPlace: A Pet Lover’s Library</h2>
              <p>
                The PetPlace team has covered thousands and thousands of topics since its beginnings. You and your pets could spend days browsing and still find new areas to explore. Check out a small sample of the topics we’ve covered throughout the years:  
              </p>
              <ul>
                <li>Working from home with a dog or cat</li>
                <li>Choosing the perfect parrot</li>
                <li>Naming an Australian Shepherd or Scottish Terrier</li>
                <li>Caring for your cat’s teeth </li>
                <li>Picking out your first home aquarium</li>
                <li>Recognizing common pet safety hazards around the house</li>
                <li>Evaluating pet insurance plans </li>
                <li>Teaching dogs, cats, and children to play nice</li>
                <li>Helping a reptile get adequate exercise</li>
                <li>Becoming a veterinary technician or animal behaviorist</li>
                <li>Finding a pet sitter for your bird</li>
                <li>Understanding the difference between the two types of Corgis</li>
                <li>Keeping cats and dogs safe during extreme weather emergencies</li>
              </ul>
              <p>Take a look around PetPlace for yourself. If it flies, slithers, swims, or walks on four paws, chances are our team has covered it. </p>
              <Link to="/article/category/pet-care/" className="about-us-btn">Pet Care</Link>
              <Link to="/article/category/pet-health/" className="about-us-btn">Health and Wellness</Link>
              <Link to="/article/category/pet-behavior-training/" className="about-us-btn">Behavior and Training</Link>
            </div>
            <div className="column image-wrapper">
              <img src={PetLoversImg} alt="Pet lovers" />
            </div>
          </div>         
        </div>
        
      </section>
    </>
  )
}

export default PetLoversSection