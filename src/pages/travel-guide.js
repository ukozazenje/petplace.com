import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SeoImage from '../images/travel-guide/hero-image.png'
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
        title="Travel Guide - Petplace" 
        description="If you’re in need of a getaway this year, consider traveling to one of these tourist-friendly areas, all of which have wonderful attractions and accommodations geared towards your best pet pals and furry friends."
        image={SeoImage} 
      />
      <section className="section travel-guide-hero-section">
        <div className="container is-fullhd">
          <div className="hero-content-wrapper">
            <div className="hero-content-heading">
              <h1>A Pet-Friendly Travel Guide For the U.S.</h1>
            </div>
            <HeroImage />
          </div>
        </div>
      </section>
      <section className="section travel-guide-intro-section">
        <div className="container is-fullhd">
          <div className="travel-guide-intro-wrapper">
            <p>If you’ve been daydreaming about taking a road trip lately, you’re not alone; since U.S. air travel <a href="https://www.tsa.gov/coronavirus/passenger-throughput" target="_blank" rel="noopener noreferrer" >has decreased by nearly 70% since last year</a> as a result of the pandemic, those looking for an escape have had to take to the roads. Car trips are an especially great way for pet parents to travel, as public transportation has stringent rules and regulations about traveling with animals.</p>
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
      <p>The Windy City has a lot to offer pet parents. As a city filled with art, attractions, and great food, Chicago is an ideal destination for pets (and their people). Visit in the warmer months and you can take advantage of the beaches of Lake Michigan, as well as boat tours that can accommodate pets.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="Colorado" 
      cities={coloradoCities} 
      cityImage={<ColoradoImg />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-colorado/"
      >
      <p>Although this state is landlocked, Colorado has a lot to offer adventurers who love the outdoors. From winter ski getaways to the bustling downtown of Denver and Colorado Springs, Colorado truly has something for everyone and their best pet pals.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="Florida" 
      cities={floridaCities} 
      cityImage={<FloridaImg />} 
      className="blue-gradient"
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-florida/"
      >
      <p>The Sunshine State has an abundance of beaches, attractions, restaurants, and nightlife, all of which can accommodate pets. With all it has to offer, Florida is a perfect road trip destination for anyone looking to get away with their pet.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="New England" 
      cities={newEnglandCities} 
      cityImage={<NewEngland />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-new-england/"
      >
      <p>Great to visit in any season, New England is known for the incredible natural beauty of fall foliage, winter ski resorts, and outdoor adventure hikes in spring and summer. Whether you choose to hit up just one state in this region, or many, you can’t go wrong with choosing this destination for a road trip with your furry friend.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="New York" 
      cities={newYorkCities} 
      cityImage={<NewYorkImg />} 
      className="blue-gradient"
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-new-york/"
      >
      <p>Whether you want to check out the hustle and bustle of The Big Apple, take in the beaches in the Hamptons, or enjoy the scenic hiking trails upstate, New York has a lot to offer visitors--and their pet pals. Be sure to consider New York for your next adventure with your pet.</p>
      </TravelGuideCard>

      <TravelGuideCard 
      title="South Carolina" 
      cities={southCarolinaCities} 
      cityImage={<SouthCarolinaImg />} 
      link="/article/dogs/just-for-fun/pet-friendly-travel-guide-south-carolina/"
      >
      <p>South Carolina is the perfect mix of southern charm, history, and beach getaways. Whether you’re looking for an escape to coastal resort towns or want to explore a new city with your furry friend, South Carolina has plenty of options for you to consider.</p>
      </TravelGuideCard>

    </Layout>
  )
}

export default Advertise