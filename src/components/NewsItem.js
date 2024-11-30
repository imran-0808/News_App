import React, { cloneElement, Component } from 'react'

export class NewsItem extends Component {
 
  render(){   
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;//yaha props mein variable pass kiye 'title','description' etc. jinme hum props ki form mein value pass karenge aur yaha aur bhi variable pass kar sakte hain

    return (
      <>
      <div className='my-3'>
        <div className ="card" >
          <img src = {!imageUrl ? "https://www.investors.com/wp-content/uploads/2017/04/stock-wallstreet-shutter.jpg" : imageUrl} className='card-img-top' alt='...'/> {/*agar kisi component mein 'imageurl' nahi hai to ye wala use kar lo barna 'imageUrl' use kar lo*/}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <span className="badge text-bg-secondary">{source}</span>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : 'unknown'}, At {new Date(date).toLocaleString()}</small></p> {/*yha author & date dali*/}
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a> {/*yha href mein newUrl ka link dala and target ='blank' kiya isse isse read more par click karne se news open ho jayegi*/}
          </div>
        </div>
        </div>
        </>
    )
  }
}

export default NewsItem
