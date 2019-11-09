import React, { Component } from "react";
import "./SignIn";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";
import Footer from '../../components/Footer/Footer'




class SignIn extends Component {
    state = {
        username: "",
        password: "",
        onSuccess: "",
        onFailure: ""

    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.signin({
                username: this.state.username,
                password: this.state.password
            })
                .then(res => {
                    console.log(res.data)
                    if (res.status === 200) {
                        console.log("Success")
                        this.setState({
                            onSuccess: "Signin was successful",
                            onFailure: ""
                        });
                        this.props.bindUser({
                            username: res.data.username,
                            id: res.data._id,
                            loggedIn: true
                        });
                    }
                })

                .catch(err =>
                    this.setState({
                        onSuccess: "",
                        onFailure: "Sign in information is incorrect"
                    })
                );
        }
    }


    render() {
        return (

            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Form className="signup-form">
                                <Row>
                                    <Col>
                                        <a href="/"><button type="button" className="backButton "> &lt;</button></a>
                                        <h1 className="text-center">Sign In To DevsLink</h1>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup className="sign-up-form-group">
                                            <Label>User Name</Label>
                                            <Input
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleInputChange}
                                                type="User Name"
                                                placeholder="User Name (required)"
                                            />
                                            <Label>Password</Label>
                                            <Input
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                type="password"
                                                placeholder="Password (required)"
                                            />

                                            <button className="btn-lg btn-dark btn-block" id="signupbtn"
                                                disabled={!(this.state.username && this.state.password)}
                                                onClick={this.handleFormSubmit}
                                            >
                                                Sign-in

                                </button>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignIn;