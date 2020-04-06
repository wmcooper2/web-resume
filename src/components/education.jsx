import React from "react";
import {
  getFont,
  ENGLISH,
  MEDMAX,
  LIST_ITEM_PADDING,
} from "./utilities_constants.js";

const Education = (props) => {
  let { title, content, screenW, language } = props;
  title = language === ENGLISH ? "Education" : "学歴";
  let schools = [];

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: LIST_ITEM_PADDING,
  };

  const subHeaders = {
    name: language === ENGLISH ? "School" : "学",
    location: language === ENGLISH ? "Location" : "都市",
    date:
      language === ENGLISH ? (screenW < MEDMAX ? "Finished" : "Dates") : "年",
  };

  for (let item of content) {
    schools.push(
      <div
        className="school"
        key={schools.length}
        style={{ padding: LIST_ITEM_PADDING }}
      >
        <span className="schoolname">
          {screenW >= MEDMAX ? item.longWhat : item.shortWhat}
        </span>
        <span className="schoollocation">
          {screenW >= MEDMAX ? item.longWhere : item.shortWhere}
        </span>
        <span className="schooldate">
          {screenW >= MEDMAX
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

export default Education;
