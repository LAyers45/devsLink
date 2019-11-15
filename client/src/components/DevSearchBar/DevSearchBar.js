
import React from 'react';
import '../DevSearchBar/DevSearchBar.css';
import './DevSearchBar.css'

const DevSearchBar = (props) => {
    return (
        <div className="form-group">
            <label className="devsearchbar-label" htmlFor="searchDevs">Search for Devs</label>
            <form className="devsearchbar-form">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    name="searchField"
                    value={props.devSearch}
                    onChange={props.handleInputChange}
                    placeholder="Search For other Developers"
                />
                <button type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    )
}

export default DevSearchBar;