import './App.css';
import Navbar from './Components/Navbar.js';
import News from './Components/News.js';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
