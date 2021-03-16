import React from 'react';
import Footer from './footer';

const About = () => {
  return (
    <>
        <div className="about">
	        <img src="https://scessila.sirv.com/portfolio/quote.svg" alt="Hello"/>
	        <h2>Hello World</h2>
			<section className="content">
			    <p data-aos="fade-up">I’m a passionate fullstack developer with about five months of internship experience at Infosys and have scored 87% in the final assessment of the internship program. </p>
			    <p data-aos="fade-up"> I enjoy designing web applications and love working with the backend. </p>
				<p data-aos="fade-up"> Catch me up at <a href="mailto:o.samy39@gmail.com">o.samy39@gmail.com</a> to discuss cool project ideas </p>
			    <h2 className="skillset" data-aos="fade-up">SKILLSETS</h2>
				<div className="skillset-con">
					<div className="skills-con">
						<div className="skill">
							<h1 data-aos="fade-up">Frontend</h1>
							<ul>
								<li data-aos="fade-down-left">
									<i className="fa fa-html5"></i>
									<p>HTML</p>
								</li>
								<li data-aos="fade-up-right">
									<i className="fa fa-css3"></i>
									<p>CSS</p>
								</li>
								<li data-aos="fade-up-right">
									<i className="fab fa-js"></i>
									<p>Javascript</p>
								</li>
								<li data-aos="fade-down-left">
									<i className="fab fa-bootstrap"></i>
									<p>Bootstrap</p>
								</li>
								<li data-aos="fade-down-left">
									<i className="fab fa-react"></i>
									<p>React.JS</p>
								</li>
							</ul>
						</div>
						<div className="skill">                             
							<h1>Backend</h1>      
							<ul>                      
								<li data-aos="fade-up-right">
									<i className="fab fa-node-js"></i>
									<p>NodeJS</p>
								</li>   
									<li data-aos="fade-down-left">
									<i className="fab fa-js"></i>
									<p>ExpressJS</p>
								</li>    
							</ul>                                           
						</div>
						<div className="skill">       
						<h1 data-aos="fade-up">Database</h1>        
						<ul>  
							<li data-aos="fade-down-left">
								<i className="fa fa-database"></i>
								<p>MongoDB</p>
							</li>
						</ul>                                           
						</div>
					</div>
				</div>
		    </section>
	    </div>
	    <Footer />
    </>
  )
}

export default About
