import React from 'react'
import CategoryRow from './categoryRow'

const LatestStories = ({cats, dogs, smallPets, categories}) => {

  return (
    <section className="section latest-stories-section">
      <div className="container is-fullhd">
        <h1>Latest Stories</h1>
        <CategoryRow category={cats} categories={categories} />
        <CategoryRow category={dogs} categories={categories} />
        <CategoryRow category={smallPets} categories={categories} />
      </div>
    </section>
  )
}

export default LatestStories

