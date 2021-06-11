import { Component } from "react";
import './App.scss'
import PrimaryHeader from './components/PrimaryHeader/PrimaryHeader'
import PrimaryFooter from './components/PrimaryFooter/PrimaryFooter'
import Hero from './components/Hero/Hero'
import SiteBody from './components/SiteBody/SiteBody'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="headerHero">
          <PrimaryHeader />
          <Hero />
        </div>
        <SiteBody />
        <PrimaryFooter />
      </div>
    );
  };
}

export default App;