import React from "react";
import { ENGLISH } from "../constants.js";

const CareerProfile = (props) => {
  const { data, lang } = props;
  const { title, content, japaneseTitle, japaneseContent } = data;

  return (
    <React.Fragment>
      <h2>{lang === ENGLISH ? title : japaneseTitle}</h2>
      <div className="careerprofile">
        {lang === ENGLISH ? content : japaneseContent}
      </div>
    </React.Fragment>
  );
};

export default CareerProfile;
