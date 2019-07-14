import React, {Component} from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Components/Home/Home'
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skill';
// import Works from './Components/Works/Works';
import Hobbies from './Components/Hobbies/Hobbies';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {

  render() {
  
    return (
      <div style = {{height : '100%'}}>
        <Toolbar sideBarHandler = {this.sideBarToggle}/>
        <div className = "main-container" style={{paddingTop:'56px'}}>
          <Home />
          <Education />
          <Experience />
          <Skills />
          <Hobbies />
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default App;
