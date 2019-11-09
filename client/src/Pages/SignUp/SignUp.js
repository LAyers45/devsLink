import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
//import { Container, Row } from "../../components/Container/Container";
//import { Input, TextArea, FormBtn } from "../../components/Form";

import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { GithubLoginButton } from "react-social-login-buttons";
import Footer from '../../components/Footer/Footer';

import { bindActionCreators } from 'redux';
// import { useDispatch } from 'react-redux'
import store from "../../store";
import { connect } from 'react-redux';
import { signIn } from '../../actions';




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
            .then(res =>
                this.setState({ User: res.data, username: "", email: "", password: "" }),
                document.location.href = "/main"
                // signIn()

            )
            .catch(err => console.log(err));

    };

    signIn = (event) => {
        event.preventDefault();
        // let dispatch = useDispatch();
        store.dispatch(signIn());

    }

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
        // const dispatch = useDispatch();
        return (

            <React.Fragment>
                <div className="container-signup">
                    <Form className="signup-form">
                        <div className="row-signup-header">
                            <a href="/"><button type="button" className="backButton "> &lt;</button></a>
                            <h1 className="text-center">Sign Up</h1>
                        </div>
                        <FormGroup className="sign-up-form-group">
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

                            <button className="btn-lg btn-dark btn-block" id="signupbtn"
                                disabled={!(this.state.username && this.state.email && this.state.password)}
                                onClick={this.signIn, this.handleFormSubmit}
                            >
                                Create User Profile
    
                                </button>
                            <div className="gitText text-center pt-3">
                                Or Use GitHub
    
                            </div>
                            <GithubLoginButton className="mt-3 mb-3"></GithubLoginButton>
                        </FormGroup>

                    </Form>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signIn, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);