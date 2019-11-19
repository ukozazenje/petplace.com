import React, { useState } from 'react'
import {Link} from 'gatsby'
import MostPopularTags from '../mostPopularTags'
const SideBar = ({subcategories, noSubcategory}) => {
  const [ menu, setMenuState ] = useState(false);
  return (
    <div className="column is-one-quarter-widescreen side-bar">
      <div className="filter-btn" onClick={() => setMenuState((menu) => !menu)}>
        <span>Filters</span>
      </div>
      <div className={`category-filters search-filters ${menu ? 'is-active' : ''}`}>
        { noSubcategory ?
          null :
          subcategories.length  > 0 ?
          <>
            <h3>Sub categories</h3>
            <div className="subcategories-wrapper">
              {subcategories.map((category, i) => (
                <button className="subcategories-btn" key={i}>
                  <Link to={`${category.path}`} >
                    {category.name.replace(/&amp;/g, '&')}
                  </Link>
                </button>
              ))}
            </div>
          </> :
          null
        }
        <h3>Most popular tags</h3>
        <MostPopularTags />
      </div>
      {/* <OrderBy onChange={setOrderBy} className="is-hidden-widescreen" /> */}
    </div>
  )
}

export default SideBar
