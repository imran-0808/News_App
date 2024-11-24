import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';

export default class App extends Component {
//render() method classBase component mein use kiya jata hai and yah pehale jsx ko html mein compile karta hai fir screen par html ko run karta hai
  render() {
    return (
      <div>
        <Navbar/>
        <News/> 
        
      </div>
    )
  }
}

