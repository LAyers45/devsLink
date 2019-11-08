import React from "react";
import "./Onload.css";
import BackgroundImage from '../../images/background-devslink.png';
import logo from '../../images/devs-link-logo.png';








function OnLoad() {
    return (

        <div className="onload-container animated fadeIn">

            <div className='onload-row'>
                <div className='onload-col'>
                    <img src={logo} className="logo" alt=" devs link logo" />
                    <h1 className="textOne">devslink is a community for developers to create or find projects they would like to work on.</h1>
                    <h1 className="textTwo">To get started just sign up.</h1>

                    <div className='onload-inner-col'>
                        <a href="/signUp"><button type="button" className="signUp ">Sign-Up</button></a>
                        <a href="/signIn"><button type="button" className="signIn">Sign-In</button></a>
                    </div>
                </div>

                <div className='onload-col'>
                    <img src={BackgroundImage} className="backgroundImage" alt=" devs link" />
                </div>
            </div>


        </div>
    )

}

export default OnLoad;