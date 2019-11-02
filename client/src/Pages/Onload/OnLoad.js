import React from "react";
import "./Onload.css";
import BackgroundImage from '../../images/background-devslink.png';
import logo from '../../images/devs-link-logo.png';
import Devs from '../../images/devs.png';
import Mail from '../../images/mail.png';





function OnLoad() {
    return (
        <div className="animated fadeIn">
            <img src={logo} className="logo" alt=" devs link logo" />
            <img src={Devs} className="animated flipInY devs" alt=" devs" />
            <img src={Mail} className="animated flipInY mail" alt=" mail" />
            <img src={BackgroundImage} className="backgroundImage" alt=" devs link" />
            <h1 className="textOne">devslink is a community for developers to create or find projects they would like to work on.</h1>
            <h1 className="textTwo">To get started just sign up below.</h1>
            <a href="/signUp"><button type="button" class="signUp ">Sign-Up</button></a>
            <a href="/signIn"><button type="button" class="signIn">Sign-In</button></a>
        </div>
    )

}

export default OnLoad;