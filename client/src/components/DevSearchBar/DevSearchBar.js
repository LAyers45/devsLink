import React, { Component } from 'react';
import '../DevSearchBar/DevSearchBar.css'

class DevSearchBar extends Component {
    render(props) {
        return (

            <div className="search-area">
                <div className="form-group">
                    <label htmlFor="searchDevs">Search For Develepers</label>
                    <form >
                        <input
                            value={this.search}
                            onChange={this.handleInputChange}
                            type="text"
                            username=""
                            email=""
                            className="form-control"
                            placeholder="Search for other Developers"
                            id=""
                        />
                        <button type="submit" onClick={this.handleFormSubmit}>Search</button>
                    </form>
                </div>
            </div >

        )
    }
}

export default DevSearchBar;