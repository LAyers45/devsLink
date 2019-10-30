import React from 'react';
import logo from '../../images/devs-link-logo.png';
import './Navbar.css';


export default function navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li id="project" className="nav-link"><a href="/project">Project</a></li>
                <li className="nav-link"><a href="/user">User Profile</a></li>
                <li className="nav-link"><a href="/devworks">Dev Works</a></li>
                <li className="nav-link"><a href="/devsearch">Dev Search</a></li>
                <a href="/main"> <img src={logo} className="App-logo" alt="logo" /></a>
            </ul>

        </nav>


    )
}
