import React from "react";
import "./Main.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LogoMultiple from '../../images/logo-multiple.png';
import DevSearch from '../../images/dev-search.png';
import DevWorks from '../../images/dev-works.png';
import UserProfile from '../../images/user-profile.png';
import Project from '../../images/project.png';

import { Container, Row, Col } from 'reactstrap';






function MainPage() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <img src={LogoMultiple} className="logoMultiple" alt="logo multiple" />
                    <Col lg="12">
                        <img src={DevSearch} className="cards" id="cardSearch" alt="dev search" />
                        <img src={DevWorks} className="cards" id="cardWorks" alt="dev works" />
                        <img src={UserProfile} className="cards" id="cardUser" alt="profile" />
                        <img src={Project} className="cards" id="cardProject" alt="project" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )

}

export default MainPage;