import React from 'react';
import './banner.css';
import dummy from '../../db/data.json';

function Banner(){
    return(
        <div className="banner">
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
            <p className="sub-text">{dummy.blog.subTitle}</p>
            <p className="main-text">{dummy.blog.mainTitle}</p>
            <p className="description">{dummy.blog.description}</p>
        </div>
    )
}



export default Banner;