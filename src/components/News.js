import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewMonkey - Top Headlines</h2>
          {/*use for the row taki item row mein aaye*/}
          <div className="row"> 
              <div className="col-md-4">
                <NewsItem title='myTitle' description='myDesc' />/{/*aur jo props 'NewsItem.js' mein pass kiya uske variable ko yaha pull karke usme value assign ki*/}
              </div>
              
              <div className="col-md-4">
                 <NewsItem title='myTitle' description='myDesc' />
              </div>

              <div className="col-md-4">
                <NewsItem title='myTitle' description='myDesc' />
              </div>
          </div>                                
      </div>
    )
  }
}

export default News

