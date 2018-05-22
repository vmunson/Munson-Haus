import React, { Component } from 'react';
import logo from './assets/munsonHausLogo copy.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <p>Munson Haus is being built.<br/> Check out our divisions -
            <a href="https://vmunson.github.io/portfolio/" target="_blank"> Developing</a>
            ,<a href="http://virginiamunson.wixsite.com/videoportfolio" target="_blank"> Productions</a>
            , and <a href="https://emilymunson.com/" target="_blank"> Writings</a>.
          </p>
          <img src={logo} alt="a house with munson haus coming out of its chimney"/>
      </div>
    )
  }
}

export default App;
