import React, { Component } from "react";
import "../../Pages/EditUser/EditUser.css";
import API from "../../utils/API";
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap';
import profilePic from '../../images/default-profile-pic.png';




class EditUser extends Component {
    state = {
        user: []

    };

    // componentDidMount() {
    //     API.getUser(this.props.match.params.id)
    //         .then(res => this.setState({ user: res.data }))
    //         .catch(err => console.log(err));
    // }

    render() {
        return (
            <React.Fragment>

                <Form className="edit-card">
                    <FormGroup className="edit-user-dev-card">
                        <div alt="dev card background" className="edit-dev-card-back-img" >
                            <img src={profilePic} alt="dev profile image" className="edit-user-dev-card-img" />
                            <div className="username-edit-user-page">
                                Username
                                    </div>
                        </div>
                        <div className="edit-user-dev-link-info">
                            <span className="user-card-span">Email:</span>
                            <Input className="email" placeholder="email@gmail.com">
                            </Input>
                            <span className="user-card-span">Github:</span>
                            <Input className="github" placeholder="github.com/yourgithub">
                            </Input>
                            <span className="user-card-span">Website:</span>
                            <Input className="website" placeholder="yourwebsite.com">
                            </Input>
                            <span className="user-card-span">Programming Languages:</span>
                            <Input className="languages" placeholder="Proficient Languages">
                            </Input>
                            <a id="buttonSaveInfo" className="btn btn-danger" href="/edit" role="button" >Save</a>
                        </div>
                    </FormGroup>
                </Form>


                <Footer />
            </React.Fragment>
        )

    }
}
export default EditUser;