import React from "react";
import "./DevWorks.css";
import Footer from '../../components/Footer/Footer';
import HardCodeProjectCard from '../../images/hard-code-project-card.svg';






function DevWorks() {
    return (
        <React.Fragment>
            <div className="devworks-page-container">
                <div className="devworks-page-row">
                    <img className="project-card" src={HardCodeProjectCard} alt="Hard code project card" />
                    <img className="project-card" src={HardCodeProjectCard} alt="Hard code project card" />
                    <img className="project-card" src={HardCodeProjectCard} alt="Hard code project card" />
                    <img className="project-card" src={HardCodeProjectCard} alt="Hard code project card" />
                </div>
            </div>
            <Footer />
        </React.Fragment>

    )

}

export default DevWorks;