import React from 'react';
import logo from '../../images/devs-link-logo.png';
import './Navbar.css';

import { Container, Row, Col } from 'reactstrap';


export default function navbar() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-link"> <a className="anchor-nav" href="/main"> <img src={logo} className="App-logo" alt="logo" /></a></li>
                            <li id="searchLink" className="nav-link"><a className="anchor-nav" href="/devsearch">Dev Search</a></li>
                            <li id="worksLink" className="nav-link"><a className="anchor-nav" href="/devworks">Dev Works</a></li>
                            <li id="profileLink" className="nav-link"><a className="anchor-nav" href="/user">User Profile</a></li>
                            <li id="projectLink" className="nav-link"><a className="anchor-nav" href="/project">Project</a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>

    )
}
