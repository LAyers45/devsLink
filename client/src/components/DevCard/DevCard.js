//import React, { Component } from 'react';
//import '../DevCard/DevCard.css';
import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'



export default class DevCard extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="dev-card-wrapper">
                    <div className="dev-card">
                        <img src={DevCardBackGround} alt="dev card background" className="dev-card-back-img" />
                        <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
                        <h1 className="dev-name">
                            DonRiche
                                    </h1>
                        <ul className="dev-link-info">
                            <li><a href="#" className='dev-email'> hndgd1980@gmail.com</a></li>                       <li><a href="#" className='dev-github'> https://github.com/DonRiche</a></li>
                            <li><a href="#" className='dev-website'> ricardoperdomo.com</a></li>
                            <li><a href="#" className='dev-language'>React Javascript Python</a></li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
