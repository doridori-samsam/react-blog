import React from 'react';
import './banner.css';
import background6 from '../../assets/post-background6.jpg';
import dummy from '../../db/data.json';

function PostViewBanner(){
    return(
        <div className="banner" style={{backgroundImage: `url(${background6})`}}>
            <PostBannerLayout/>
        </div>
    )
}

function PostBannerLayout(){
    return(
        <div className="max-width">
            <PostBannerContents/>
        </div>
    )
}

function PostBannerContents(){
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