import React, { cloneElement, Component } from 'react'

export class NewsItem extends Component {
 
  render(){   
    let {title, description, imageUrl, newsUrl} = this.props;//yaha props mein two variable pass kiye 'title','description' jinme hum props ki form mein value pass karenge aur yaha aur bhi variable pass kar sakte hain

    return (
      <div className='my-3'>
        <div className ="card" style = {{width: "18rem"}}>
          <img src = {imageUrl} className='card-img-top' alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a> {/*yha href mein newUrl ka link dala and target ='blank' kiya isse isse read more par click karne se news open ho jayegi*/}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
