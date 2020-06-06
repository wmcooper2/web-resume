import React from "react";
import {
  ENGLISH,
  ENG_EDU,
  JAP_EDU,
  // ENG_SCHOOL,
  // JAP_SCHOOL,
  // ENG_LOCATION,
  // JAP_LOCATION,
  // ENG_YEAR,
  // JAP_YEAR,
} from "../constants.js";

const Education = (props) => {
  const { data, lang } = props;
  const { content } = data;
  const title = lang === ENGLISH ? ENG_EDU : JAP_EDU;

  let schools = [];
  content.forEach((school) => {
    schools.push(
      <React.Fragment key={schools.length}>
        <div className="school">
          <div className="schoolheaderprefix">
            <span className="schoolname">{school.name}</span>
            <span className="schoollocation">{school.location}</span>
          </div>
          <span className="schoolyear">{school.year}</span>
        </div>

        <a href={school.url} style={{ textDecoration: "none" }}>
          <p className="degree">{school.degree}</p>
        </a>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className="education">{schools}</div>
    </React.Fragment>
  );
};

export default Education;
