import React, { Component } from 'react'
import loading from './loading.gif'
                                              
export class spinner extends Component {  //yaha spinner name ka component create kiya
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner

