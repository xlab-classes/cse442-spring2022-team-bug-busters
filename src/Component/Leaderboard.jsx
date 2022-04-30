
import React from "react";
import NavBar from "./NavBar";
import {
  Link
} from 'react-router-dom';

const API = "http://localhost:8080/modals/"

export default class Leaderboard extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        scores: []
    };
  }

  componentDidMount() {
      fetch(API + "ranking.php", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
      })
      .then(response => response.json())
      .then((res) => {
          console.log(res);
          this.setState({scores: res});
        //   this.state.scores.map(item => console.log(item.username));
      })
  }

render() {
    const {result} = this.state;
    return (
        <div className='Leaderboard'>
            <div className='Ranking'>
                <div className='gameName'>
                    Ranking
                </div>
                <div className='player'>
                    Players
                    {Object.entries(this.state.scores).map(([key, values]) => (
                        // this.state.scores = {0: {username: "", scores: 2}}
                        // key = 0
                        // dict[key] = values
                        // this.state.scores[key] = values
                        // this.state.scores[key].username
                        <p>{values.username}: {values.points}</p>
                    )
                    )}
                    {/* {this.state.scores.map(score => (
                    score.username
                    ))} */}
                </div>
            </div>
        </div>
    )
}}
    // return <div>{this.renderUsers()}</div>;

    // const User = ({username, points}) => (
    //     <div>
    //         <p>{username}: {points}</p>
    //     </div>
    // )
    // return (
    //     <div className='Leaderboard'>
    //         <div>
    //             <User
    //                 username={User.username}
    //                 scores={User.scores}
    //             />
    //         </div>
    //         <div className='home'>
    //         <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
    //             <button className='HomeButton'>Home</button>
    //         </Link>
    //         </div>
    //     </div> 
    // )
    // }
