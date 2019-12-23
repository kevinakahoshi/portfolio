import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';

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
      </>
    );
  }
}

export default App;
