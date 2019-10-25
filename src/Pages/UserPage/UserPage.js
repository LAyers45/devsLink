import React from "react";
import styles from "./UserPage";
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import Navbar from '../../components/Navbar/Navbar'




function UserPage() {
    return (
        <div>
            <Navbar />
            <UserInfoCard />
        </div>
    )

}

export default UserPage;