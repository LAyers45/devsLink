import React from 'react';
import './Navbar.css'
import logo from '../../assets/images/devs-link.png'

export default function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li className="nav-link"><img src={logo} className="App-logo" alt="logo" a href="/" /></li>
                <li className="nav-link"><a href="/devsearch">Dev Search</a></li>
                <li className="nav-link"><a href="/devworks">Dev Works</a></li>
                <li className="nav-link"><a href="/user">User Profile</a></li>
            </ul>

        </nav>


    )
}
