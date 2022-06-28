import React from 'react';
import './view.css';
import Header from '../../header/Header';
import Banner from '../../banner/Banner';
import Footer from '../../footer/Footer';
import PostBackground from '../../../assets/post-background6.jpg';

function PostView(){
    return(
        <>
        <Header/>
        <Banner/>
        <PostPage/>
        <Footer/>
        </>
    )
}

function PostPage(){
    return(
        <div className="view">
            <PostViewLayout/>
        </div>
    )
}

function PostViewLayout(){
    return(
        <div className="max-width">
            <section className="wrap-box">
                <PostViewContent/>
            </section>
        </div>
    )
}

function PostViewContent(){
    return(
        <div className="inner">
            <PostInfo/>
            <PostCategory/>
            <PostTitle/>
            <ViewContents/>
            <PostButtons/>
            <BackButton/>
        </div>
    )
}

function PostInfo(){
    return(
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <AuthorInfo/>
            <CreatedInfo/>
            <dt className="a11y-hidden">Created</dt>
        </dl>
    )
}

function AuthorInfo(){
    return( 
        <dd className="author">
        <img src={process.env.PUBLIC_URL+'/assets/profile.jpg'} alt=""/>
         Chilli
        </dd>
    )
};

function CreatedInfo(){
    return(
        <dd className="created">
            "2022.05.25"
        </dd>
        
    )
}

function PostCategory(){
    return(
        <dl className="a11y-hidden">
            <dt className="a11y-hidden">Category</dt>
            <dd>Life</dd>
            <dd>Style</dd>
        </dl>
    )
}

function PostTitle(){
    return(
        <div className="title-wrap">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <button className="btn-like">Like</button>
        </div>
    )
}

function ViewContents(){
    return(
        <div className="view-contents">
            <p>
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                cum incidunt repudiandae vel.""
            </p>
            <img src={PostBackground} alt=""/>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                cum incidunt repudiandae vel.
			</p>
        </div>
    )
}

function PostButtons(){
    return(
        <div className="btn-group">
            <a href="#none" className="btn-modify">
                <span className="a11y-hidden">modify</span>
            </a>
            <button type="button" className="btn-delete">
                <span className="a11y-hidden">delete</span>
            </button>
        </div>
    )
}

function BackButton(){
    return(
        <a href="./" className="btn-back">
            <span className="a11y-hidden">Back</span>
        </a>
    )
}


export default PostView;