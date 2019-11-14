import React from "react";
import "./style.css";

import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'

// This file exports both the List and ListItem components

export function DevSearchList({ children }) {
  return (
    <div className="list">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function DevCard({ children }) {
  return <div className="section">{children}
    <div className="dev-card-wrapper">
      <div className="dev-card">
        <img src={DevCardBackGround} alt="dev card background" className="dev-card-back-img" />
        <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
        {/* <h1 className="dev-name">
          DonRiche
                  </h1> */}
        {/* <ul className="dev-link-info">
          <div>{children.dev.username}</div>
          <div>{children.dev.email}</div>

        </ul> */}
      </div>
    </div>
  </div>;
}
