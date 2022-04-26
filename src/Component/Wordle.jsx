import React, { Component } from 'react'
import NavBar from "./NavBar";
import "../Wordle.css"
import Keyboard from './Keyboard';


export default class Wordle extends Component {
  constructor(props){
    super(props);
    this.state = {
      row: 0,
      column: 0,
      words: [["a","b","c","d","e"],
      ["b","","b","","c"],
      ["a","b","c","d","e"],
      ["b","","b","","c"],
      ["a","b","c","d","e"],
      ["a","b","c","d","e"]]
    };
    //bind it used in keyboard
    this.incrementColumn = this.incrementColumn.bind(this)
    this.incrementRow = this.incrementRow.bind(this)
  }
  
  //this way no need bind
  updateBoard = newBoard => {
    this.setState({
      words: newBoard
    })
    
  }

  incrementRow(newRow){
    this.setState({
      row: newRow
    })
  }
  incrementColumn(newColumn){
      this.setState({
        column: newColumn
      })  
  }
  // incrementColumn = newColumn => {
  //   this.setState({
  //     column: newColumn
  //   })  
  // }

  render() {
    return (
      <div id='wordleGame'>
        <div>
          <NavBar></NavBar>
        </div>
        <div id='wordleWords'>
          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[0][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[0][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[0][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[0][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[0][4]}
            </div>
          </div>

          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[1][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[1][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[1][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[1][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[1][4]}
            </div>
          </div>

          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[2][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[2][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[2][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[2][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[2][4]}
            </div>
          </div>

          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[3][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[3][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[3][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[3][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[3][4]}
            </div>
          </div>

          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[4][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[4][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[4][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[4][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[4][4]}
            </div>
          </div>   
          <div className='wordleRow'>
            <div className='wordleLetter'>
              {this.state.words[5][0]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[5][1]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[5][2]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[5][3]}
            </div>
            <div className='wordleLetter'>
              {this.state.words[5][4]}
            </div>
          </div>  
        </div>
        

        <Keyboard 
        board={this.state.words} 
        row = {this.state.row} 
        column = {this.state.column}
        incrementColumn = {this.incrementColumn}
        incrementRow = {this.incrementRow}
        updateBoard = {this.updateBoard}
        ></Keyboard>       
        
      </div>
      
    )
  }
}
