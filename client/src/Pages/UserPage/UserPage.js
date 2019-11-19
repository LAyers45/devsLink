import React, { Component } from "react";
import "./UserPage.css";
import Footer from '../../components/Footer/Footer'
import ProfileImage from '../../images/default-profile-pic.png'

class UserPage extends Component {
    state = {
        email: this.props.email,
        username: this.props.username,
        id: this.props.id,
        github: this.props.github,
        website: this.props.website,
        specialization: this.props.specialization
    };



    componentDidMount() { }



    render() {
        return (
            <React.Fragment>
                <div className="container-user">
                    <div className="row-user">
                        <div className="user-dev-card-wrapper">
                            <div className="user-dev-card">
                                <div alt="dev card background" className="dev-card-back-img" >
                                    <img src={ProfileImage} alt="" className="dev-card-img" />
                                    <h1 className="user-dev-name">
                                        {this.props.username}
                                    </h1>
                                </div>
                                <ul className="user-dev-link-info">
                                    <li><a href={"mailto:" + this.props.email} className='user-dev-email'> {this.props.email}</a></li>
                                    <li><a href={this.props.github} className='dev-github'> {this.props.github}</a></li>
                                    <li><a href={this.props.website} className='user-dev-website'> {this.props.website}</a></li>
                                    <li className='user-dev-language'>{this.props.specialization}</li>
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