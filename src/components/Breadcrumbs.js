import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { categoryColor } from '../components/functions';
import homeIcon from '../images/home_bread_crumb.svg';
import rightArrow from '../images/right-arrow-bc.svg';

export default ({ category }) => {

  const { name, path } = category;
  const categories = path.split('/').filter((cat) => cat && cat !== 'article' && cat !== 'category');

  return (
    <div className="breadcrumbs">
      <Link to="/" className="home"><img src={homeIcon} alt="home" /></Link>
      {
        categories.map(((cat, i) => {
          const categoryPath = path.split(cat)[0] + `${cat}/`;
          return (
            <Fragment key={i}>
              <Link to={categoryPath} className={`category-link ${categoryColor(name)}`}>{cat.replace(/-/g, ' ')}</Link>
              {
                i < categories.length - 1 ? <img className="divider" src={rightArrow} alt="right arrow"/> : null
              }
            </Fragment>
          )
        }))
      }
    </div>
  )
}
