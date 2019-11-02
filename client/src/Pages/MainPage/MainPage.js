import React from "react";
import "./MainPage";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BackgroundImage from '../../images/background-devslink.png';



function MainPage() {
    return (

        < div >

            <Navbar />

            <img src={BackgroundImage} className="backgroundImage" alt=" devs link" />
            <Footer />
        </div >
    )

}

export default MainPage;