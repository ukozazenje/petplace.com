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

const SubscriptionConfirmationPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div class="section">
          <h3 class="highlight">Your newsletter preferences have been saved. Thanks for subscribing!</h3>
        </div>
      </div>
      <CategoryListSection />

      <Latest />
      {/* <LatestStories dogs={dogs} cats={cats} smallPets={smallPets} categories={allCategories}/> */}

      <HappinessSection />
      <ContactUsSection />

    </Layout>
  )
}

export default SubscriptionConfirmationPage