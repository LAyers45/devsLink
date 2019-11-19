import React, { Component } from "react";
import "./Main.css";
import { Redirect } from "react-router-dom"
import Footer from '../../components/Footer/Footer';
import DevSearch from '../../images/dev-search.svg';
import DevWorks from '../../images/dev-works.svg';
import UserProfile from '../../images/user-profile.svg';
import Project from '../../images/project.svg';


class MainPage extends Component {
    state = {}


    componentDidMount() {
        if (!this.props.loggedIn) {
            this.setState({ acquiredPath: "/" })
        }
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to={{ pathname: '/' }} />
        }
        return (


            < div >

                <div className='main-page-container'>
                    <div className='main-page-row'>
                        <a href="/devsearch">  <img src={DevSearch} className="cards" id="cardUser" alt="dev search" /></a>

                        <a href="/devworks"> <img src={DevWorks} className="cards" id="cardWorks" alt="dev works" /></a>


                        <a href="/user">  <img src={UserProfile} className="cards" id="cardUser" alt="profile" /></a>



                        <a href="/project">  <img src={Project} className="cards" id="cardProject" alt="project" /></a>


                    </div>
                </div>


                <Footer />
            </div >
        )

    }
}

export default MainPage;