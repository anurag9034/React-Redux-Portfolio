import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
//import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
//import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <p class="projects-header-detail-text subTitle">
                  While pursuing my Bachelors, I was introduced to programming
                  by a close friend. Since being introduced to programming, I
                  have read through as much material as one can possibly go
                  through, worked on a number of projects both as a hobby and as
                  well as in-production during my tenure as a Front-End
                  Developer.
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {/* <Certifications theme={this.props.theme} /> */}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
