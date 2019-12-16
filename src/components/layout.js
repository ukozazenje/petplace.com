import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './footer'
import "../sass/main.sass"
import EmailDialog from "../components/EmailDialog"

const Layout = ({ children, noFooter, noSearch }) => {
  return (
    <>
      <Header noSearch={noSearch} />
      {children}
      <EmailDialog />
      {
        noFooter
        ? null :
        <Footer />
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
