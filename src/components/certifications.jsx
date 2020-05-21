import React from "react";
import { ENGLISH, JAP_CERT_TITLE } from "../constants.js";

const Certifications = (props) => {
  const { data, lang } = props;
  const { content } = data;

  const title = lang === ENGLISH ? "Certifications" : JAP_CERT_TITLE;
  let certs = [];
  for (let cert of content) {
    certs.push(
      <tr>
        <td className="certification" key={certs.length}>
          <a href={cert.url}>{cert.what}</a>
        </td>
      </tr>
    );
  }
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <table className="certifications">
        <thead>
          <tr>
            <td>Name</td>
            <td>Completed</td>
          </tr>
        </thead>
        <tbody>{certs.reverse()}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Certifications;
