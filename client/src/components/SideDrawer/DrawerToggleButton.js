import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
    return (
        <div>
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button_line"></div>
                <div className="toggle-button_line"></div>
                <div className="toggle-button_line"></div>
            </button>
        </div>
    )
}

export default DrawerToggleButton;