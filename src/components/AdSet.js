import React from 'react';
import tallPPIImg from '../images/ads/MPI-160x600-011620.jpg';
import smallPPIImg from '../images/ads/MPI-250x250-011620.jpg';

const AdSet = (props) => (
    <>
        <a href={`https://mypetinsurance.com/`} 
            target="_blank" rel="noopener nofollow" className="ppiimg-wrapper">
            <picture>
                <source srcSet={smallPPIImg} media="(max-width: 768px)"></source>
                <source srcSet={tallPPIImg} media="(min-width: 769px)"></source>
                <img src={smallPPIImg} alt="Pet Partners Insurance" />
            </picture>
        </a>
        {/* <!-- /1004510/ttg_left_160_600 --> */}
        <div id='div-gpt-ad-1579271824039-0' style={{width: '160px', height: '600px'}}>
            <script dangerouslySetInnerHTML={{
            __html: `
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1579271824039-0'); });
            `
            }} />
        </div>
    </>
);

export default AdSet;