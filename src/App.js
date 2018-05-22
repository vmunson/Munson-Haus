import React, { Component } from 'react';
import logo from './assets/munsonHausLogo copy.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <p>Munson Haus is being built.<br/> Check out our divisions -
            <a href="https://vmunson.github.io/portfolio/"> Developing</a>
            ,<a href="http://virginiamunson.wixsite.com/videoportfolio">Productions </a>
            ,and <a href="https://emilymunson.com/"> Writings</a>.
          </p>
          <img src={logo}/>
      </div>
    );
  }
}

export default App;
