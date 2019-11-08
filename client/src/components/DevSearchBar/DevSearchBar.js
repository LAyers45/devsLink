import React from 'react';
import '../DevSearchBar/DevSearchBar.css'

const DevSearchBar = (props) => {
    return (
        <form className="search-area">
            <div className="form-group">
                <label htmlFor="searchDevs">Search For Develepers</label>
                <form >
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        type="text"
                        username=""
                        email=""
                        className="form-control"
                        placeholder="Search for other Developers"
                        id=""
                    />
                    <button type="submit" onClick={props.handleFormSubmit}>Search</button>
                </form>
            </div>
        </form >
    )
}

export default DevSearchBar;