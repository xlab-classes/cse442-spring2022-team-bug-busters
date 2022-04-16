import React from 'react'
import NavBar from './NavBar'
import "../WaitingRoom.css"
import {
  Link
} from 'react-router-dom';


export default class WaitingRoom extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className='WaitingRoom'>
        <div>
          <NavBar></NavBar>
        </div>
        <div className='waitingRoomContents'>
          <div className='gameName'>
            Play Bug Busters
          </div>
          <div className='player'>
            Players
          </div>
          <div className='user'>
            <div className='userrow'>
              user1
            </div>
            <div className='userrow'>
              user2
            </div>
            <div className='userrow'>
              user3
            </div>
            <div className='userrow'>
              user4
            </div>
            <div className='userrow'>
              user5
            </div>
            <div className='userrow'>
              user5
            </div>
          </div>
          <div className='start'>
            <Link to={"/CSE442-542/2022-Spring/cse-442h/room"}>
              <button className='startButton'>Start Game</button>
            </Link>
          </div>

          <div className='roomCode'>
            <div>
              {"Room Code: " + "room code"}
            </div>

            
          </div>
        </div>
        

      </div>
      
    )
    
  }
}
