/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer'
import "../sass/main.sass"

const Layout = ({ children, noFooter, noSearch }) => {
  return (
    <>
      <Header noSearch={noSearch} />
      {children}
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
