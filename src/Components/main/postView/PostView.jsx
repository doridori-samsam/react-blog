import React from 'react';
import { useParams } from 'react-router-dom';
import dummy from '../../../db/data.json';
import './wrapbox.css';
import './view.css';
import Header from '../../header/Header';
import PostViewBanner from '../../banner/PostViewBanner';
import Footer from '../../footer/Footer';

function PostView(){
    return(
        <>
        <Header/>
        <PostViewBanner/>
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
            <PostContent/>
            <PostButtons/>
            <BackButton/>
        </div>
    )
}

function PostContent(){

    const { num } = useParams();
    const postList = dummy.posts[num-1]
  
  
    return(
        <>
            <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author">
            <img src={process.env.PUBLIC_URL+'/assets/profile.jpg'} alt=""/>
            {postList.userName}
            </dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">{postList.created}</dd>
            </dl>
            <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {postList.category.map((tag, i) => {
                return <dd key={i}>{tag}</dd>;
            })}
            </dl>
            <div className="title-wrap">
                <h2>{postList.title}</h2>
                <button className="btn-like">Like</button>
            </div>
            <div className="view-contents">
            {postList.contents.map((content, i) => {
            if (content.type === "p") {
                return <p key={i}>{content.text}</p>;
            } else if (content.type === "img") {
                return <img key={i} src={process.env.PUBLIC_URL+`${content.src}`} alt="" />;
            }
            })}
            </div>
        </>
        )}
        
      
  
  
  
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