import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';
import './category.css';
import './author.css';
import AuthorImg from '../../../assets/profile.jpg';

function Post(props){
    return(
        <Link to="/postview1">
        <li>
            <article>
                <img src={process.env.PUBLIC_URL+`/assets/${props.imgName}.jpg`} alt=""></img>
            <PostContents/>
            </article>
        </li>
        </Link>
    )
}

function PostContents(){
    return(
        <div className="contents-wrap">
        <Category/>
        <PostTitle/>
        <Author/>
        <PostPreview/>
        </div>
    )
}

function Category(){
    return(
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
			<dd>Life</dd>
			<dd>Style</dd>
        </dl>
    )
}

function PostTitle(){
    return(
        <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h3>
    )
}

function Author(){
    return(
        <dl className="author-wrap">
            <AuthorHidden/>
            <AuthorInfo/>
            <CreateHidden/>
            <CreateDate/>
        </dl>
    )
}

function AuthorHidden(){
    return(
        <dt className="a11y-hidden">Author</dt>
    )
}

function AuthorInfo(){
    return(
        <dd className="author">
            <img src={AuthorImg} alt=""></img>
             Chilli
        </dd>
    )
}

function CreateHidden(){
    return(
        <dt className="a11y-hidden">Created</dt>
    )
}

function CreateDate(){
    return(
        <dd className="created">2022.05.25</dd>
    )
}

function PostPreview(){
    return(
        <p className="post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
            dolor quas odio cum incidunt repudiandae vel.
        </p>
    )
}
export default Post;