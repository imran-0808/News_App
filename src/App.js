import './App.css';

import {Routes, Route} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';

export default class App extends Component {
//render() method classBase component mein use kiya jata hai and yah pehale jsx ko html mein compile karta hai fir screen par html ko run karta hai
  render() {
    return (
      <div>
        <Navbar/>

          <Routes>   
            <Route exact path='/general' element={<News key='general' pageSize={5} category='general'/>}/>  
            <Route exact path='/science' element={<News key='science' pageSize={5} category='science'/>}/> {/*r-r-d mein 'key' ko component ko load & update karne ke liye use kiya jata hai. kyunki ise ek unique key dete hain jaise agar science par click karenge to science ka page load hoga & update aayegi*/}
            <Route exact path='/business' element={<News key='business' pageSize={5} category='business'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={5} category='entertainment'/>}/>
            <Route exact path='/health' element={<News key='health' pageSize={5} category='health'/>}/>
            <Route exact path='/sport' element={<News key='sport' pageSize={5} category='sport'/>}/>
            <Route exact path='/technology' element={<News key='technology' pageSize={5} category='technology'/>}/>
          </Routes>  
      </div>
    )
  }
}

