import React from 'react';
import { Link } from 'gatsby';
import { categoryColor } from '../components/functions';
import homeIcon from '../images/home_bread_crumb.svg';
import rightArrow from '../images/right-arrow-bc.svg';

export default (props) => (
    <div className="breadcrumbs">
        <Link to="/" className="home"><img src={homeIcon} alt="home" /></Link>
        <Link to="/" className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Dog Care</Link>
        <Link to="/" className="divider"><img src={rightArrow} alt="right arrow"/></Link>
        <Link to="/" className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Dog Exercise &amp; Play</Link>
        <Link to="/" className="divider"><img src={rightArrow} alt="right arrow"/></Link>
        <div className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Puppy Play</div>
    </div>
);
