import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SeoImage from '../images/advertise-home.jpg'
// import HeroImage from '../images/travel-guide/travel-guide-hero.png'
import Icon from '../images/travel-guide/paw.svg'
import CardImage from '../images/travel-guide/bg.jpg'
import ArrowIcon from '../images/travel-guide/arrow.svg'
import CaliforniaImg from '../static/images/travel-guide/CaliforniaImg'
import ChicagoImg from '../static/images/travel-guide/ChicagoImg'
import NewEngland from '../static/images/travel-guide/NewEngland'
import NewYorkImg from '../static/images/travel-guide/NewYorkImg'
import ColoradoImg from '../static/images/travel-guide/ColoradoImg'
import FloridaImg from '../static/images/travel-guide/FloridaImg'
import SouthCarolinaImg from '../static/images/travel-guide/SouthCarolinaImg'
import TravelGuideCard from '../components/travelGuideCard'
import HeroImage from '../static/images/travel-guide/HeroImg'
const californiaCities = [
  'Northern California' , 'San Francisco' , 'Silicon Valley' , 'California Coast Towns' , 'Los Angeles' , 'San Diego'
]
const coloradoCities = [
  'Northern Colorado', 'Denver', 'Colorado Springs', 'Denver Area-Ski Towns','Telluride'
]
const floridaCities = [
  'Gulf Coast' , 'Greater Orlando Area' , 'Greater Palm Beach Area' , 'Miami & Ft. Lauderdale' , 'Florida Keys'
]
const newEnglandCities = [
  'Maine' , 'Vermont' , 'New Hampshire' , 'Massachusetts' , 'Connecticut' , 'Rhode Island'
]

const newYorkCities = [
  'New York City' , 'Lower Hudson Valley & Long Island' , 'Upstate New York'
]
const southCarolinaCities = [
  'Myrtle Beach' , 'Columbia' , 'Charleston' , 'Aiken' , 'Hilton Head & Bluffton'
]
const Advertise = () => {
  return (
    <Layout>
      <SEO  
        title="Advertise With Us - Petplace" 
        description="Our brand partnerships provide businesses with a wonderful opportunity to position themselves as thought leaders, innovators, experts, and go-to resources for our diverse audience of pet parents. Together, we can craft thoughtful, engaging content that captures our audience’s attention and yields new customers." 
        image={SeoImage} 
      />
      <section className="section travel-guide-hero-section">
        <div className="container is-fullhd">
          <div className="hero-content-wrapper">
            <div className="hero-content-heading">
              <h1>A Pet-Friendly Travel Guide For the U.S.</h1>
            </div>
            {/* <img src={HeroImage} alt="hero image" /> */}
            <HeroImage />
          </div>
        </div>
      </section>
      <section className="section travel-guide-intro-section">
        <div className="container is-fullhd">
          <div className="travel-guide-intro-wrapper">
            <p>If you’ve been daydreaming about taking a road trip lately, you’re not alone; since U.S. air travel has decreased by nearly 70% since last year as a result of the pandemic, those looking for an escape have had to take to the roads. Car trips are an especially great way for pet parents to travel, as public transportation has stringent rules and regulations about traveling with animals.</p>
            <p>If you’re in need of a getaway this year, consider traveling to one of these tourist-friendly areas, all of which have wonderful attractions and accommodations geared towards your best pet pals and furry friends.</p>
          </div>
        </div>
      </section>

      <TravelGuideCard 
      title="California" 
      cities={californiaCities}
      cityImage={<CaliforniaImg />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-california/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="Chicago" 
      cities={false} 
      cityImage={<ChicagoImg />} 
      className="blue-gradient"
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-chicago/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="Colorado" 
      cities={coloradoCities} 
      cityImage={<ColoradoImg />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-colorado/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="Florida" 
      cities={floridaCities} 
      cityImage={<FloridaImg />} 
      className="blue-gradient"
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-florida/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="New England" 
      cities={newEnglandCities} 
      cityImage={<NewEngland />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-new-england/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="New York" 
      cities={newYorkCities} 
      cityImage={<NewYorkImg />} 
      className="blue-gradient"
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-new-york/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="South Carolina" 
      cities={southCarolinaCities} 
      cityImage={<SouthCarolinaImg />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-south-carolina/"
      >
        <p>California is perhaps one of the largest and most diverse states when it comes to the climate, landscapes, and attractions. The 'Golden State' boasts giant redwoods, cozy Pacific beach towns, Hollywood glamour, and sunny San Diego surf--definitely something for everyone and their pets.</p>
      </TravelGuideCard>

    </Layout>
  )
}

export default Advertise