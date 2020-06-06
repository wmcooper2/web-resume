import React from "react";
import "./App.sass";
import Name from "./components/name";
import Skills from "./components/skills";
import ProfessionalExperience from "./components/professionalexperience";
import Summary from "./components/summary";
import Education from "./components/education";
import Certifications from "./components/certifications";
import {
  description,
  professionalExperience,
  education,
  certifications,
  skills,
} from "./data";
import { ENGLISH, JAPANESE } from "./constants.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ENGLISH,
    };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.flipPic = this.flipPic.bind(this);
  }

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }

  updateScreenSize() {
    this.setState({
      screenW: window.innerWidth,
      screenH: window.innerHeight,
    });
  }

  changeLanguage = () => {
    let lang = this.state.language === ENGLISH ? JAPANESE : ENGLISH;
    this.setState({ language: lang });
  };

  flipPic = () => {
    this.setState(() => {
      return { casualPicFlipped: !this.state.casualPicFlipped };
    });
  };

  render() {
    return (
      <div className="resume">
        <Name changeLanguage={this.changeLanguage} lang={this.state.language} />
        <a href="/download-resume" style={{textDecoration: "none"}}>
          <span id="download">Download PDF Resume</span>
        </a>
        <Summary data={description} lang={this.state.language} />
        <Skills data={skills} />
        <ProfessionalExperience
          data={professionalExperience}
          lang={this.state.language}
        />
        <Education data={education} lang={this.state.language} />
        <Certifications data={certifications} lang={this.state.language} />
      </div>
    );
  }
}

export default App;
