import React from "react";
import "./Project.css";
import Footer from '../../components/Footer/Footer';
import ProjectCardView from '../../images/project-card-view.png'




function Project() {
    return (
        <React.Fragment>
            <div className="project-page-container">
                <div className="project-page-row">
                    <img className="project-card-view" src={ProjectCardView} alt="Project card view" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )

}

export default Project;