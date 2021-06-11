import { Component } from "react";
import './App.scss'
import PrimaryHeader from './components/PrimaryHeader/PrimaryHeader'
import Hero from './components/Hero/Hero'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="headerHero">
          <PrimaryHeader />
          <Hero />
        </div>
        <div>hello</div>

      </div>
    );
  };
}

export default App;