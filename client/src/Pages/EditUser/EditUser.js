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

    handleChange = (e) => {
        //console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit} className="card">
                                <FormGroup>
                                    <Row>
                                        <Col className="user-card-respoonsive-col-pic">
                                            <img src={profilePic} className="profile-pic" alt="profile-pic" />

                                            <div className="input-field">
                                                <label htmlFor="username">Username</label>
                                                <input type="text" id="username" onchange={this.handleChange} />
                                            </div>

                                        </Col>
                                        <Col className="user-card-respoonsive-col-info">

                                            <div className="input-field">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" placeholder="Your Email"
                                                    onchange={this.handleChange} />
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="github">Github</label>
                                                <input type="text" id="github" placeholder="Your Github"
                                                    onchange={this.handleChange} />
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="website">Website</label>
                                                <input type="text" id="website" placeholder="Your Website.com"
                                                    onchange={this.handleChange} />
                                            </div>

                                            <div className="input-field">
                                                <label htmlFor="specialization">Programming Languages:</label>
                                                <input type="text" id="specialization" placeholder="Proficient Languages"
                                                    onchange={this.handleChange} />
                                            </div>

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