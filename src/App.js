import React from "react";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileBar from "./components/profilebar";
import Description from "./components/description";
import WebPresence from "./components/webpresence";
import Skills from "./components/skills";
import Education from "./components/education";
import Certifications from "./components/certifications";
import {
  description,
  webPresence,
  skills,
  education,
  certifications,
} from "./data";
import { ENGLISH, JAPANESE } from "./components/utilities_constants.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenW: 0,
      screenH: 0,
      language: ENGLISH,
      casualPicFlipped: false,
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
        <ProfileBar
          {...this.state}
          changeLanguage={this.changeLanguage}
          flipPic={this.flipPic}
        />
        <div className="details">
          <Description {...description} {...this.state} />
          <WebPresence {...webPresence} {...this.state} />
          <Skills {...skills} {...this.state} />
          <Education {...education} {...this.state} />
          <Certifications {...certifications} {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
