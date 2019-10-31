import React, { Component } from "react";
import "./EditUser";
import API from "../../utils/API";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';


class EditUser extends Component {
    state = {
        user: [],
        username: "",
        email: "",
        password: "",
        image: "",
        specialization: ""

    };

    render() {
        return (
            <div>
                <Navbar />
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
                    </FormGroup>
                </Form>
                <Footer />
            </div>
        )

    }
}
export default EditUser;