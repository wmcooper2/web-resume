import React from "react";
import { IconContext } from "react-icons";

const smallMax = 481;
const medMax = 1025;

const ProfileBar = props => {
  //   console.log("ProfileBar: ", props);
  const { screenW, changeLanguage, language } = props;

  const myName =
    language === "English" ? "Wandal Cooper" : "クーパー　ワンダル";
  const barHeight =
    screenW < smallMax ? "80px" : screenW < medMax ? "100vh" : "100vh";
  const lang = language === "English" ? "日本語" : "English";
  const nameSize =
    screenW < smallMax ? "small" : screenW < medMax ? "large" : "large";

  const nameStyles = {
    fontSize: nameSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  };
  const engjapStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div className="profilebar" style={{ height: barHeight }}>
      <div className="picture"></div>
      <div className="name" style={nameStyles}>
        {myName}
      </div>
      <div
        className="engjap"
        style={engjapStyles}
        onClick={() => changeLanguage()}
      >
        {lang}
      </div>
      <div className="qrcode">QR Code</div>
    </div>
  );
};

const Description = props => {
  //   console.log("Description: ", props);
  const { title, content, screenW, language, japaneseTitle } = props;
  const textAlign = screenW < smallMax ? "left" : "center";
  return (
    <div className="description">
      <h3>{language === "English" ? title : japaneseTitle}</h3>
      <p style={{ textAlign: textAlign }}>{content}</p>
    </div>
  );
};

const Projects = props => {
  const { title, content, language, japaneseTitle } = props;
  let projects = [];
  for (let project of content) {
    projects.push(
      <div key={projects.length}>
        <a href={project.url}>{project.what}</a>
      </div>
    );
  }
  return (
    <div className="projects">
      <h3>{language === "English" ? title : japaneseTitle}</h3>
      {projects}
    </div>
  );
};

const Skills = props => {
  const { title, content, language, japaneseTitle } = props;
  let skills = [];
  for (let skill of content) {
    skills.push(
      <div className="skill" key={skills.length}>
        <div>{skill.what}</div>
        <IconContext.Provider value={{ color: "blue", size: "1.5em" }}>
          {skill.logo}
        </IconContext.Provider>
      </div>
    );
  }
  return (
    <div className="skills">
      <h3>{language === "English" ? title : japaneseTitle}</h3>
      {skills}
    </div>
  );
};

const Experiences = props => {
  const { title, content } = props;
  return (
    <div className="experiences">
      <h3>{title}</h3>
      {content}
    </div>
  );
};

const Education = props => {
  //   console.log("Education: ", props);
  const { title, content } = props;
  let schools = [];
  // if the size is small, include the years
  for (let item of content) {
    // console.log(item);
    schools.push(
      <div className="school" key={schools.length}>
        <span className="schoolname">{item.what}</span>
        <span className="schoollocation">{item.where}</span>
        <span className="schooldate">{item.when[1].getFullYear()}</span>
      </div>
    );
  }
  return (
    <div className="education">
      <h3>{title}</h3>
      <div className="schoolsheader">
        <span className="schoolname">School</span>
        <span className="schoollocation">Location</span>
        <span className="schooldate">Dates</span>
      </div>
      {schools}
    </div>
  );
};

const Certifications = props => {
  const { title, content } = props;
  let certs = [];
  for (let cert of content) {
    // console.log(cert);
    certs.push(
      <div key={certs.length}>
        <a href={cert.url} style={{ textDecoration: "none" }}>
          {cert.what}
        </a>
      </div>
    );
  }
  return (
    <div className="certifications">
      <h3>{title}</h3>
      {certs}
    </div>
  );
};

export {
  ProfileBar,
  Description,
  Projects,
  Skills,
  Experiences,
  Education,
  Certifications
};
