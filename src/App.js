import React from 'react';

import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/works/Works";
import Menu from './components/menu/Menu';


import './App.scss'


function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
