import React, { Component } from "react";
import "./SignUp";
import "./Signup.css";
import API from "../utils/API";
import { Container, Row } from "../components/Container";



class SignUp extends Component {
    state = {
        User: [],
        userName: "",
        email: "",
        password: ""
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser()
            .then(res =>
                this.setState({ books: res.data, userName: "", email: "", password: "" })
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
        if (this.state.userName && this.state.email && this.state.password) {
            API.saveUser({
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>


                    <form>
                        <Input
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                            userName="User Name"
                            placeholder="User Name (required)"
                        />
                        <Input
                            value={this.state.eamil}
                            onChange={this.handleInputChange}
                            email="email"
                            placeholder="Email (required)"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            password="password"
                            placeholder="Password (required)"
                        />

                        <FormBtn
                            disabled={!(this.state.userName && this.state.email && this.state.password)}
                            onClick={this.handleFormSubmit}
                        >
                            Create User Profile
                  </FormBtn>
                    </form>

                </Row>
            </Container>
        );
    }
}

export default SignUp;