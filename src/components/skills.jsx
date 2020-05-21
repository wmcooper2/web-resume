import React from "react";
import { ENGLISH } from "./utilities_constants.js";

const Skills = (props) => {
  const { title, content, lang, japaneseTitle } = props;
  let skills = [];
  for (let skill of content) {
    skills.push(
      <div className="skill" key={skills.length}>
        <div className="skillitem">{skill.what}</div>
        <div className="skillitem">
          <img className="skilllogo" src={skill.logo} alt="logo pic"></img>
        </div>
      </div>
    );
  }

  return (
    <div className="skills">
      <h3>{lang === ENGLISH ? title : japaneseTitle}</h3>
      {skills}
    </div>
  );
};

export default Skills;
