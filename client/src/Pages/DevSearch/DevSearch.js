import React, { Component } from "react";
import "../DevSearch/DevSearch.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
//import DevCard from '../../components/DevCard/DevCard'
import DevSearchCards from '../../components/DevSearchCards/DevSearchCards';
//import API from "../../utils/API";
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         users: [],
    //         searchField: ''
    //     }
    // }

    // componentDidMount() {
    //     API.getUsers()
    //         .then(res => this.setState({ breeds: res.data.message }))
    //         .catch(err => console.log(err));
    // }

    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };

    // searchUser = (event) => {
    //     event.preventDefault();
    //     API.getUsers()
    //         .then(res =>
    //             this.setState({ users: res.data, username: "", email: "", specilization: "" })
    //         )
    //         .catch(err => console.log(err))

    // }

    // handleSearch = (event) => {
    //     this.setState({ searchField: event.target.value })
    // }

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            sort: '',
            searchField: '',
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }


    render() {
        //const postDevs = this.state.users.map(user =>
        // )

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

            return (
                <React.Fragment>

                    <Navbar />

                    <div className='row'>
                        <DevSearchBar />
                        <div className='column'>
                            <DevSearchCards
                                item={this.state.items}
                            />
                            {/* <ul>
                                {items.map(item => (
                                    <li key={item.id}>
                                        Name: {item.name}| Email: {item.email}
                                    </li>
                                ))};
                            </ul> */}

                        </div>

                    </div>


                    <Footer />

                </React.Fragment>
            )

        }
    }
}

export default DevSearch;