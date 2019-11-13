import React from 'react';
import "./SideDrawer.css"

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/devsearch">Dev Search</a></li>
                <li><a href="/devworks">Dev Works</a></li>
                <li><a href="/user">User Profile</a></li>
                <li><a href="/project">Project</a></li>

            </ul>
        </nav>
    )
}

export default SideDrawer;