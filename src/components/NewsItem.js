import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
 //yaha props mein two variable pass kiye 'title','description' jinme hum props ki form mein value pass karenge aur yaha aur bhi variable pass kar sakte hain
    let {title, description} = this.props;

    return (
      <div>
        <div className="card" style = {{width: "18rem"}}>
          <img src="https://www.aljazeera.com/wp-content/uploads/2024/11/AP24313564688477-1731234736_37d556-1731237963.jpg?resize=1200%2C630&quality=80" className='card-img-top' alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
