import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HappinessSection from "../components/homepage/pet-happiness"
import ContactUsSection from "../components/homepage/contact-us"
import CategoryListSection from "../components/homepage/categories-list"
import SearchHero from "../components/homepage/searchHero"
import Latest from '../components/homepage/latest-stories/latestStoriesHome'
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"

const IndexPage = () => {
  return (
    <Layout noSearch={true}>
      <SEO title="PetPlace: The Web's #1 Source of Pet Information" />
      <div className="flex-container">
        <div className="search-wrapper">
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
        </div>
      </div>
      <CategoryListSection />
      <Latest />
      <HappinessSection />
      <ContactUsSection />
    </Layout>
  )
}

export default IndexPage
