import React from "react";
import { ENGLISH, JAP_CERT_TITLE } from "../constants.js";

const Certifications = (props) => {
  const { data, lang } = props;
  const { content } = data;

  const title = lang === ENGLISH ? "Certifications" : JAP_CERT_TITLE;
  let certs = [];
  for (let cert of content) {
    certs.push(
      <div className="cert" key={cert.name}>
        <div className="certheaderprefix">
          <a href={cert.url} style={{ textDecoration: "none" }}>
            <span className="certname">{cert.name}</span>
          </a>
          <span className="certlocation">{cert.location}</span>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className="certifications">{certs}</div>
    </React.Fragment>
  );
};

export default Certifications;
