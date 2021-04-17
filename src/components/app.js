import { h } from 'preact';
import { Router } from 'preact-router';
import style from './app.css';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Skills from '../routes/skills';
import About from '../routes/about';
import Contact from '../routes/contact';
import Projects from '../routes/projects';

const App = () => (
  <div id="app">
    <Header />
    <div class={style.top}>
      <Router>
        <Home path="/" />
        {/* <Profile path="/profile/" /> */}
        <Profile path="/profile/:user" />
        <About path="/about" />
        <Contact path="/contact" />
        <Projects path="/projects" />
        <Skills path="/skills" />
      </Router>
    </div>
  </div>
);

export default App;
