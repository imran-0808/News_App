import './App.css';

import {Routes, Route} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

//render() method classBase component mein use kiya jata hai and yah pehale jsx ko html mein compile karta hai fir screen par html ko run karta hai
  render() {
    return (
      <div>
        <Navbar/>
          <Routes>   
            <Route exact path='/general' element={<News key='general' category='general'/>}/>  
            <Route exact path='/science' element={<News key='science' category='science'/>}/> {/*r-r-d mein 'key' ko component ko load & update karne ke liye use kiya jata hai. kyunki ise ek unique key dete hain jaise agar science par click karenge to science ka page load hoga & update aayegi*/}
            <Route exact path='/business' element={<News key='business' category='business'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment'/>}/>
            <Route exact path='/health' element={<News key='health' category='health'/>}/>
            <Route exact path='/sport' element={<News key='sport' category='sport'/>}/>
            <Route exact path='/technology' element={<News key='technology' category='technology'/>}/>
          </Routes>  
      </div>
    )
  }
}

