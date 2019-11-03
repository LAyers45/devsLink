import React from 'react';
import './UserInfoCard.css'
import profilePic from '../../images/default-profile-pic.png'
import { Container, Row, Col } from 'reactstrap';


export default function UserInfoCard() {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <div className="card">
                            <Row>
                                <Col className="user-card-respoonsive-col-pic">
                                    <img src={profilePic} className="profile-pic" alt="profile-pic" />
                                    <div className="username">
                                        Username
                                    </div>
                                </Col>
                                <Col className="user-card-respoonsive-col-info">
                                    <span className="user-card-span">Email:</span>
                                    <div className="email">
                                        emai@gmail.com
                                    </div>
                                    <span className="user-card-span">Github:</span>
                                    <div className="github">
                                        Github
                                    </div>
                                    <span className="user-card-span">Website:</span>
                                    <div className="website">
                                        somewebsite.com
                                    </div>
                                    <span className="user-card-span">Programming Languages:</span>
                                    <div className="languages">
                                        React
                                        Javascript
                                        Python
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="user-card-respoonsive-col-button">
                                    <a id="buttonEdit" className="btn btn-danger" href="/edit" role="button" >Edit</a>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}