import React from "react";
import USA from "../images/americanFlag.png";
import JAPAN from "../images/japaneseFlag.png";
import { ENGLISH, ENG_NAME, JAP_NAME, JAPANESE } from "../constants.js";

const Name = (props) => {
  const { changeLanguage, lang } = props;
  const myName = lang === ENGLISH ? ENG_NAME : JAP_NAME;

  const language = lang === ENGLISH ? JAPANESE : ENGLISH;
  const flag = lang === ENGLISH ? USA : JAPAN;

  return (
    <header>
      <span className="name">{myName}</span>
      <span className="language" onClick={() => changeLanguage()}>
        {language}
        <img className="flag" src={flag} alt="flag"></img>
      </span>
    </header>
  );
};

export default Name;
