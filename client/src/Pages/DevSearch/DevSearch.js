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

                <DevCard className="dev-search-card" />

            </div>


            <Footer />
        </div >
    )

}

export default DevSearch;