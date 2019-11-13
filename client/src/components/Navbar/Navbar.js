import React from 'react';
import logo from '../../images/devs-link-logo.png';
import './Navbar.css';
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';





const navbar = props => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-togglebutton">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='nav-logo'>
                    <a className="anchor-nav" href="/main"> <img src={logo} className="App-logo" alt="logo" /></a>
                </div>
                <ul className="nav-links">
                    <li ><a className="anchor-nav" href="/devsearch">Dev Search</a></li>
                    <li ><a className="anchor-nav" href="/devworks">Dev Works</a></li>
                    <li ><a className="anchor-nav" href="/user">User Profile</a></li>
                    <li ><a className="anchor-nav" href="/project">Project</a></li>
                </ul>

            </nav>
        </React.Fragment>
    )


}

export default navbar;