import React, { Component } from 'react';
import logo from './assets/munsonHausLogo copy.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <p>Munson Haus is being built.<br/> Check out our divisions -
            <a href="https://vmunson.github.io/portfolio/" target="_blank"> Develop</a>
            ,<a href="http://virginiamunson.wixsite.com/videoportfolio" target="_blank"> Production</a>
            , and <a href="https://emilymunson.com/" target="_blank"> Writing</a>.
          </p>
          <img src={logo} alt="a house with munson haus coming out of its chimney"/>
      </div>
    )
  }
}

export default App;
