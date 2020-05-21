import React from "react";
import { ENGLISH } from "../constants.js";

const CareerProfile = (props) => {
  const { data, lang } = props;
  const { title, content, japaneseTitle, japaneseContent } = data;

  return (
    <React.Fragment>
      <h3>{lang === ENGLISH ? title : japaneseTitle}</h3>
      <p className="careerprofile">
        {lang === ENGLISH ? content : japaneseContent}
      </p>
    </React.Fragment>
  );
};

export default CareerProfile;
