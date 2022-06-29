import React, {useState} from 'react';
import './header.css';
import Logo from '../../assets/Logo.svg';
import Profile from '../../assets/profile.jpg';
import LogInBtn from '../../assets/icon-login.svg';
import RegisterBtn from '../../assets/icon-register.svg';
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
            <SignIn/>
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

function SignIn(){
    const [ToggleBtn, setToggleBtn] = useState(false);
    const handleToggle = function(){
        setToggleBtn(!ToggleBtn)
    }

    function LogIn(){
        return(
            <li onClick={handleToggle}>
                <a href="#none" className="button login">
                <img src={LogInBtn} alt="" />
                <span>Login</span>
                </a>
            </li>
        )
    }

    function Write(){
        return(
            <li>
            <a href="#none" className="button">
            <img src={WriteBtn} alt=""/>
            <span>Write</span>
            </a>
        </li>
        )
    }

    function LogOut(){
        return(
                <li>
                <button onClick={handleToggle} className="button white">
                    <img src={LogOutBtn} alt="" />
                    <span>Logout</span>
                </button>
                </li>
            )      
    }

    function Register(){
        return(
            <li>
            <button className="button register">
                <img src={RegisterBtn} alt="" />
                <span>Register</span>
            </button>
            </li>    
        )
    }

    if(ToggleBtn === false){
        return (
            <ul>
                
                <LogIn/>
                <Register/>
            </ul>
        )
    }
    else{
        return(
            <ul>
                <ProfileImg/>
                <Write/>
                <LogOut/>
            </ul>
        )
    }
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



export default Header;