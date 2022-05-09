import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";
import {
  Link
} from 'react-router-dom';
import { Nav } from "react-bootstrap";

// Use the following line for deployment!
const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
//Use the following line for local testing!
//const API = "http://localhost:8080/modals/"

export default class PointsExample extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem('username'),
      points: 0,
      wins: 0,
      losses: 0
    };
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
          username: this.state.username,
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
        username: this.state.username,
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
      username: this.state.username,
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
      username: this.state.username,
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

  render(){
    return(
        <div>
        <NavBar>
        </NavBar>
        <h1>Points</h1>
        Username: {this.state.username}
        <br></br>
        Points: {this.state.points}
        <br></br>
        Wins: {this.state.wins}
        <br></br>
        Losses: {this.state.losses}
        <br></br>
        <button type="submit" className="btn btn-primary" onClick={() => {this.updatePoints(5)}}>
            Add 5 Points
        </button>
        <button type="submit" className="btn btn-secondary" onClick={() => {this.updatePoints(-5)}}>
            Remove 5 Points
        </button>
        <br></br>
        <button type="submit" className="btn btn-primary" onClick={() => {this.updateWins(1)}}>
            Add Win
        </button>
        <button type="submit" className="btn btn-secondary" onClick={() => {this.updateWins(-1)}}>
            Remove Win
        </button>
        <br></br>
        <button type="submit" className="btn btn-primary" onClick={() => {this.updateLosses(1)}}>
            Add Loss
        </button>
        <button type="submit" className="btn btn-secondary" onClick={() => {this.updateLosses(-1)}}>
            Remove Loss
        </button>
        </div>
    )
  }
}