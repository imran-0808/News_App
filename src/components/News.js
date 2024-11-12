import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewMonkey - Top Headlines</h2>
          <div className="row"> {/*use for the row taki item row mein aaye*/}
              <div className="col-md-4">
                {/*aur jo props 'NewsItem.js' mein pass kiya uske variable ko yaha pull karke usme value assign ki*/}
                <NewsItem title='myTitle' description='myDesc' imageUrl="https://www.aljazeera.com/wp-content/uploads/2024/11/AP24313564688477-1731234736_37d556-1731237963.jpg?resize=1200%2C630&quality=80" newsUrl="ToDo"/>
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

