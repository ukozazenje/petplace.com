import React from 'react';
import tallPPIImg from '../images/ads/PPI-160x600-11152019.jpg';
import smallPPIImg from '../images/ads/PPI-250x250-11152019.jpg';

const AdSet = (props) => (
    <a href={`https://www.petpartners.com/pet-insurance/how-it-works?cs=PETPLACE&csd=${props.title}`} 
        target="_blank" rel="noopener noreferrer" className="ppiimg-wrapper">
        <picture>
            <source srcSet={smallPPIImg} media="(max-width: 768px)"></source>
            <source srcSet={tallPPIImg} media="(min-width: 769px)"></source>
            <img src={smallPPIImg} alt="Pet Partners Insurance" />
        </picture>
    </a>
);

export default AdSet;