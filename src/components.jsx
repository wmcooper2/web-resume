import React from "react";
import ReactCardFlip from "react-card-flip";
import smallPic from "./picture-small.jpg";
import medPic from "./picture-medium.jpg";
import largePic from "./picture-large.jpg";
import casualPic from "./casualpicture.jpg";
import americanFlag from "./americanFlag.png";
import japaneseFlag from "./japaneseFlag.png";

const smallMax = 481;
const medMax = 1025;
const listItemPadding = "9px";

const CAVEAT = "Caveat";
const SATISFY = "Satisfy";
const GARAMOND = "EB Garamond";
const NOTOSERIF = "Noto Serif JP";
const ENGLISH = "English";
const MYNAME = "Wandal Cooper";
const MYJAPANESENAME = "クーパー　ワンダル";

const getFont = lang => {
  const japaneseFont = { fontFamily: NOTOSERIF };
  const englishFont = { fontFamily: `${CAVEAT}, ${SATISFY}` };
  if (lang === ENGLISH) {
    return englishFont;
  } else {
    return japaneseFont;
  }
};

const ProfileBar = props => {
  const {
    screenW,
    changeLanguage,
    language,
    casualPicFlipped,
    flipPic
  } = props;
  const myName = language === ENGLISH ? MYNAME : MYJAPANESENAME;

  const image =
    screenW < smallMax ? smallPic : screenW < medMax ? medPic : largePic;

  const barHeight =
    screenW < smallMax ? "80px" : screenW < medMax ? "100%" : "100%";
  const lang = language === ENGLISH ? "日本語" : ENGLISH;
  const flag = lang === ENGLISH ? americanFlag : japaneseFlag;

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
    fontFamily: NOTOSERIF
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
    pictureStyles.width = "250px";
  }

  return (
    <div className="profilebar" style={{ height: barHeight }}>
      <div className="picture" style={pictureStyles}>
        {screenW >= medMax ? (
          <ReactCardFlip isFlipped={casualPicFlipped}>
            <React.Fragment>
              <img
                src={image}
                alt="profile pic"
                style={imageStyles}
                onClick={() => flipPic()}
              />
            </React.Fragment>
            <React.Fragment>
              <img
                src={casualPic}
                alt="profile pic"
                style={imageStyles}
                onClick={() => flipPic()}
              />
            </React.Fragment>
          </ReactCardFlip>
        ) : (
          <img src={image} alt="profile pic" style={imageStyles} />
        )}
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
  const fontFamily = language === ENGLISH ? GARAMOND : NOTOSERIF;

  return (
    <div className="description">
      <h3 style={getFont(language)}>
        {language === ENGLISH ? title : japaneseTitle}
      </h3>
      <p
        style={{
          textAlign: "center",
          padding: listItemPadding,
          fontFamily: fontFamily
        }}
      >
        {language === ENGLISH ? content : japaneseContent}
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
    fontFamily: language === ENGLISH ? GARAMOND : NOTOSERIF
  };
  let projects = [];
  for (let project of content) {
    projects.push(
      <div key={projects.length} style={projectStyles}>
        <a href={project.url} style={aTagStyles}>
          {language === ENGLISH ? project.what : project.japaneseWhat}
        </a>
      </div>
    );
  }
  return (
    <div className="projects">
      <h3 style={getFont(language)}>
        {language === ENGLISH ? title : japaneseTitle}
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
          <img className="skilllogo" src={skill.logo} alt="logo pic"></img>
        </div>
      </div>
    );
  }

  return (
    <div className="skills">
      <h3 style={getFont(language)}>
        {language === ENGLISH ? title : japaneseTitle}
      </h3>
      {skills}
    </div>
  );
};

const Education = props => {
  let { title, content, screenW, language } = props;
  title = language === ENGLISH ? "Education" : "学歴";
  let schools = [];

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: listItemPadding
  };

  const subHeaders = {
    name: language === ENGLISH ? "School" : "学",
    location: language === ENGLISH ? "Location" : "都市",
    date:
      language === ENGLISH ? (screenW < medMax ? "Finished" : "Dates") : "年"
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

  const aTagStyles = {
    textDecoration: "none",
    fontFamily: language === ENGLISH ? GARAMOND : NOTOSERIF
  };

  title = language === ENGLISH ? "Certifications" : "免許・資格";
  let certs = [];
  for (let cert of content) {
    // console.log(cert);
    certs.push(
      <div className="certification" key={certs.length} style={certStyles}>
        {/* <a href={cert.url} style={linkStyles}> */}
        <a href={cert.url} style={aTagStyles}>
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

export { ProfileBar, Description, Projects, Skills, Education, Certifications };
