import React from 'react';
import './UserInfoCard.css'
import profilePic from '../../images/anonymous.png'
export default function UserInfoCard() {
    return (
        <div className="card">
            <img src={profilePic} className="profile-pic" alt="profile-pic" />
            <div className="username">
                Username
           </div>
            <div className="email">
                Email
           </div>
            <div className="github">
                Github
           </div>
            <div className="website">
                Website
           </div>
            <div className="languages">
                Languages
           </div>
            <a className="btn btn-danger" href="/edit" role="button" >Edit</a>
        </div>
    )
}