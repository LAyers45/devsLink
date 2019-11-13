import React from 'react';
import '../UserInfoCard/UserInfoCard.css'
import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'


export default function UserInfoCard() {
    return (
        <React.Fragment>

            <div className="container-user">
                <div className="row-user">
                    <div className="user-dev-card-wrapper">
                        <div className="user-dev-card">
                            <img src={DevCardBackGround} alt="dev card background" className="dev-card-back-img" />
                            <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
                            <h1 className="user-dev-name">
                                DonRiche
                                    </h1>
                            <ul className="user-dev-link-info">
                                <li><a href="#" className='user-dev-email'> hndgd1980@gmail.com</a></li>                       <li><a href="#" className='dev-github'> https://github.com/DonRiche</a></li>
                                <li><a href="#" className='user-dev-website'> ricardoperdomo.com</a></li>
                                <li className='user-dev-language'>React Javascript Python</li>
                                <a id="buttonEdit" className="btn btn-danger" href="/edit" role="button" >Edit</a>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>
        </React.Fragment>
    )
}