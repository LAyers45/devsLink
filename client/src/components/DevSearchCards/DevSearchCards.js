import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../DevCard/DevCard.css';
import DevCardBackGround from '../../images/dev-card-back.png';
import ProfileImage from '../../images/default-profile-pic.png'



const DevSearchCards = (props) => {

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col className="section">
                        <div className="dev-card-wrapper">
                            <div className="dev-card">
                                <img src={DevCardBackGround} alt="dev card background" className="dev-card-back-img" />
                                <img src={ProfileImage} alt="dev profile image" className="dev-card-img" />
                                <h1 className="dev-name">
                                    DonRiche
                                    </h1>
                                <ul className="dev-link-info">
                                    <h2>{props.name}</h2>
                                    <h3>{props.email}</h3>

                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default DevSearchCards;