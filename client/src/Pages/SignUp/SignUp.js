import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
//import { Container, Row } from "../../components/Container/Container";
//import { Input, TextArea, FormBtn } from "../../components/Form";

import { Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '../../components/Footer/Footer';
import { Redirect } from "react-router-dom"
import { bindActionCreators } from 'redux';
// import store from "../../store";
import { connect } from 'react-redux';
import { signIn } from '../../actions';

// npm install bootstrap reactstrap react-social-login-buttons

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        onSuccess: "",
        onFailure: ""
    };

    componentDidMount() { }


    messageControls = res => {
        if (res.status === 200) {
            console.log("Successful Signup");
            this.setState({
                onSuccess: "Successful Signup",
                onFailure: ""
            });
            setTimeout(() => this.setState({ acquiredPath: "/main" }), 1250)
        } else {
            this.setState({
                onSuccess: "",
                onFailure: "Unsuccessful Signup"
            });
        }
    };

    // signIn = (event) => {
    //     event.preventDefault();
    //     // let dispatch = useDispatch();
    //     store.dispatch(signIn());

    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.email && this.state.password) {
            API.signup({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => this.messageControls(res))

                .catch(err => this.setState({
                    onSuccess: "",
                    onFailure: "Unsuccessful Signup"
                })
                );
        }
    };

    render() {
        if (this.state.acquiredPath) {
            return <Redirect
                to={{ pathname: this.state.acquiredPath }}
            />


        } else {

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
                                    onClick={this.handleFormSubmit}
                                >
                                    Create User Profile

                                </button>

                            </FormGroup>

                        </Form>
                    </div>
                    <Footer />
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signIn, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);