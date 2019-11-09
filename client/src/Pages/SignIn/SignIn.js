import React, { Component } from "react";
import "./SignIn.css";
import API from "../../utils/API";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '../../components/Footer/Footer';




// npm install bootstrap reactstrap react-social-login-buttons



class SignIn extends Component {
    state = {
        user: [],
        username: "",
        password: ""
    };

    // componentDidMount() {
    //     this.loadUser();
    // }

    loadUser = () => {
        API.saveUser()
            .then(res =>
                this.setState({ User: res.data, username: "", password: "" }),
                document.location.href = "/main",
            )
            .catch(err => console.log(err));

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
            API.saveUser({
                username: this.state.username,
                password: this.state.password
            })
                .then(res => this.loadUser())

                .catch(err => alert("error"));
        }
    };

    render() {
        return (

            <React.Fragment>
                <div className="container-signin">
                    <Form className="signin-form">
                        <div className="row-signin-header">
                            <a href="/"><button type="button" className="backButton "> &lt;</button></a>
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