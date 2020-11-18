import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './footer'
import "../sass/main.sass"
import EmailDialog from "../components/EmailDialog"
import HolydayBanner from "./holidayBanner"

const Layout = ({ children, hideFooterNavigation, noSearch, hideSearch }) => {
  return (
    <>
      <HolydayBanner />
      <Header noSearch={noSearch} hideSearch={hideSearch}/>
      {children}
      <EmailDialog />
      <Footer hideFooterNavigation={hideFooterNavigation} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
