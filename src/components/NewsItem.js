import React, { cloneElement, Component } from 'react'

export class NewsItem extends Component {
  
  articles= [
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Kevin Hand",
      "title": "LIVE: South Africa vs India – second T20 international cricket match",
      "description": "Follow our live build-up, team news, score and commentary as the hosts attempt to level the four-match T20 series.",
      "url": "https://www.aljazeera.com/sports/liveblog/2024/11/10/live-south-africa-vs-india-second-t20-international-cricket-match",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24313564688477-1731234736_37d556-1731237963.jpg?resize=1200%2C630&quality=80",
      "publishedAt": "2024-11-10T11:40:49Z",
      "content": "blinking-dot\r\nLive updatesLive updates, \r\nFollow our live build-up, team news, score and commentary as South Africa try to level the four-match series against world champions India."
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor(){ //used constructor
    super();
    console.log("Hello i am a constructor")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render(){   
    let {title, description, imageUrl, newsUrl} = this.props;//yaha props mein two variable pass kiye 'title','description' jinme hum props ki form mein value pass karenge aur yaha aur bhi variable pass kar sakte hain

    return (
      <div className='my-3'>
        <div className ="card" style = {{width: "18rem"}}>
          <img src = {imageUrl} className='card-img-top' alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
