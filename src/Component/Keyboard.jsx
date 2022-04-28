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
      
    }
  }

  deleteClicked(){
    if(this.props.column > 0){
      const newBoard = [...this.props.board]
      newBoard[this.props.row][this.props.column - 1] = ""
      this.props.incrementColumn(this.props.column - 1)
      this.props.updateBoard(newBoard)
      
    }
    else{
      const newBoard = [...this.props.board]
      newBoard[this.props.row][this.props.column] = ""
      this.props.incrementColumn(this.props.column)
      this.props.updateBoard(newBoard)
      
    }
  }

  enterClicked(){
    if(this.props.column == 5){
      this.props.incrementColumn(0)
      this.props.incrementRow(this.props.row + 1)
      this.props.checkWord(this.props.row)
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
          <button className='deleteAndEnter' onClick={e => this.deleteClicked()}>DELETE</button>
          {this.state.keyboardRow3.map(keys =>(
            <button key={keys} className='keys' onClick={e => this.letterClicked(keys)}>{keys}</button>
          ))}
          <button className='deleteAndEnter' onClick={e => this.enterClicked()}>ENTER</button>
        </div>

      </div>
    )
  }
}
