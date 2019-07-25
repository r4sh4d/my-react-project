import React from 'react';
import JobCard from './../jobCard/jobCard';

import './../../Assets/scss/jobCard.scss';

function JobSection() {
  return (
    <section className="jobs">
      <h1 className="jobs__header">List of jobs</h1>
      <div className="job-container">
        <JobCard
          jobName="Online Chat Agent"
          jobRating="3.0/5.0"
          companyName="Livetalk"
          jobDescription="The best handmade pasta place you could get in Los Angeles. No, really. I went in on a Sunday around 2PM, and there was a huge line. We waited close to an hour, but honestly it was amazing!"
        />
        <JobCard
          jobName="Senior Business Analyst"
          jobRating="5.0/5.0"
          companyName="BusinessTalk"
          jobDescription="If you're a fan of Greek yogurt, this place is a must. Fresh Greek yogurt is way better than the packaged stuff. Try the PB&J, made with real grapes and peanuts."
        />
        <JobCard
          jobName="Part-Time Service Agent (car washer)"
          jobRating="4.5/5.0"
          companyName="Car Wash"
          jobDescription="If you have skills in car washing, then this is the right place for you. Part-time job."
        />
        <JobCard
          jobName="Part-Time Service Agent (car washer)"
          jobRating="4.5/5.0"
          companyName="Car Wash"
          jobDescription="If you have skills in car washing, then this is the right place for you. Part-time job."
        />
      </div>
    </section >
  );
}

export default JobSection;