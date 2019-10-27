import React from "react";
import "./Onload.css";
import BackgroundImage from '../../images/background-devslink.png';
import logo from '../../images/devs-link-logo.png'




function OnLoad() {
    return (
        <div>
            <img src={logo} className="logo" alt=" devs link logo" />
            <img src={BackgroundImage} className="backgroundImage" alt=" devs link" />
        </div>
    )

}

export default OnLoad;