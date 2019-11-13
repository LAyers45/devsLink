import React, { Component } from "react";
import "./SignIn.css";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";
import Footer from '../../components/Footer/Footer'
import { Redirect } from "react-router-dom"




class SignIn extends Component {
    state = {
        username: "",
        password: "",
        onSuccess: "",
        onFailure: "",
        acquiredPath: null

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
                        return this.props.updateUserInfo({
                            loggedIn: true,
                            username: res.data.username,
                            email: res.data.email
                        });
                    }

                    this.setState({
                        onSuccess: "",
                        onFailure: "System Error"
                    })

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
        if (this.props.loggedIn) {
            return <Redirect to={{ pathname: '/main' }} />
        }

        return (

            <React.Fragment>
                <div className="container-signin">
                    <Form className="signin-form">
                        <div className="row-signin-header">
                            <div className="header-button-wrapper">
                                <a href="/"><button type="button" className="backButton "> &lt;</button></a>
                            </div>
                            <div className="header-wrapper">
                                <h1 className="text-center">Sign In</h1>
                            </div>
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