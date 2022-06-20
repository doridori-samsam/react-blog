import React from 'react';
import './footer.css';


function Footer(){
    return (
        <footer>
            <FooterLayout/>
        </footer>
    )
}

function FooterLayout(){
    return(
        <div className="max-width">
            <FooterHeader/>
            <TopButton/>
        </div>
    )
}

function FooterHeader(){
    return <h2>ⓒWeniv Corp.</h2>
}

function TopButton(){
    return <button className="top-button">TOP</button>
}

export default Footer;