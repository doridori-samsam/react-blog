import React from 'react';
import './banner.css';
import background6 from '../../assets/post-background6.jpg';

function PostViewBanner(){
    return(
        <div className="banner" style={{backgroundImage: `url(${background6})`}}>
            <BannerLayout/>
        </div>
    )
}

function BannerLayout(){
    return(
        <div className="max-width">
            <BannerContents/>
        </div>
    )
}

function BannerContents(){
    return(
        <div className="banner-contents">
          <p className="today">
            May
            <em>25</em>
            Wednesday
          </p>
        </div>
    )
}

export default PostViewBanner;