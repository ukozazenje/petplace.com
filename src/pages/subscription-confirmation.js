import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HappinessSection from "../components/homepage/pet-happiness"
import ContactUsSection from "../components/homepage/contact-us"
import CategoryListSection from "../components/homepage/categories-list"
import Latest from '../components/homepage/latest-stories/latestStoriesHome'

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
      <HappinessSection />
      <ContactUsSection />
    </Layout>
  )
}

export default SubscriptionConfirmationPage
