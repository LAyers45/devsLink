import React, { Component } from "react";
import "./UserPage";
import API from "../../utils/API";
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

class UserPage extends Component {
    state = {
        user: []

    };

    // componentDidMount() {
    //     API.getUser(this.props.match.params.id)
    //         .then(res => this.setState({ user: res.data }))
    //         .catch(err => console.log(err));
    //     console.log(this.state)
    // }



    render() {
        return (
            <React.Fragment>
                <Navbar />
                <UserInfoCard />
                <Footer />
            </React.Fragment>

        )

    }
}
export default UserPage;