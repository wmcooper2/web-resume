import React from "react";
import {
  getFont,
  ENGLISH,
  GARAMOND,
  NOTOSERIF,
} from "./utilities_constants.js";

//"my web presence" section
const WebPresence = (props) => {
  const listItemPadding = "9px";
  const { title, content, language, japaneseTitle } = props;
  const projectStyles = { padding: listItemPadding, textAlign: "center" };
  const aTagStyles = {
    textDecoration: "none",
    fontFamily: language === ENGLISH ? GARAMOND : NOTOSERIF,
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

export default WebPresence;
