import React from "react";

const ProfessionalExperience = (props) => {
  const { data } = props;
  console.log("exp:", data);

  let jobs = [];
  data.forEach((job) => {
    jobs.push(
      <tr className="jobheader" key={jobs.length}>
        <td className="job">
          <h6 className="jobcompany">{job.company}</h6>
          <span className="joblocation">{job.location}</span>
        </td>
        <td className="jobyear">{job.year[1]}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h2>Professional Experience</h2>
      <table className="professionalexperience">
        <tbody>{jobs}</tbody>
      </table>
    </React.Fragment>
  );
};

export default ProfessionalExperience;

// company: "Borderlink, Inc.",
// location: "Tokyo, Japan.",
// year: ["placeholder1", "placeholder2"],
// jobTitle: "ALT",
// talkingPoints: ["one", "two", "three", "four"],
