import React from "react";
import "./App.sass";
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
    this.state = { screenW: 0, screenH: 0 };
    this.updateScreenSize = this.updateScreenSize.bind(this);
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

  render() {
    return (
      <div className="resume">
        <ProfileBar {...this.state} />
        <div className="details">
          <Description
            {...description}
            {...this.state}
          />
          <Projects
            {...projects}
            {...this.state}
          />
          <Skills
            {...skills}
            {...this.state}
          />
          {/* <Experiences {...experiences} /> */}
          <Education
            {...education}
            {...this.state}
          />
          <Certifications
            {...certifications}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
