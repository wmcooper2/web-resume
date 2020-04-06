import React from "react";
import { getFont, ENGLISH, LIST_ITEM_PADDING } from "./utilities_constants.js";

const Skills = (props) => {
  const { title, content, language, japaneseTitle } = props;
  let skills = [];
  for (let skill of content) {
    skills.push(
      <div
        className="skill"
        key={skills.length}
        style={{ padding: LIST_ITEM_PADDING }}
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

export default Skills;
