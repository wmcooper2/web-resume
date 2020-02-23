import React from "react";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ProfileBar,
  Description,
  Projects,
  Skills,
  // Experiences,
  Education,
  Certifications
} from "./components";
import {
  description,
  projects,
  skills,
  // experiences,
  education,
  certifications
} from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenW: 0, screenH: 0, language: "English" };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
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
      screenH: window.innerHeight
    });
  }

  changeLanguage = () => {
    let lang = this.state.language === "English" ? "Japanese" : "English";
    // console.log("change language: ", lang);
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="resume">
        <ProfileBar {...this.state} changeLanguage={this.changeLanguage} />
        <div className="details">
          <Description {...description} {...this.state} />
          <Projects {...projects} {...this.state} />
          <Skills {...skills} {...this.state} />
          {/* <Experiences {...experiences} /> */}
          <Education {...education} {...this.state} />
          <Certifications {...certifications} {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
