import React from 'react';
import './main.css';
import Posts from './post/Posts';
import About from './about/About';

function Main(){
    return(
        <main>
            <MainLayout/>
        </main>
    )
}

function MainLayout(){
    return(
        <div className="max-width">
            <PostHidden/>
            <Posts/>
            <About />
        </div>
    )
}

function PostHidden(){
    return(
        <h2 className="a11y-hidden">Post</h2>
    )
}

export default Main;