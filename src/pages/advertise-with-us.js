import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../static/images/advertiseHero'
import AdvertiseWithUsIntro from '../components/advertise-with-us/AdvertiseWithUsIntro'
// import AdvertiseBoxes from '../components/advertise-with-us/AdvertiseBoxes'
import ContactSection from '../components/advertise-with-us/ContactSection'
import SEO from '../components/seo'
import SeoImage from '../images/advertise-home.jpg'
const Advertise = () => {
  return (
    <Layout>
      <SEO  
        title="Advertise With Us - Petplace" 
        description="Our brand partnerships provide businesses with a wonderful opportunity to position themselves as thought leaders, innovators, experts, and go-to resources for our diverse audience of pet parents. Together, we can craft thoughtful, engaging content that captures our audience’s attention and yields new customers." 
        image={SeoImage} 
      />
      <HeroImage />
      <AdvertiseWithUsIntro />
      {/* <AdvertiseBoxes /> */}
      <ContactSection />
    </Layout>
  )
}

export default Advertise

