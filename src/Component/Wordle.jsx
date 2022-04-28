import React, { Component } from 'react'
import NavBar from "./NavBar";
import "../Wordle.css"
import Keyboard from './Keyboard';
import Letter from './Letter';
import { faL } from '@fortawesome/free-solid-svg-icons';


export default class Wordle extends Component {
  constructor(props){
    super(props);
    this.state = {
      row: 0,
      column: 0,
      words: [
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""]],
      checkIfWordCorrect: [
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]],
      correctWord: "RIGHT",
      gameover: false
    };
    //bind it used in keyboard
    this.incrementColumn = this.incrementColumn.bind(this)
    this.incrementRow = this.incrementRow.bind(this)
  }

  checkWord = row =>{
    let remainingLetter = ""
    let array = [];
    let count = 0;
    for(let i = 0; i < this.state.words[row].length; i++){
      if(this.state.correctWord[i] == this.state.words[row][i]){
        array[i] = "true"
        count += 1
      }
      else{
        remainingLetter += this.state.correctWord[i];
      }
    }

    if(count == 5){
      this.setState({
        gameover: true
      })
    }


    for(let i = 0; i < 5; i++){
      if(array[i] != "true"){
        console.log(remainingLetter)
        console.log(this.state.words[row][i])
        console.log()
        if(remainingLetter.includes(this.state.words[row][i])){
          console.log("delete: " +this.state.words[row][i] )
          remainingLetter =  remainingLetter.replace(this.state.words[row][i], "");
          array[i] = "almost"
        }
        
        else{
          array[i] = "none"
        }
      }

      const newcheckIfWordCorrect = [...this.state.checkIfWordCorrect]
      newcheckIfWordCorrect[row] = array 

      this.setState({
        checkIfWordCorrect: newcheckIfWordCorrect
      })

    }

    console.log(array)

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

  checkGameover(){
    if(this.state.gameover == true){
      return "gameoverModal"
    }
    else{
      return "gameInProgress"
    }
  }
  closeModal(){
    this.setState({
      gameover: false
    })
  }

  



  render() {
    return (
      <div id='wordleGame'>
        <div>
          <NavBar></NavBar>
        </div>
        <div id='wordleWords'>
          <div className='wordleRow'>
            {this.state.words[0].map((letters, i) =>(
              <Letter letter = {letters}
              board={this.state.words} 
              row = {this.state.row} 
              currentrow = {0}
              currentcolumn = {i}
              checkIfWordCorrect = {this.state.checkIfWordCorrect}
              correctWord = {this.state.correctWord}
              ></Letter>
              
            ))}
          </div>

          <div className='wordleRow'>
            {this.state.words[1].map((letters, i) =>(
              <Letter letter = {letters}
              row = {this.state.row} 
              currentrow = {1}
              currentcolumn = {i}
              checkIfWordCorrect = {this.state.checkIfWordCorrect}
              correctWord = {this.state.correctWord}
              ></Letter>
            ))}
          </div>

          <div className='wordleRow'>
            {this.state.words[2].map((letters, i) =>(
              <Letter letter = {letters}
              row = {this.state.row} 
              currentrow = {2}
              currentcolumn = {i}
              checkIfWordCorrect = {this.state.checkIfWordCorrect}
              correctWord = {this.state.correctWord}
              ></Letter>
            ))}
          </div>

          <div className='wordleRow'>
            {this.state.words[3].map((letters, i) =>(
              <Letter letter = {letters}
              row = {this.state.row} 
              currentrow = {3}
              currentcolumn = {i}
              checkIfWordCorrect = {this.state.checkIfWordCorrect}
              correctWord = {this.state.correctWord}
              ></Letter>
            ))}
          </div>

          <div className='wordleRow'>
            {this.state.words[4].map((letters, i) =>(
              <Letter letter = {letters}
              row = {this.state.row} 
              currentrow = {4}
              currentcolumn = {i}
              checkIfWordCorrect = {this.state.checkIfWordCorrect}
              correctWord = {this.state.correctWord}
              ></Letter>
            ))}
          </div>   
          <div className='wordleRow'>
            {this.state.words[5].map((letters, i) =>(
              <Letter letter = {letters}
              row = {this.state.row} 
              currentrow = {5}
              currentcolumn = {i}   
              checkIfWordCorrect = {this.state.checkIfWordCorrect}        
              correctWord = {this.state.correctWord}
              ></Letter>
            ))}
          </div>  
        </div>
        

        <Keyboard 
        board={this.state.words} 
        row = {this.state.row} 
        column = {this.state.column}
        incrementColumn = {this.incrementColumn}
        incrementRow = {this.incrementRow}
        updateBoard = {this.updateBoard}
        correctWord = {this.state.correctWord}
        checkWord = {this.checkWord}
        ></Keyboard>  

        <div id={this.checkGameover()}>
              <div id='gameover'>
                <button id='gameoverClose' onClick={e=> this.closeModal()}>X</button>
                <div id='gameoverMessage'>
                  Game over
                </div>
                
              </div>
        </div>     
        
      </div>
      
    )
  }
}
