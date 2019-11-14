import React from 'react';
import '../DevSearchBar/DevSearchBar.css';
import './DevSearchBar.css'

const DevSearchBar = (props) => {
    return (
        <form className="search-area">
            <div className="form-group">
                <label className="devsearchbar-label" htmlFor="searchDevs">Search for Devs</label>
                <form className="devsearchbar-form">
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        type="text"
                        username=""
                        email=""
                        className="form-control"
                        placeholder="Dev Name"
                        id=""
                    />
                    <button type="submit" onClick={props.handleFormSubmit}>Search</button>
                </form>
            </div>
        </form >
    )
}

export default DevSearchBar;