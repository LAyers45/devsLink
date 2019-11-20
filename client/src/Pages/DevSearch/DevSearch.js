import React, { Component } from "react";
import "../DevSearch/DevSearch.css";
import Footer from '../../components/Footer/Footer';
import API from "../../utils/API";
import DevSearchBar from "../../components/DevSearchBar/DevSearchBar";

import { DevSearchList } from "../../components/DevCard/DevCard";
import { Link } from "react-router-dom";




class DevSearch extends Component {


    state = {
        devs: [],
        username: "",
        email: "",
        sort: "",
        searchField: "",
        isLoaded: false
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

                <DevSearchBar />

                <div className='devsearch-row'>


                    {this.state.devs.length ? (
                        <DevSearchList>
                            {this.state.devs.map(dev => (
                                <ul className="dev-link-info">
                                    <Link className="devsearch-anchor-link" to={"/devs/" + dev._id}>
                                        <h1 className="devsearch-name">
                                            {dev.username}
                                        </h1>
                                    </Link>
                                    <h2 className="devsearch-email"><a className="devsearch-anchor" href={"mailto:" + dev.email}>{dev.email}</a></h2>




                                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                    {/* </DevCard> */}
                                </ul>
                            ))}
                        </DevSearchList>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}

                </div>
                <Footer />

            </React.Fragment>
        )

    }
}



export default DevSearch;