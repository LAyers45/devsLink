import React from 'react';
import './Navbar.css'
import logo from '../../images/devs-link-logo.png'

export default function navbar() {
    return (
        <nav className="navbar">
            <ul>

                <li className="nav-link"><a href="/user">User Profile</a></li>
                <li className="nav-link"><a href="/devworks">Dev Works</a></li>
                <li className="nav-link"><a href="/devsearch">Dev Search</a></li>
                <li id="logo"><img src={logo} className="App-logo" alt="logo" a href="/" /></li>
            </ul>

        </nav>


    )
}
