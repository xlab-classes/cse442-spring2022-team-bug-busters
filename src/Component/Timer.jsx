import React, { Component } from 'react'
import "../Wordle.css"
export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      //change seconds here
      seconds: 300
    }
  }

  componentDidMount(){
    this.decreaseTimer()
  }


  decreaseTimer(){

    let a = setInterval(() => {
      if(this.state.seconds != 0){
        this.setState({
          seconds: this.state.seconds - 1
        })
      }
      else{
        clearInterval(a)
        this.props.timesUp()
      }
    }, 1000)

  }

  timeFormat = seconds =>{
    { return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds } //formats to seconds found online
  }

  render() {
    return (
      <div id='timer'>
        {this.timeFormat(this.state.seconds)}
      </div>
    )
  }
}
