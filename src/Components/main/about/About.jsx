import React from 'react';
import './about.css';


function About(){
    return(
        <aside className="about">
            <h2>About Me</h2>
            <UserProfile/>
            <UserName/>
            <UserDescription/>
            <CategoryHeader/>
            <Categories/>
            <h3>Follow</h3>
            <FollowSNS/>
        </aside>
    )
}



function UserProfile(){
    return(
        <img src={process.env.PUBLIC_URL+'/assets/profile.jpg'} alt="" className="user-profile"></img>
    )
}

function UserName(){
    return(
        <p className="user-name">Chilli</p>
    )
}

function UserDescription(){
   return <p className="user-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
}

function CategoryHeader(){
    return <h3>Categories</h3>
} 

function Categories(){
    return(
        <ul className="categories">
            <CategoryList keyword="Life"/>
            <CategoryList keyword="Style"/>
            <CategoryList keyword="Tech"/>
            <CategoryList keyword="Sport"/>
            <CategoryList keyword="Photo"/>
            <CategoryList keyword="Develop"/>
            <CategoryList keyword="Music"/>
        </ul>
    )
}

function CategoryList(props){
    return(
        <li>
            <a href="#">{props.keyword}</a>
        </li>
    )
}

function FollowSNS(){
    return(
        <ul className="sns">
            <SNSList sns="Facebook"/>
            <SNSList sns="Twitter"/>
            <SNSList sns="Instagram"/>
            <SNSList sns="Github"/>
        </ul>
    )
}

function SNSList(props){
    return(
        <li>
            <a href="#">
            <img src={require(`../../../assets/${props.sns}.svg`)} alt={props.sns}></img>
            </a>
        </li>
    )
}

export default About;