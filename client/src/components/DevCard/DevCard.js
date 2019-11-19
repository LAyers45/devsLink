import React from "react";
import "./DevCard.css";

// This file exports both the List and ListItem components

export function DevSearchList({ children }) {
  return (
    <div className="devsearch-list">
      <ul className="devserach-list-group">{children}</ul>
    </div>
  );
}

// export function DevCard({ children }) {
//   return <div className="section">{children}
//     <div className="dev-card-wrapper">
//       {/* <div className="dev-card"> */}
//       <div className="dev-card-back-img">
//         <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
//       </div>
//       {/* <h1 className="dev-name">
//           DonRiche
//                   </h1> */}
//       {/* <ul className="dev-link-info">
//           <div>{children.dev.username}</div>
//           <div>{children.dev.email}</div>

//         </ul> */}
//       {/* </div> */}
//     </div>
//   </div>;
// }
