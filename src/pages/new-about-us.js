import React from 'react'
import Layout from '../components/layout'
import AboutUsHero from '../components/about-us/AboutUsHero'
import PetLoversSection from '../components/about-us/PetLoversSection'
import JustForFunSection from '../components/about-us/JustForFunSection'
import PetCareTools from '../components/about-us/PetCareTools'
import PetPlaceTeam from '../components/about-us/PetPlaceTeam'
import ComunitySection from '../components/about-us/ComunitySection'
import ContactUsSection from "../components/homepage/contact-us"

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsHero />
      <PetLoversSection />
      <JustForFunSection />
      <PetCareTools />
      <PetPlaceTeam />
      <ComunitySection />
      <ContactUsSection />
    </Layout>
  )
}

export default AboutUs