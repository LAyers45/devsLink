import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import '../DevCard/DevCard.css';
import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'



class DevSearchCards extends Component {

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

                <div className="section">
                    <div className="dev-card-wrapper">
                        <div className="dev-card">
                            {/* <div className="dev-card-back-img">
                                <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
                                <h1 className="dev-name">
                                    DonRiche
                                    </h1>
                            </div> */}
                            {/* <ul className="dev-link-info">
                                <h2>{this.props.name}</h2>
                                <h3>{this.props.email}</h3>

                            </ul> */}
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
};

export default DevSearchCards;