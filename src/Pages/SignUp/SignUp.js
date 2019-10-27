import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
import { Container, Row } from "../../components/Container/Container";
import { Input, TextArea, FormBtn } from "../../components/Form";



class SignUp extends Component {
    state = {
        User: [],
        username: "",
        email: "",
        password: ""
    };

    // componentDidMount() {
    // this.loadUser();
    // }

    // loadUser = () => {
    //     API.saveUser()
    //         .then(res =>
    //             this.setState({ User: res.data, username: "", email: "", password: "" })
    //         )
    //         .catch(err => console.log(err));
    // };


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
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>


                    <form>
                        <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            username="User Name"
                            placeholder="User Name (required)"
                        />
                        <Input
                            value={this.state.email}
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
                            disabled={!(this.state.username && this.state.email && this.state.password)}
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