import React from 'react';
import './header.css';
import Logo from '../../assets/Logo.svg';
import Profile from '../../assets/profile.jpg';
import WriteBtn from '../../assets/icon-modify-white.svg';
import LogOutBtn from '../../assets/icon-logout.svg';

function Header(){
    return (
    <header>
        <HeaderLayout/>
    </header>
    )
}


function HeaderLayout(){
    return(
        <div className="max-width">
            <MainLogo/>
            <LogIn/>
        </div>
    )
}


function MainLogo(){
    return(
    <h1>
    <a href="./">
        <img src={Logo} alt="My Blog" />
    </a>
    </h1>
    );
}

function LogIn(){
    return(
        <ul>
            <ProfileImg/>
            <Write/>
            <LogOut/>
        </ul>
    )
}

function ProfileImg(){
    return (
        <li className="profile-img">
            <a href="#none">
            <img src={Profile} alt="My Page" />
            </a>
        </li>
    )
}

function Write(){
    return(
        <li>
            <a href="#none" className="button">
            <img src={WriteBtn} alt="" />
            <span>Write</span>
            </a>
        </li>
    )
}

function LogOut(){
   return(
        <li>
            <button className="button white">
                <img src={LogOutBtn} alt="" />
                <span>Logout</span>
            </button>
        </li>
   )
}
export default Header;