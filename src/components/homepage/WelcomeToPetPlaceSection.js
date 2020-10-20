import React from 'react'
import CardImg from '../../images/welcome-section-img-1.png'
import CardImgBig from '../../images/welcome-to-petplace/desktop/what_youll_find_at_petplace.jpg'
import TeamIcon from '../../images/welcome-to-petplace/icons/1.svg'
import HomeIcon from '../../images/welcome-to-petplace/icons/2.svg'
import FunIcon from '../../images/welcome-to-petplace/icons/3.svg'
import FindIcon from '../../images/welcome-to-petplace/icons/4.svg'
import ToolsIcon from '../../images/welcome-to-petplace/icons/5.svg'

import WelcomeCard from './WelcomeCard'
import WhatYouFindImage from '../../static/images/welcome-section-images/WhatYouFind'
import HomeImage from '../../static/images/welcome-section-images/HomeImage'
import ToolsImage from '../../static/images/welcome-section-images/ToolsImage'
import JustForFunImage from '../../static/images/welcome-section-images/JustForFun'
import TheTeamImage from '../../static/images/welcome-section-images/TheTeamImage'
const WelcomeToPetPlaceSection = () => {
  return (
    <section className="section welcome-section">
      <div className="container is-fullhd">
        <div className="welcome-section-heading-wrapper">
          <h1>Welcome to <span className="highlight">PetPlace</span></h1>
          <p className="welcome-section-paragraph">
          This is a community built by pet professionals for animal lovers. PetPlace was created by a veterinarian to provide pet owners with informative content presented in a friendly manner. If you love your pet, and want to help it enjoy a happy life, stick around! You’ll find great information, advice, and insights here. We think you’ll have some fun as well!
          </p>
        </div>
        <div className="welcome-sections-cards-wrapper">
          <WelcomeCard image={<TheTeamImage />} icon={TeamIcon} title="The PetPlace Team" >
            <p>When you’re worried about your pet, you want expert advice. That's why every article posted on PetPlace is written by a pet expert or enthusiast, including veterinarians, vet techs, trainers, and breeders. When it comes to your pet’s health and well-being, we know you want advice that you can trust. Best of all, we provide all of this information free of charge. Think of us as your online pet-care consultant.</p>
          </WelcomeCard>
          <WelcomeCard image={<HomeImage />} icon={HomeIcon} title="A Home for All Pet Lovers" >
            <p>We’re crazy about cats and passionate about pups, just like you! We’re also smitten with sugar gliders, mad about mice, and fascinated by fish. That’s why we welcome pet lovers of every stripe and spot. If you love your pet, we want to help you get the information that you need. That’s why you can find tips on cats, dogs, and other small pets right here.</p>
          </WelcomeCard>
          <WelcomeCard image={<ToolsImage />} icon={ToolsIcon} title="Tools and Resources" >
            <p>If you need help, we have resources that you can use right now. One of these is our drug library. Here, you can learn about some of the most common medications for pets. Keep in mind, no medication should be administered to your pet without approval from your veterinarian.</p>
            <p>Is a trip to the vet in order? Check out our helpful vet locator! We’ll map out the vets closest to you, so that you can have your pet feeling better in no time.</p>
          </WelcomeCard>
          <div className="welcome-section-card big">
            <WhatYouFindImage />
            <div className="welcome-section-card-wrapper">
              <div className="welcome-section-card-icon-wrapper">
                <img src={FindIcon} alt="team icon" />
                <h3>What You’ll Find at PetPlace</h3>
              </div>
              <div className="welcome-section-card-content">
                <p>Take some time to explore our site, and you’ll find a wide variety of pet-related information. We cover topics including pet health, finding the perfect pet, animal care, and even choosing the right name for your beloved animal companion. Here are just a few of the questions we hope to answer for you.</p>
                <div className="welcome-section-card-content-list-wrapper">
                  <ul>
                    <li>Does my pet need health insurance?</li>
                    <li>How do I get a job working with pets?</li>
                    <li>What breed of dog is best for my lifestyle?</li>
                    <li>How do I care for my pet’s teeth?</li>
                    <li>What if my pet is unhappy?</li>
                    <li>What do I need to keep my new puppy happy?</li>
                  </ul>
                  <ul>
                    <li>How do I know if my cat likes me?</li>
                    <li>Are pets safe around pregnant women?</li>
                    <li>How do I make a safe home for my hamster?</li>
                    <li>When can I use a home remedy and when should I call the vet?</li>
                    <li>Am I ready to own a snake?</li>
                    <li>How do I fix naughty dog behavior?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <WelcomeCard image={<JustForFunImage />} icon={FunIcon} title="Finally: Just For Fun" >
            <p className="m-20">Having a pet should be fun. That’s why we’ve dedicated a portion of our website to light-hearted content. This is where you can find reader stories, reviews of great products, celebrity pet info, articles for kids, and silly pictures and videos.</p>
            <p>Want to tell us about your pet or share a helpful tip? Reach out at info@petplace.com or connect with us on Facebook and Instagram.</p>
          </WelcomeCard>
        </div>
      </div>
    </section>
  )
}

export default WelcomeToPetPlaceSection
