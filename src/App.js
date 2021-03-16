import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import About from './about';
import ProjectSection from './projectSection';
import Contact from './contact';
import MoveUp from './moveUp';
import SnowParticles from './snowParticles';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <SnowParticles />
        <Nav/>
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/about' exact>
                <About />
            </Route>
            <Route path='/project' exact>
                <ProjectSection />
            </Route>
            <Route path='/contact' exact>
                <Contact />
            </Route>
        </Switch>
        <MoveUp/>
      </BrowserRouter>
    </div>
  )
}

export default App;
