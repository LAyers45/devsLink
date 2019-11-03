import React from "react";
import "./Onload.css";
import BackgroundImage from '../../images/background-devslink.png';
import logo from '../../images/devs-link-logo.png';
import Devs from '../../images/devs.png';
import Mail from '../../images/mail.png';

import { Container, Row, Col } from 'reactstrap';






function OnLoad() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>


                    <div className="animated fadeIn">
                        <Col className="background-area-onload">
                            <img src={BackgroundImage} className="backgroundImage" alt=" devs link" />
                            <img src={Mail} className="animated flipInY mail" alt=" mail" />
                            <img src={Devs} className="animated flipInY devs" alt=" devs" />
                        </Col>
                        <Col className="text-area-onload">
                            <img src={logo} className="logo" alt=" devs link logo" />
                            <h1 className="textOne">devslink is a community for developers to create or find projects they would like to work on.</h1>
                            <h1 className="textTwo">To get started just sign up.</h1>
                            <a href="/signUp"><button type="button" className="signUp ">Sign-Up</button></a>
                            <a href="/signIn"><button type="button" className="signIn">Sign-In</button></a>
                        </Col>
                    </div>
                </Row>
            </Container >
        </React.Fragment>
    )

}

export default OnLoad;