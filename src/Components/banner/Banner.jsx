import React from 'react';
import './banner.css';

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
            <SubText/>
            <MainText/>
            <Description/>
        </div>
    )
}

function SubText(){
    return(
        <p className="sub-text">React Blog</p>
    )
}

function MainText(){
    return(
        <p className="main-text">My BLOG</p>
    )
}

function Description(){
    return(
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est</p>
    )
}

export default Banner;