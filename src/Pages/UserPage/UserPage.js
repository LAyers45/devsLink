import React from "react";
import "./UserPage";
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'




function UserPage() {
    return (
        <div>
            <Navbar />
            <UserInfoCard />
            <Footer />
        </div>
    )

}

export default UserPage;