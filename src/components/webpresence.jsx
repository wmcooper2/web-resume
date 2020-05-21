import React from "react";
import { ENGLISH } from "./utilities_constants.js";

//"my web presence" section
const WebPresence = (props) => {
  const { title, content, lang, japaneseTitle } = props;
  let webpresencelinks = [];
  for (let project of content) {
    webpresencelinks.push(
      <li className="webpresencelink" key={webpresencelinks.length}>
        <a href={project.url}>
          {lang === ENGLISH ? project.what : project.japaneseWhat}
        </a>
      </li>
    );
  }
  return (
    <React.Fragment>
      <h3>{lang === ENGLISH ? title : japaneseTitle}</h3>
      <ul>{webpresencelinks}</ul>
    </React.Fragment>
  );
};

export default WebPresence;
