import React from 'react';

import careerJson from './career.json';
import myResume from './assets/sammy-resume.pdf'


const CareerEach = (props) => {
  return(
    <div className="career-sn" data-aos="slide-up">
      <h4>{props.careerObj.company}</h4>
      <div className="career-detail">
        <div className="line-circle">
          <div className="circle">
            <div className="inner"></div>
            <div className="outer"></div>
          </div>
          <div className="line"></div>
        </div>
        <div className="career-desc">
          <p>{props.careerObj.role}</p>
          <p><b>{props.careerObj.locate}</b></p>
          <p>{props.careerObj.period}</p>
        </div>
      </div>
    </div>
  )
}

const Career = () => {
  
  return (
    <section className="exp">
      <div className="career-flex">
        <h1>Career</h1>
        <h1><a href={myResume} download="madasamy's resume">Get My Resume</a></h1>
      </div>
          <div className="careers">
            {careerJson.map(career  => <CareerEach careerObj={career} key={career.role} />)}
          </div>
    </section>
  )
}


export default Career
