import React, { Component } from "react";
import "./UserPage";
import API from "../../utils/API";
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import Footer from '../../components/Footer/Footer'
import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'

class UserPage extends Component {
    state = {
        user: []

    };

    componentDidMount() { }



    render() {
        return (
            <React.Fragment>
                <div className="container-user">
                    <div className="row-user">
                        <div className="user-dev-card-wrapper">
                            <div className="user-dev-card">
                                <img src={DevCardBackGround} alt="dev card background" className="dev-card-back-img" />
                                <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
                                <h1 className="user-dev-name">
                                    {this.props.username}
                                </h1>
                                <ul className="user-dev-link-info">
                                    <li><a href="#" className='user-dev-email'> {this.props.email}</a></li>                       <li><a href="#" className='dev-github'> https://github.com/DonRiche</a></li>
                                    <li><a href="#" className='user-dev-website'> {this.props.website}</a></li>
                                    <li className='user-dev-language'>{this.props.language}</li>
                                    <a id="buttonEdit" className="btn btn-danger" href="/edit" role="button" >Edit</a>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
                <Footer />
            </React.Fragment>

        )

    }
}
export default UserPage;