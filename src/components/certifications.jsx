import React from "react";
import {
  getFont,
  ENGLISH,
  GARAMOND,
  JAP_CERT_TITLE,
  NOTOSERIF,
  LIST_ITEM_PADDING,
} from "./utilities_constants.js";

const Certifications = (props) => {
  let { title, content, language } = props;
  const certStyles = {
    textDecoration: "none",
    padding: LIST_ITEM_PADDING,
    textAlign: "center",
  };

  const aTagStyles = {
    textDecoration: "none",
    fontFamily: language === ENGLISH ? GARAMOND : NOTOSERIF,
  };

  title = language === ENGLISH ? "Certifications" : JAP_CERT_TITLE;
  let certs = [];
  for (let cert of content) {
    certs.push(
      <div className="certification" key={certs.length} style={certStyles}>
        <a href={cert.url} style={aTagStyles}>
          {cert.what}
        </a>
      </div>
    );
  }
  return (
    <div className="certifications">
      <h3 style={getFont(language)}>{title}</h3>
      {certs.reverse()}
    </div>
  );
};

export default Certifications;
