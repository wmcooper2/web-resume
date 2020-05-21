import React from "react";
import {
  ENGLISH,
  ENG_EDU,
  JAP_EDU,
  ENG_SCHOOL,
  JAP_SCHOOL,
  ENG_LOCATION,
  JAP_LOCATION,
  ENG_YEAR,
  JAP_YEAR,
} from "../constants.js";

const Education = (props) => {
  const { data, lang } = props;
  const { content } = data;
  const title = lang === ENGLISH ? ENG_EDU : JAP_EDU;

  const subHeaders = {
    name: lang === ENGLISH ? ENG_SCHOOL : JAP_SCHOOL,
    location: lang === ENGLISH ? ENG_LOCATION : JAP_LOCATION,
    date: lang === ENGLISH ? ENG_YEAR : JAP_YEAR,
  };

  let schools = [];
  content.forEach((school) => {
    schools.push(
      <tr key={schools.length}>
        <td className="schoolname">{school.longName}</td>
        <td className="schoollocation">{school.location}</td>
        <td className="schooldate">{school.year[1].getFullYear()}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h3>{title}</h3>
      <table className="educationtable">
        <thead>
          <tr className="educationheader">
            <td className="schoolname">{subHeaders.name}</td>
            <td className="schoollocation">{subHeaders.location}</td>
            <td className="schooldate">{subHeaders.date}</td>
          </tr>
        </thead>
        <tbody>{schools}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Education;
