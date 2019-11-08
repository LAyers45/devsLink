import React, { Component } from "react";
import "../DevSearch/DevSearch.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
//import DevCard from '../../components/DevCard/DevCard'
import DevSearchCards from '../../components/DevSearchCards/DevSearchCards';
import API from "../../utils/API";
import DevSearchBar from "../../components/DevSearchBar/DevSearchBar";





class DevSearch extends Component {

    // state = {
    //     user: []
    // };

    //componentDidMount() {
    //  this.loadUser();
    //};

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.username && this.state.email && this.state.password) {
    //         API.getUser({
    //             //id: id,
    //             username: this.state.username,
    //             email: this.state.email,
    //             github: this.state.github,
    //             specialization: this.state.specialization
    //         })
    //             .then(res => this.loadUser())

    //             .catch(err => alert("error"));
    //     }
    // };
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({ breeds: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    searchUser = (event) => {
        event.preventDefault();
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data, username: "", email: "", specilization: "" })
            )
            .catch(err => console.log(err))

    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }


    render() {
        //const postDevs = this.state.users.map(user =>
        // )

        return (
            <div>
                <Navbar />

                <div className='row'>
                    <DevSearchBar />
                    <div className='column'>
                        <DevSearchCards
                        //id={user.id}
                        //key={user.id}
                        //name={user.name}
                        //image={user.image}
                        //email={user.email}
                        //github={user.github}
                        //specialization={user.specialization}
                        />
                    </div>

                </div>


                <Footer />
            </div >
        )

    }
}

export default DevSearch;