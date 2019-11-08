import React from "react";
import "../DevSearch/DevSearch.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DevCard from '../../components/DevCard/DevCard'





function DevSearch() {
    return (
        <div>
            <Navbar />
            <div className='dev-search-row'>
                <div className='column'>
                    <DevCard className="dev-search-card" />
                </div>
                <div className='dev-search-column'>
                    <DevCard className="dev-search-card" />
                </div>
                <div className='column'>
                    <DevCard className="dev-search-card" />
                </div>
                <div className='column'>
                    <DevCard className="dev-search-card" />
                </div>
            </div>


            <Footer />
        </div >
    )

}

export default DevSearch;