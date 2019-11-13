import React, { Component } from "react";
import "../../Pages/EditUser/EditUser.css";
import API from "../../utils/API";
import Footer from '../../components/Footer/Footer';
import { Form, FormGroup, Input } from 'reactstrap';
import profilePic from '../../images/default-profile-pic.png';




class EditUser extends Component {
    state = {
        email: this.props.email,
        username: this.props.username,
        id: this.props.id,
        github: this.props.github,
        website: this.props.website,
        specialization: this.props.specialization

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.updateInfo(this.props.id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    github: this.state.github,
                    website: this.state.website,
                    specialization: this.state.specialization
                })


            })

            .catch(err => this.setState({
                onSuccess: "",
                onFailure: "Unsuccessful Signup"
            })
            );
    };

    render() {
        return (
            <React.Fragment>

                <Form className="edit-card">
                    <FormGroup className="edit-user-dev-card">
                        <div alt="dev card background" className="edit-dev-card-back-img" >
                            <img src={profilePic} alt="dev profile image" className="edit-user-dev-card-img" />
                            <div className="username-edit-user-page">
                                {this.props.username}
                            </div>
                        </div>
                        <div className="edit-user-dev-link-info">
                            <span className="user-card-span">Email:</span>
                            <Input
                                className="email"
                                placeholder={this.props.email}>
                            </Input>
                            <span className="user-card-span">Github:</span>
                            <Input className="github" placeholder={this.props.github}>
                            </Input>
                            <span className="user-card-span">Website:</span>
                            <Input className="website" placeholder={this.props.website}>
                            </Input>
                            <span className="user-card-span">Programming Languages:</span>
                            <Input className="languages" placeholder={this.props.specialization}>
                            </Input>
                            <a id="buttonSaveInfo" className="btn btn-danger" href="/edit" role="button" onClick={this.handleFormSubmit}
                            >Save</a>
                        </div>
                    </FormGroup>
                </Form>


                <Footer />
            </React.Fragment>
        )

    }
}
export default EditUser;