import React from 'react';
import tallPPIImg from '../images/ads/MPI-160x600-011620.jpg';
import smallPPIImg from '../images/ads/MPI-250x250-011620.jpg';

const AdSet = (props) => (
    <a href={`https://mypetinsurance.com/`} 
        target="_blank" rel="noopener nofollow" className="ppiimg-wrapper">
        <picture>
            <source srcSet={smallPPIImg} media="(max-width: 768px)"></source>
            <source srcSet={tallPPIImg} media="(min-width: 769px)"></source>
            <img src={smallPPIImg} alt="Pet Partners Insurance" />
        </picture>
    </a>
);

export default AdSet;