import React from "react";
// import USA from "../images/americanFlag.png";
// import JAPAN from "../images/japaneseFlag.png";
// import { ENGLISH, ENG_NAME, JAP_NAME, JAPANESE } from "../constants.js";
import { ENGLISH, ENG_NAME, JAP_NAME } from "../constants.js";

const Name = (props) => {
  // const { changeLanguage, lang } = props;
  const { lang } = props;
  const myName = lang === ENGLISH ? ENG_NAME : JAP_NAME;

  // const language = lang === ENGLISH ? JAPANESE : ENGLISH;
  // const flag = lang === ENGLISH ? JAPAN : USA;

  return (
    <header>
      <h1 className="name">{myName}</h1>
      {/* <button className="language" onClick={() => changeLanguage()}> */}
      {/* {language} */}
      {/* <img className="flag" src={flag} alt="flag"></img> */}
      {/* </button> */}
    </header>
  );
};

export default Name;
