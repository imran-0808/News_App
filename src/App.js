import './App.css';

import {Routes, Route} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar' //import top loading bar

export default class App extends Component {

  state = { //it is also used for Top progressing bar
    progress: 0
  }
    setProgress = (progress)=>{
    this.setState({progress: progress})
  }

//render() method classBase component mein use kiya jata hai and yah pehale jsx ko html mein compile karta hai fir screen par html ko run karta hai
  render() {
    return (
      <div>
        <Navbar/>

        <LoadingBar //use for Top loading bar 
        color='#f11946'
        height='3px'
        progress={this.state.progress}
      />
    
          <Routes>   
            <Route exact path='/general' element={<News changeProgress={this.setProgress} key='general' category='general'/>}/>  
            <Route exact path='/science' element={<News changeProgress={this.setProgress} key='science' category='science'/>}/> {/*r-r-d mein 'key' ko component ko load & update karne ke liye use kiya jata hai. kyunki ise ek unique key dete hain jaise agar science par click karenge to science ka page load hoga & update aayegi*/}
            <Route exact path='/business' element={<News changeProgress={this.setProgress} key='business' category='business'/>}/>
            <Route exact path='/entertainment' element={<News changeProgress={this.setProgress} key='entertainment' category='entertainment'/>}/>
            <Route exact path='/health' element={<News changeProgress={this.setProgress} key='health' category='health'/>}/>
            <Route exact path='/sport' element={<News changeProgress={this.setProgress} key='sport' category='sport'/>}/>
            <Route exact path='/technology' element={<News changeProgress={this.setProgress} key='technology' category='technology'/>}/>
          </Routes>  
      </div>
    )
  }
}

