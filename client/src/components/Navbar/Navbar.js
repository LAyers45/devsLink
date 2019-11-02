import React from 'react';
import logo from '../../images/devs-link-logo.png';
import './Navbar.css';


export default function navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-link"> <a href="/main"> <img src={logo} className="App-logo" alt="logo" /></a></li>
                <li id="searchLink" className="nav-link"><a href="/devsearch">Dev Search</a></li>
                <li id="worksLink" className="nav-link"><a href="/devworks">Dev Works</a></li>
                <li id="profileLink" className="nav-link"><a href="/user">User Profile</a></li>
                <li id="projectLink" className="nav-link"><a href="/project">Project</a></li>
            </ul>

        </nav>


    )
}
