import React, { Component } from "react";
import "../DevSearch/DevSearch.css";
import Footer from '../../components/Footer/Footer';
//import DevCard from '../../components/DevCard/DevCard'
//import DevSearchCards from '../../components/DevSearchCards/DevSearchCards';
import API from "../../utils/API";
import DevSearchBar from "../../components/DevSearchBar/DevSearchBar";

import { DevSearchList, DevCard } from "../../components/List";
import { Link } from "react-router-dom";




class DevSearch extends Component {


    state = {
        devs: [],
        username: "",
        email: "",
        sort: "",
        searchField: "",
        isLoaded: false,
    };

    componentDidMount() {
        this.loadDevs();
    }

    loadDevs = () => {
        API.getDevs()
            .then(res =>
                this.setState({ devs: res.data, username: "", email: "" })
            )
            .catch(err => console.log(err));
    };






    render() {
        //const postDevs = this.state.users.map(user =>
        // )

        // var { isLoaded, devs } = this.state;

        // if (!isLoaded) {
        //     return <div>Loading...</div>
        // }


        // else {

        return (
            <React.Fragment>



                <div className='row'>
                    <DevSearchBar />
                    <div className='column'>


                        {this.state.devs.length ? (
                            <DevSearchList>
                                {this.state.devs.map(dev => (
                                    <DevCard key={dev._id}>
                                        <Link to={"/devs/" + dev._id}>
                                            <h1 className="dev-name">
                                                {dev.username}
                                            </h1>
                                            <ul className="dev-link-info">

                                                <div>{dev.email}</div>

                                            </ul>

                                        </Link>
                                        {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                    </DevCard>
                                ))}
                            </DevSearchList>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </div>

                </div>
                <Footer />

            </React.Fragment>
        )

    }
}



export default DevSearch;