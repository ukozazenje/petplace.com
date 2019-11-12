import React from 'react'

const orderBy = ({onChange, className}) => {
  return (
    <section className={`section order-section ${className}`}>
      <div className="container is-fullhd">
        <select className="search-select" name="orderby" onChange={onChange}>
          <option value="title-a-z">Sort by</option>
          <option value="title-a-z">title A-Z</option>
          <option value="title-z-a">title Z-A</option>
          <option value="date-asc">date ASC</option>
          <option value="date-dsc">date DSC</option>
        </select>
      </div>
    </section>
  )
}

export default orderBy
