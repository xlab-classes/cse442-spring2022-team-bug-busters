import React, { Component } from 'react'
import "../Wordle.css"

export default class Keyboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      keyboardRow1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      keyboardRow2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      keyboardRow3: ["Z", "X", "C", "V", "B", "N", "M"],
    }
  }

  letterClicked = (keys) => {
    if(this.props.column < 5){
      const newBoard = [...this.props.board]
      newBoard[this.props.row][this.props.column] = keys
      this.props.incrementColumn(this.props.column + 1)
      this.props.updateBoard(newBoard)
      console.log(newBoard)
    }
  }

  render() {
    return (
      <div id='keyboard'>
        {/* {console.log(this.props.board)} */}
        <div id='keyboard1'>
          {this.state.keyboardRow1.map(keys =>(
            <button key={keys} className='keys' onClick={e => this.letterClicked(keys)}>{keys}</button>
          ))}
        </div>
        <div id='keyboard2'>
          {this.state.keyboardRow2.map(keys =>(
            <button key={keys} className='keys' onClick={e => this.letterClicked(keys)}>{keys}</button>
          ))}
        </div>

        <div id='keyboard3'>
          <button className='deleteAndEnter'>DELETE</button>
          {this.state.keyboardRow3.map(keys =>(
            <button key={keys} className='keys' onClick={e => this.letterClicked(keys)}>{keys}</button>
          ))}
          <button className='deleteAndEnter'>ENTER</button>
        </div>

      </div>
    )
  }
}
