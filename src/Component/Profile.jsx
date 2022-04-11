import React from 'react';
import "../Profile.css"
import NavBar from "./NavBar"
import axios from "axios";
export default function Profile() {

  const [state, setState] = React.useState([]);

  // Only runs when the component gets moounted
  useEffect(() => {
    getPoints();
  }, []);

  function getPoints(){
    axios.get('http://localhost:8080/backend/modals/dbqueries.php').then(function(response) {
      console.log(response.data);
      setState(response.data);
    });
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
          <p name='wins' value={state.wins} onChange={handleChange}> Wins: {state.wins} | </p>
          <p name='losses' value={state.losses} onChange={handleChange}> Losses: {state.losses}</p>
        </div>

      </div>
      
    </div>


  )
}


