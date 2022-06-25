import React from 'react';
import Header from '../../header/Header';
import Banner from '../../banner/Banner';

function PostView(){
    return(
        <>
        <Header/>
        <Banner/>

        </>
    )
}

function PostPage(){
    return(
        <div className="view">

        </div>
    )
}

function PostViewLayout(){
    return(
        <div className="max-width">
            <section className="wrap-box">
                
            </section>
        </div>
    )
}

function PostViewContent(){
    return(
        <div className="inner">

        </div>
    )
}

function PostInfo(){
    return(
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
        </dl>
    )
}