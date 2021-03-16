import React from 'react';

import Profile from './profile';
import ProjectSection from './projectSection';
import Career from "./career";
import Footer from './footer';

const Home = () => {
  return (
      <div className="App">
        <Profile />
        <ProjectSection />
        <Career />
        <Footer />
      </div> 
  )
}

export default Home;
