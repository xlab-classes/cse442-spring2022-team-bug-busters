import React, { Component } from 'react'
import NavBar from "./NavBar";
import "../Wordle.css"
import Keyboard from './Keyboard';
import Letter from './Letter';
import Timer from './Timer';
import {
  Link
} from 'react-router-dom';
// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
//Use the following line for local testing!
const API = "http://localhost:8080/modals/"
const wordleWord = ["RIGHT", "WRONG", "HAPPY", "HELLO", "EARTH", "PIZZA", "TOWEL", "STONE", "CREAM", "SHARP"]
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
      correctWord: wordleWord[Math.floor(Math.random() * wordleWord.length)],
      gameover: false,
      correct: false,
      time: false,
      points: 0,
      wins: 0,
      losses: 0
    };
    //bind it used in keyboard
    this.incrementColumn = this.incrementColumn.bind(this)
    this.incrementRow = this.incrementRow.bind(this)
  }

  componentDidMount(){
    this.getPoints()
  } 
  
  getPoints= error =>{
    fetch(API+"getStats.php", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: sessionStorage.getItem('username'),
        })
      })
      .then((res) => res.json())
      .then( (result) =>{
        //If the response is not okay, have the user input a new email address.
          this.setState({
            points: result.Points,
            wins: result.Wins,
            losses: result.Losses
          })
        }
      );
    };

  updatePoints= pointsToAdd =>{
    //make the api call to the authentication page
    fetch(API+"updatePoints.php", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: sessionStorage.getItem('username'),
        points: pointsToAdd,
      })
    })
    .then(res => {
      //If the response is not okay, have the user input a new email address.
        this.setState({
          points: this.state.points + pointsToAdd
        })
      }
    );
  };

    
  updateWins= winsToAdd =>{
    //make the api call to the authentication page
    fetch(API+"updateWins.php", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: sessionStorage.getItem('username'),
        wins: winsToAdd,
      })
    })
    .then(res => {
      //If the response is not okay, have the user input a new email address.
        this.setState({
          wins: this.state.wins + winsToAdd
        })
      }
    );
  };

    
    updateLosses= lossesToAdd =>{
      //make the api call to the authentication page
      fetch(API+"updateLosses.php", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: sessionStorage.getItem('username'),
          losses: lossesToAdd,
        })
      })
      .then(res => {
        //If the response is not okay, have the user input a new email address.
          this.setState({
            losses: this.state.losses + lossesToAdd
          })
        }
      );
    };

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
        gameover: true,
        correct: true
      })
      this.updateWins(1);
      this.updatePoints(1);
    
    }
    if(this.state.row == 5){
      this.setState({
        gameover: true
      })
      this.updateLosses(1);
      this.updatePoints(-1);
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
      if(this.state.correct == true){
        return(
          <div id="gameoverModal">
                <div id='gameover'>
                  <div id='gameoverMessage'>
                    <div>You guessed the word!</div>
                    <div>You gained one point</div>
                    <div>The word is {this.state.correctWord}</div>
                    <div>Points: {this.state.points}</div>
                    <div>Wins: {this.state.wins} </div>
                    <div>Losses: {this.state.losses}</div>
                    <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
                      <button>Okay</button>
                    </Link>
                  </div>
                  
                </div>
          </div> 
        )
      }
      else{
        return(
          <div id="gameoverModal">
                <div id='gameover'>
                  <div id='gameoverMessage'>
                    <div>You didnt guessed the word!</div>
                    <div>You lost one point</div>
                    <div>The word is {this.state.correctWord}</div>
                    <div>Points: {this.state.points}</div>
                    <div>Wins: {this.state.wins} </div>
                    <div>Losses: {this.state.losses}</div>
                    <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
                      <button>Okay</button>
                    </Link>
                  </div>
                  
                </div>
          </div> 
        )
      }
      
    }
    else if(this.state.time == true){
      return(
        <div id="gameoverModal">
              <div id='gameover'>
                <div id='gameoverMessage'>
                  <div>You ran out of time</div>
                  <div>You lost one point</div>
                  <div>The word is {this.state.correctWord}</div>
                  <div>Points: {this.state.points}</div>
                  <div>Wins: {this.state.wins} </div>
                  <div>Losses: {this.state.losses}</div>
                  <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
                      <button>Okay</button>
                  </Link>
                </div>
                
              </div>
        </div> 
      )}
    else{

      return(
        <div id="gameInProgress">
              <div id='gameover'>
                <div id='gameoverMessage'>
                <p>Points: {this.state.points}</p>
                <p>Wins: {this.state.wins} </p>
                <p>Losses: {this.state.losses}</p>
                </div>
           
              </div>
        </div> 
      )
    }
  }
  closeModal(){
    
    this.setState({
      gameover: false
    })
  }

  timesUp(){
    this.updateLosses(1);
    this.updatePoints(-1);
    this.setState({
      time: true
    })
  }
  



  render() {
    return (
      <div id='wordleGame'>
        <div>
          <NavBar></NavBar>
        </div>
        <div id='wordleWords'>
          <Timer timesUp = {e => this.timesUp()}>
              
          </Timer>
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

        {this.checkGameover()}
            
        
      </div>
      
    )
  }
}
