import React from 'react';
import Socials from './socials';

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="names">
        <h2 data-aos="fade-up"> Drop a message below to catch up or hire me! <i className="far fa-grin-alt ic"></i></h2>
        <a href="mailto:o.samy39@gmail.com">
	        <button data-aos="zoom-in" className="mail-btn">Send Message</button>
	      </a>
      </div>
      <div className="hr"></div>
      <div className="names center">
        <Socials />
      </div>
    </div>
  )
}



export default Footer
