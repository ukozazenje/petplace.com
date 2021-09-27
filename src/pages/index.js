import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HappinessSection from "../components/homepage/pet-happiness"
import ContactUsSection from "../components/homepage/contact-us"
import CategoryListSection from "../components/homepage/categories-list"
import SearchHero from "../components/homepage/searchHero"
import Latest from "../components/homepage/latest-stories/latestStoriesHome"
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"
import homeImage from "../images/hero-bg.png"
import logo from "../images/PPlogo.jpg"
import Helmet from "react-helmet"
import WelcomeToPetPlaceSection from "../components/homepage/WelcomeToPetPlaceSection"
import SearchSection from "../components/homepage/SearchSection"
import SliderHomePage from "../components/homepage/SliderHomePage"
const IndexPage = () => {
  return (
    <Layout noSearch={true}>
      <SEO title="PetPlace: The Web's #1 Source of Pet Information" />
      <Helmet>
        {/* inline script elements */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "PetPlace: The Web's #1 Source of Pet Information",
            "description": "Read veterinarian approved pet care articles on PetPlace.com. Find pet health information about your dog, cat and many other animals from our pet experts.",
            "image": "${process.env.GATSBY_WEB_SITE_URL}${homeImage}",  
            "author": {
              "@type": "Organization",
              "name": "PetPlace Staff"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.petplace.com"
            },  
            "publisher": {
              "@type": "Organization",
              "name": "PetPlace",
              "logo": {
                "@type": "ImageObject",
                "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                "width": 236,
                "height": 45
              }
            },
            "datePublished": "2019-11-15",
            "dateModified" : "2020-01-23"
          }
        `}</script>
        <link rel="canonical" href="https://www.petplace.com/" />
      </Helmet>
      <div className="flex-container">
        {/* <div className="search-wrapper">
          <SearchHero />
        </div>
        <div className="desktop-img">
          <HomeHeroImg />
        </div> 
        <div className="tablet-img">
          <TabletHeroImg />
        </div>
        <div className="mobile-img">
          <MobileHeroImg />
        </div> */}
        <div className="home-slider">
          <SliderHomePage />
        </div>
      </div>
      <SearchSection />
      {/* <CategoryListSection /> */}
      {/* <WelcomeToPetPlaceSection /> */}
      <Latest />
      <HappinessSection />
      <ContactUsSection />
    </Layout>
  )
}

export default IndexPage
