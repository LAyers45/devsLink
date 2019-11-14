import React, { Component } from "react";
import "./SignIn.css";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";
import Footer from '../../components/Footer/Footer';
import BackButton from '../../images/back_button.png';





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

                            email: res.data.email,
                            // id: res.data.id

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
                <div className="container-signin">
                    <Form className="signin-form">
                        <div className="row-signin-header">
                            <div className="back-button-wrapper">
                                <a href="/"><img src={BackButton} className="back_button" alt="back button" /></a>
                            </div>
                            <h1 className="text-center">Sign In</h1>
                        </div>
                        <FormGroup className="sign-in-form-group">
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
                                Login
                                            </button>
                        </FormGroup>


                    </Form>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default SignIn;