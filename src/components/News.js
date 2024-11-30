import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: 'general',
  }

  constructor(){ //used constructor
    super(); 
    this.state = { //yaha constructor ki help se 'state' ko set kiya
      articles:[], //and yaha articles ko ek array declare kiya
      loading: false, //yaha loading name ka ek variable banaya jab bhi koi cheej load hogi to loading 'true' ho jayegi and fir 'false' ho jayegi
      page: 1, //page ko page 1 par set kiya
      pageSize:5  //give the no. of news item in page
    }
  } 

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5bb2c3dba459479482a25a5fde059091&page=${this.state.page}&pageSize=${this.state.pageSize}` //yaha pageSize ko props kiya aur fir 'apps.js' mein update kiya
    this.setState({loading: true}) 
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData) 
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }

  async componentDidMount(){ //'cDM' ek method hai jo render() method ke baad compile hota hai ye apna all data render() method ke baad show karega
    this.updateNews()
  } 
   
  preBtn = async ()=>{
      this.setState({page: this.state.page - 1})
      this.updateNews()
  }

  nextBtn = async ()=>{
    this.setState({page: this.state.page + 1})
    this.updateNews()
 }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>} {/*yaha spinner component ko use kiya*/}
          <div className="row">       {/*use for the row taki item row mein aaye*/}

            {!this.state.loading && this.state.articles.map((element) =>{ //agar loading nahi ho rahi hai to ye dikhao barna mat dikhao and yaha articles component ko use kiya
            return <div className="col-md-4" key={element.url}>     {/*and yaha return kiya, url ko unique key dee*/}
          
            {/*aur jo props 'NewsItem.js' mein pass kiye uske variable ko yaha pull karke usme value assign ki, 'slice' used show for limited word*/}
            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0,85) :""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div> 
          })}
      </div>  

          <div className="my-3 d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary btn-sm" onClick={this.preBtn}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/(this.props.pageSize))} type="button" className="btn btn-primary btn-sm mx-3" onClick={this.nextBtn}>Next &rarr;</button>
        </div>                           
      </div>
    )
  }
}

export default News 

