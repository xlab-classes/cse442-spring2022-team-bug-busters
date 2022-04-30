import React from "react";
import "../GameRoom.css"
import NavBar from "./NavBar";
import {
  Link
} from 'react-router-dom';
export default class GameRoom extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      players: [],
      userid: "",
      deck: []
    };
  }
  
  shuffleDeck(){
    let currDeck = [1, 1, 4, 5, 6, 7, 8]; //this.state.deck;
    currDeck = currDeck.sort(() => Math.random() - 0.5)
    console.log(currDeck);
  }

  render(){
    return(
        <div id="gameRoom">
        {this.shuffleDeck()}
          <div>
            <NavBar></NavBar>
          </div>
          
          <div id="gameRoomContent">
            <div id="gameRoomPlayers">
              <div className='eachPlayerRow'>
                user1(You)
              </div>
              <div className='eachPlayerRow'>
                user2
              </div>
            </div>

            <div id="gameRoomCards">
              <div id="gameRoomDeck">
                Card Deck
              </div>

              <div id="gameRoomHand">
                <div className="eachCardInHand">
                  Cards
                </div>
                <div className="eachCardInHand">
                  Cards
                </div>
                <div className="eachCardInHand">
                  Cards
                </div>
                <div className="eachCardInHand">
                  Cards
                </div>
                <div className="eachCardInHand">
                  Cards
                </div>
                <div className="eachCardInHand">
                  Cards
                </div>
                
                
              </div>
            </div>

            <div id="gameRoomEndGame">
              <div>
                <Link to={"/CSE442-542/2022-Spring/cse-442h/join"}>
                  <button id="finishGame">Finish Game</button>
                </Link>
              </div>

            </div>

          </div>

        </div>
    )
  }
}