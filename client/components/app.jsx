import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';

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
      </>
    );
  }
}

export default App;
