import React from 'react';
import "../Profile.css"
import NavBar from "./NavBar"
export default function Profile() {

  const [state, setState] = React.useState({
    wins: 0,
    lossess: 0,
  })

  function handleChange(event) {
    const value = event.target.value;
    setState({
      //(updater, [callback])
      ...state, [event.target.name]: value
    })
    
  }

  return (

    <div>
      {/* <div id='navbar'>
        <div id="navbarLeftside">
          Home
        </div>
        <div id="navbarRightside">
          Username
        </div>
      </div> */}

      <NavBar>
        
      </NavBar>

      <div id='profile'>
        <img src={'/image/flower.png'} alt="profile" id='profilepicture'/>
        <div id = 'profileInformation'>
          <p>Player Name</p>
          <p>Rank #4104</p>
          <p name='wins' values={state.wins} onChange={handleChange}> Wins: {state.wins} | </p>
          <p name='losses' values={state.losses} onChange={handleChange}> Losses: {state.losses}</p>
        </div>

      </div>
      
    </div>


  )
}


