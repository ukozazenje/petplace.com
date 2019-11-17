import React from 'react';
import { Link } from 'gatsby';
import { categoryColor } from '../components/functions';
import homeIcon from '../images/home_bread_crumb.svg';
import rightArrow from '../images/right-arrow-bc.svg';

export default (props) => {

  const name = props.post.categories && props.post.categories[0] && props.post.categories[0].name;
  const path = props.post.categories && props.post.categories[0] && props.post.categories[0].path;
  const categories = path.split('/').filter((cat) => cat && cat !== 'article' && cat !== 'category');

  return (
    <div className="breadcrumbs">
      <Link to="/" className="home"><img src={homeIcon} alt="home" /></Link>
      {
        categories.map(((cat, i) => {
          const categoryPath = path.split(cat)[0] + `${cat}/`;
          return (
            <>
              <Link to={categoryPath} className={`category-link ${categoryColor(name)}`}>{cat.replace(/-/g, ' ')}</Link>
              {
                i < categories.length - 1 ? <div className="divider"><img src={rightArrow} alt="right arrow"/></div> : null
              }
            </>
          )
        }))
      }
    </div>
  )
}
