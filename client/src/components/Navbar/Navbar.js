import React from 'react';
import logo from '../../images/devs-link-logo.png';
import './Navbar.css';
// import AnimationJs from './navAnimation';




export default function navbar() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className='nav-logo'>
                    <a className="anchor-nav" href="/main"> <img src={logo} className="App-logo" alt="logo" /></a>
                </div>
                <ul className="nav-links">
                    <li ><a className="anchor-nav" href="/devsearch">Dev Search</a></li>
                    <li ><a className="anchor-nav" href="/devworks">Dev Works</a></li>
                    <li ><a className="anchor-nav" href="/user">User Profile</a></li>
                    <li ><a className="anchor-nav" href="/project">Project</a></li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>
            {/* <script src={AnimationJs}></script> */}
        </React.Fragment>


    )
}
