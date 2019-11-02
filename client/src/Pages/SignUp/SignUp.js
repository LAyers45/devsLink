import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
//import { Container, Row } from "../../components/Container/Container";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { GithubLoginButton } from "react-social-login-buttons";
// npm install bootstrap reactstrap react-social-login-buttons



class SignUp extends Component {
    state = {
        user: [],
        username: "",
        email: "",
        password: ""
    };

    // componentDidMount() {
    //     this.loadUser();
    // }

    loadUser = () => {
        API.saveUser()
        let loggedin = false
            .then(res =>
                this.setState({ User: res.data, username: "", email: "", password: "" }),
                document.location.href = "/main",
                loggedin = true,
                console.log(loggedin)
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
        if (this.state.username && this.state.email && this.state.password) {
            API.saveUser({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => this.loadUser())

                .catch(err => alert("error"));
        }
    };

    render() {
        return (


            <Form className="signup-form">
                <h1 className="text-center">Sign Up To DevsLink</h1>
                <FormGroup>
                    <Label>User Name</Label>
                    <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="User Name"
                        placeholder="User Name (required)"
                    />
                    <Label>Email</Label>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email (required)"
                    />
                    <Label>Password</Label>
                    <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password (required)"
                    />

                    <Button className="btn-lg btn-dark btn-block"
                        disabled={!(this.state.username && this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Create User Profile
                            </Button>
                    <div className="text-center pt-3">
                        Or Use GitHub
                            </div>
                    <GithubLoginButton className="mt-3 mb-3"></GithubLoginButton>
                </FormGroup>
            </Form>


        );
    }
}

export default SignUp;