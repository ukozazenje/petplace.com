import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../static/images/advertiseHero'
import AdvertiseBoxes from '../components/advertise-with-us/AdvertiseBoxes'
import ContactSection from '../components/advertise-with-us/ContactSection'

const Advertise = () => {
  return (
    <Layout>
      <HeroImage />
      <AdvertiseBoxes />
      <ContactSection />
    </Layout>
  )
}

export default Advertise

