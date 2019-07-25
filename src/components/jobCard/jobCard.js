import React from 'react';

function JobCard(props) {
  return (
    <div className="job-card">
      <div className="job-container">
        <a className="job-card__link" href="#">{props.jobName}</a>
        <p className="job-card__rating">{props.jobRating}</p>
        <p className="job-card__company-name">Company - {props.companyName}</p>
        <p className="job-card__job-description">{props.jobDescription}</p>
      </div>
      <div className="image-container">
        {/* <img src={require(`${props.companyImage}`)} /> */}
      </div>
    </div>
  );
}

export default JobCard;