import React from 'react'
import NavBar from './NavBar'
import "../WaitingRoom.css"

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
          <div>
            Play Bug Busters
          </div>
          <div>
            Players
          </div>
          <div className='players'>
            user1
            user2
            user3
            user4
          </div>
        </div>
        

      </div>
      
    )
    
  }
}
