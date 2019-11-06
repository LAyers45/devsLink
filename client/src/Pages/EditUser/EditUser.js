import React, { Component } from "react";
import "../../Pages/EditUser/EditUser.css";
import API from "../../utils/API";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import profilePic from '../../images/default-profile-pic.png'



class EditUser extends Component {
    state = {
        user: []

    };

    componentDidMount() {
        API.getUser(this.props.match.params.id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <Form className="card">
                                <FormGroup>
                                    <Row>
                                        <Col className="user-card-respoonsive-col-pic">
                                            <img src={profilePic} className="profile-pic" alt="profile-pic" />
                                            <div className="username">
                                                Username
                                    </div>
                                        </Col>
                                        <Col className="user-card-respoonsive-col-info">
                                            <span className="user-card-span">Email:</span>
                                            <Input className="email" placeholder="email@gmail.com">
                                            </Input>
                                            <span className="user-card-span">Github:</span>
                                            <Input className="github" placeholder="Your Github">
                                            </Input>
                                            <span className="user-card-span">Website:</span>
                                            <Input className="website" placeholder="Yourwebsite.com">
                                            </Input>
                                            <span className="user-card-span">Programming Languages:</span>
                                            <Input className="languages" placeholder="Proficient Languages">
                                            </Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="user-card-respoonsive-col-button">
                                            <Button id="buttonSaveInfo" role="button" >Save</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )

    }
}
export default EditUser;