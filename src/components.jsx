import React from "react";

const smallMax = 481;
const medMax = 1025;

const ProfileBar = props => {
  //   console.log("ProfileBar: ", props);
  const { screenW, screenH } = props;
  const barHeight =
    screenW < smallMax ? "80px" : screenW < medMax ? "100vh" : "100vh";
  const nameSize =
    screenW < smallMax ? "medium" : screenW < medMax ? "large" : "large";

  return (
    <div className="profilebar" style={{ height: barHeight }}>
      <div className="picture"></div>
      <div className="name" style={{ fontSize: nameSize, textAlign: "center" }}>
        Wandal Cooper
      </div>
      <div className="engjap">EngJap</div>
      <div className="qrcode">QR Code</div>
    </div>
  );
};

const Description = props => {
  //   console.log("Description: ", props);
  const { title, content, screenW } = props;
  const textAlign = screenW < smallMax ? "left" : "center";
  return (
    <div className="description">
      <h3>{title}</h3>
      <p style={{ textAlign: textAlign }}>{content}</p>
    </div>
  );
};

const Projects = props => {
  const { title, content } = props;
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
      <h3>{title}</h3>
      {projects}
    </div>
  );
};

const Skills = props => {
  const { title, content } = props;
  let skills = [];
  for (let skill of content) {
    skills.push(<div key={skills.length}>{skill}</div>);
  }
  return (
    <div className="skills">
      <h3>{title}</h3>
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
    schools.push(<div key={schools.length}>{item.what}</div>);
  }
  return (
    <div className="education">
      <h3>{title}</h3>
      <div className="educationheader">
        <span>School</span>
        <span>Location</span>
        <span>Dates</span>
      </div>
      {schools}
    </div>
  );
};

const Certifications = props => {
  const { title, content } = props;
  let certs = [];
  for (let item of content) {
    // console.log(item);
    certs.push(<div key={certs.length}>{item.what}</div>);
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
