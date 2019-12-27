import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
import Contact from './Contact';

class App extends React.Component {
  // constructor() {
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Tools />
        <Applications />
        <Contact />
      </>
    );
  }
}

export default App;
