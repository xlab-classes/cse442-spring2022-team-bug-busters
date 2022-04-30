import React, { Component } from 'react'
import "../Wordle.css"

export default class Letter extends Component {

  constructor(props){
    super(props);

  }
  

  letterColors(){

    if(this.props.checkIfWordCorrect[this.props.currentrow][this.props.currentcolumn] == "true"){
      if(this.props.currentrow <this.props.row){
        return "correctWordleLetter"
      }
    }
    
    else if(this.props.checkIfWordCorrect[this.props.currentrow][this.props.currentcolumn] == "almost"){
      if(this.props.currentrow <this.props.row){   
          return "almostCorrectWordLetter"
      }
    }
    else if(this.props.checkIfWordCorrect[this.props.currentrow][this.props.currentcolumn] == "none"){
      if(this.props.currentrow <this.props.row){   
          return "wrongWordLetter"
      }
    }
    return "wordleLetter"
    
  
  }
  render() {
    return (
      <div className={this.letterColors()}> 
        {this.props.letter}
      </div>
    )
  }
}
