import React from "react";
import "./Main.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DevSearch from '../../images/dev-search.png';
import DevWorks from '../../images/dev-works.png';
import UserProfile from '../../images/user-profile.png';
import Project from '../../images/project.png';
import LogCheck from '../../components/Logincheck/Logincheck'





function MainPage() {
    return (


        < div >

            <Navbar />
            <div className='main-page-container'>
                <div className='main-page-row'>
                    <div className='main-page-col'>
                        <a href="/devsearch"> <img src={DevSearch} className="cards" id="cardSearch" alt="dev search" /></a>
                    </div>
                    <div className='main-page-col'>

                        <a href="/devworks"> <img src={DevWorks} className="cards" id="cardWorks" alt="dev works" /></a>
                    </div>
                    <div className='main-page-col'>

                        <a href="/user">  <img src={UserProfile} className="cards" id="cardUser" alt="profile" /></a>
                    </div>
                    <div className='main-page-col'>

                        <a href="/project">  <img src={Project} className="cards" id="cardProject" alt="project" /></a>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )

}

export default MainPage;