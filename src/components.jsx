import React from "react";
import { IconContext } from "react-icons";
// import { FaQrcode } from "react-icons/fa";
import smallPic from "./picture-small.jpg";
import medPic from "./picture-medium.jpg";
import largePic from "./picture-large.jpg";
import americanFlag from "./americanFlag.png";
import japaneseFlag from "./japaneseFlag.png";

const smallMax = 481;
const medMax = 1025;
const listItemPadding = "9px";
const linkStyles = {
  textDecoration: "none"
};

const getFont = lang => {
  const japaneseFont = { fontFamily: "Noto Serif JP" };
  const englishFont = { fontFamily: "Caveat, Satisfy" };
  if (lang === "English") {
    return englishFont;
  } else {
    return japaneseFont;
  }
};

const ProfileBar = props => {
  const { screenW, changeLanguage, language } = props;
  const myName =
    language === "English" ? "Wandal Cooper" : "クーパー　ワンダル";

  const image =
    screenW < smallMax ? smallPic : screenW < medMax ? medPic : largePic;

  const barHeight =
    screenW < smallMax ? "80px" : screenW < medMax ? "100%" : "100%";
  const lang = language === "English" ? "日本語" : "English";
  const flag = lang === "English" ? americanFlag : japaneseFlag;

  const nameStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  };
  const engjapStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Noto Serif JP"
  };

  let imageStyles = { display: "flex", overflow: "hidden" };
  imageStyles.boxShadow = "2px 2px 2px 2px rgba(0, 0, 0, 0.2)";
  if (image === medPic) {
    imageStyles.margin = "auto auto";
  }

  if (image === largePic) {
    imageStyles.margin = "auto auto";
  }

  let pictureStyles = {};
  if (image === largePic) {
    pictureStyles.width = "200px";
  }

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
        <img
          className="flag"
          src={flag}
          alt="flag"
          width="40px"
          height="40px"
        ></img>
      </div>
      {/* <div className="qrcode"> */}
      {/* <IconContext.Provider value={iconStyles}> */}
      {/* <FaQrcode /> */}
      {/* </IconContext.Provider> */}
      {/* </div> */}
    </div>
  );
};

const Description = props => {
  const { title, content, language, japaneseTitle, japaneseContent } = props;

  return (
    <div className="description">
      <h3 style={getFont(language)}>
        {language === "English" ? title : japaneseTitle}
      </h3>
      <p style={{ textAlign: "center", padding: listItemPadding }}>
        {language === "English" ? content : japaneseContent}
      </p>
    </div>
  );
};

//"my web presence" section
const Projects = props => {
  const { title, content, language, japaneseTitle } = props;
  const projectStyles = { padding: listItemPadding, textAlign: "center" };
  const aTagStyles = {
    textDecoration: "none",
    fontFamily: language === "English" ? "Tahoma" : "Noto Serif JP"
  };
  let projects = [];
  for (let project of content) {
    projects.push(
      <div key={projects.length} style={projectStyles}>
        <a href={project.url} style={aTagStyles}>
          {language === "English" ? project.what : project.japaneseWhat}
        </a>
      </div>
    );
  }
  return (
    <div className="projects">
      <h3 style={getFont(language)}>
        {language === "English" ? title : japaneseTitle}
      </h3>
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
        <div className="skillitem">{skill.what}</div>
        <div className="skillitem">
          <IconContext.Provider value={{ color: "blue", size: "1.5em" }}>
            {skill.logo}
          </IconContext.Provider>
        </div>
      </div>
    );
  }

  return (
    <div className="skills">
      <h3 style={getFont(language)}>
        {language === "English" ? title : japaneseTitle}
      </h3>
      {skills}
    </div>
  );
};

//not used yet
// const Experiences = props => {
// const { title, content, language } = props;
// console.log("Experiences: ", language);
// return (
// <div className="experiences">
{
  /* <h3 style={getFont(language)}>{title}</h3> */
}
{
  /* {content} */
}
{
  /* </div> */
}
// );
// };

const Education = props => {
  //   console.log("Education: ", props);
  let { title, content, screenW, language } = props;
  title = language === "English" ? "Education" : "学歴";
  let schools = [];
  // if the size is small, include the years

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: listItemPadding
  };

  const subHeaders = {
    name: language === "English" ? "School" : "学",
    location: language === "English" ? "Location" : "都市",
    date:
      language === "English" ? (screenW < medMax ? "Finished" : "Dates") : "年"
  };

  for (let item of content) {
    schools.push(
      <div
        className="school"
        key={schools.length}
        style={{ padding: listItemPadding }}
      >
        <span className="schoolname">
          {screenW >= medMax ? item.longWhat : item.shortWhat}
        </span>
        <span className="schoollocation">
          {screenW >= medMax ? item.longWhere : item.shortWhere}
        </span>
        <span className="schooldate">
          {screenW >= medMax
            ? `${item.when[0].getFullYear()} - ${item.when[1].getFullYear()}`
            : item.when[1].getFullYear()}
        </span>
      </div>
    );
  }

  return (
    <div className="education">
      <h3 style={getFont(language)}>{title}</h3>
      <div className="schoolsheader" style={headerStyles}>
        <span style={getFont(language)} className="schoolname">
          {subHeaders.name}
        </span>
        <span style={getFont(language)} className="schoollocation">
          {subHeaders.location}
        </span>
        <span style={getFont(language)} className="schooldate">
          {subHeaders.date}
        </span>
      </div>
      {schools.reverse()}
    </div>
  );
};

const Certifications = props => {
  let { title, content, language } = props;
  const certStyles = {
    textDecoration: "none",
    padding: listItemPadding,
    textAlign: "center"
  };
  title = language === "English" ? "Certifications" : "免許・資格";
  let certs = [];
  for (let cert of content) {
    // console.log(cert);
    certs.push(
      <div key={certs.length} style={certStyles}>
        <a href={cert.url} style={linkStyles}>
          {cert.what}
        </a>
      </div>
    );
  }
  return (
    <div className="certifications">
      <h3 style={getFont(language)}>{title}</h3>
      {certs.reverse()}
    </div>
  );
};

export {
  ProfileBar,
  Description,
  Projects,
  Skills,
  // Experiences,
  Education,
  Certifications
};
