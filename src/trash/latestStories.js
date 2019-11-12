import React, { Component } from 'react'
import PropTypes from 'prop-types'
import decode from 'unescape'
import Card from './PopularPostsCard'
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import coverImg from '../images/post-bg.png'


const LatestStories = ({cats, dogs, smallPets}) => {

  return (
    <section className="section latest-stories-section">
        <div className="container is-fullhd">
          <h2>Similar Posts</h2>
          <div className="columns">
            <div className="column">
              <Img />
              
            </div>
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </div>
      </section>
  )
}

export default LatestStories

