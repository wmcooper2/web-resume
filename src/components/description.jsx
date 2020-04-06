import React from "react";
import {
  getFont,
  ENGLISH,
  GARAMOND,
  NOTOSERIF,
  LIST_ITEM_PADDING,
} from "./utilities_constants.js";

const Description = (props) => {
  const { title, content, language, japaneseTitle, japaneseContent } = props;
  const fontFamily = language === ENGLISH ? GARAMOND : NOTOSERIF;

  return (
    <div className="description">
      <h3 style={getFont(language)}>
        {language === ENGLISH ? title : japaneseTitle}
      </h3>
      <p
        style={{
          textAlign: "center",
          padding: LIST_ITEM_PADDING,
          fontFamily: fontFamily,
        }}
      >
        {language === ENGLISH ? content : japaneseContent}
      </p>
    </div>
  );
};

export default Description;
