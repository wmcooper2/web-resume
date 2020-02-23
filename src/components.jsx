import React from "react";
import { IconContext } from "react-icons";
import { FaQrcode } from "react-icons/fa";
import smallPic from "./picture-small.jpg";
import medPic from "./picture-medium.jpg";
import largePic from "./picture-large.jpg";

const smallMax = 481;
const medMax = 1025;
const listItemPadding = "9px";
// const headerPadding = "6px";

const ProfileBar = props => {
  //   console.log("ProfileBar: ", props);
  const { screenW, changeLanguage, language } = props;
  const myName =
    language === "English" ? "Wandal Cooper" : "クーパー　ワンダル";

  const image =
    screenW < smallMax ? smallPic : screenW < medMax ? medPic : largePic;
  const barHeight =
    screenW < smallMax ? "80px" : screenW < medMax ? "100vh" : "100vh";
  const lang = language === "English" ? "日本語" : "English";
  const nameSize =
    screenW < smallMax ? "medium" : screenW < medMax ? "x-large" : "x-large";

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

  let imageStyles = { display: "flex", overflow: "hidden" };
  let pictureStyles = {};
  if (image === medPic) {
    imageStyles.margin = "auto auto";
  }

  const iconStyles = { color: "white", size: "3em" };
  return (
    <div className="profilebar" style={{ height: barHeight }}>
      <div className="picture" sytle={pictureStyles}>
        <img src={image} alt="profile pic" style={imageStyles} />
      </div>
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
      <div className="qrcode">
        <IconContext.Provider value={iconStyles}>
          <FaQrcode />
        </IconContext.Provider>
      </div>
    </div>
  );
};

const Description = props => {
  //   console.log("Description: ", props);
  const { title, content, screenW, language, japaneseTitle } = props;
  //   const textAlign = screenW < smallMax ? "left" : "center";

  return (
    <div className="description">
      <h3>{language === "English" ? title : japaneseTitle}</h3>
      <p style={{ textAlign: "center", padding: listItemPadding }}>{content}</p>
    </div>
  );
};

const Projects = props => {
  //"my web presence" section
  const { title, content, language, japaneseTitle } = props;
  const projectStyles = { padding: listItemPadding, textAlign: "center" };
  let projects = [];
  for (let project of content) {
    projects.push(
      <div key={projects.length} style={projectStyles}>
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
      <div
        className="skill"
        key={skills.length}
        style={{ padding: listItemPadding }}
      >
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
const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  padding: listItemPadding
};
const Education = props => {
  //   console.log("Education: ", props);
  const { title, content } = props;
  let schools = [];
  // if the size is small, include the years
  for (let item of content) {
    // console.log(item);
    schools.push(
      <div
        className="school"
        key={schools.length}
        style={{ padding: listItemPadding }}
      >
        <span className="schoolname">{item.what}</span>
        <span className="schoollocation">{item.where}</span>
        <span className="schooldate">{item.when[1].getFullYear()}</span>
      </div>
    );
  }
  return (
    <div className="education">
      <h3>{title}</h3>
      <div className="schoolsheader" style={headerStyles}>
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
  const certStyles = {
    textDecoration: "none",
    padding: listItemPadding,
    textAlign: "center"
  };
  let certs = [];
  for (let cert of content) {
    // console.log(cert);
    certs.push(
      <div key={certs.length} style={certStyles}>
        <a href={cert.url}>{cert.what}</a>
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
