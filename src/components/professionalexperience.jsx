import React from "react";

const ProfessionalExperience = (props) => {
  const { data } = props;

  let jobs = [];
  data.forEach((job) => {
    jobs.push(
      <React.Fragment key={jobs.length}>
        <div className="job">
          <div class="jobheaderprefix">
            <span className="companyname">{job.company}</span>
            <span className="joblocation">{job.location}</span>
          </div>
          <span className="jobyear">
            {job.year[0]} - {job.year[1]}
          </span>
        </div>
        <div className="jobtitle">{job.jobTitle}</div>
        <ul>
          <li>{job.talkingPoints[0]}</li>
          <li>{job.talkingPoints[1]}</li>
          <li>{job.talkingPoints[2]}</li>
          {job.talkingPoints[3] === null ? "" : <li>{job.talkingPoints[3]}</li>}
        </ul>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <h2>Professional Experience</h2>
      <div className="professionalexperience">{jobs}</div>
    </React.Fragment>
  );
};

export default ProfessionalExperience;