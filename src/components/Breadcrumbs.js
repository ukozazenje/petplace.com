import React from 'react';
import { Link } from 'gatsby';
import { categoryColor } from '../components/functions';
import homeIcon from '../images/home_bread_crumb.svg';
import rightArrow from '../images/right-arrow-bc.svg';

export default (props) => (
    <div className="breadcrumbs">
        <Link to="/" className="home"><img src={homeIcon} alt="home" /></Link>
        <Link to="/" className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Dog Care</Link>
        <div className="divider"><img src={rightArrow} alt="right arrow"/></div>
        <Link to="/" className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Dog Exercise &amp; Play</Link>
        <div className="divider"><img src={rightArrow} alt="right arrow"/></div>
        <div className={`category-link ${categoryColor(props.post.categories && props.post.categories[0] && props.post.categories[0].name)}`}>Puppy Play</div>
    </div>
);
