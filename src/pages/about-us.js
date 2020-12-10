import React from 'react'
import Layout from '../components/layout'
import AboutUsHero from '../components/about-us/AboutUsHero'
import PetLoversSection from '../components/about-us/PetLoversSection'
import JustForFunSection from '../components/about-us/JustForFunSection'
import PetCareTools from '../components/about-us/PetCareTools'
import PetPlaceTeam from '../components/about-us/PetPlaceTeam'
import CommunitySection from '../components/about-us/CommunitySection'
import ContactUsSection from '../components/homepage/contact-us'
import SEO from '../components/seo'

const AboutUs = ({data}) => {  
  
  const page = data.wordpressPage

  return (    
      <Layout>
        <div className="about-us">
          <SEO title={page.yoast_meta.yoast_wpseo_title} description={page.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")} image="/images/about-us-background.jpg"/>
          <AboutUsHero />
          <PetLoversSection />
          <JustForFunSection />
          <PetCareTools />
          <PetPlaceTeam />
          <CommunitySection />
          <ContactUsSection />
        </div>
      </Layout>    
  )
}

export default AboutUs

export const query = graphql`
  {
    wordpressPage(slug: {eq: "about-us"}) {
      yoast_meta {
        yoast_wpseo_canonical
        yoast_wpseo_metadesc
        yoast_wpseo_title
      }
      slug
    }
  }
`