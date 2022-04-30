
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
        user: []
    };
  }

  componentDidMount() {
      
      fetch(API + "register.php", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
      })
      .then(response => response.json())
      .then((res) => {
          console.log(res);
        //   this.setState({user: res});
      })
  }
  
//   usernameHandler = event => {
//       this.setState({
//           username: event.target.value
//       });
//   }

//   scoreHandler = event => {
//       this.setState({
//           scores: event.target.value
//       });
//   }

//   async componentDidMount() {    
//     fetch(API + "ranking.php")
//         .then(res => res.json())
//     //   .then(function(response) {
//     //       return [(response.username, response.scores)];
//         .then((result) => {
//             console.log(result.results);
//             document.location = "/CSE442-542/2022-Spring/cse-442h/"
//         },
//         error =>{
//             alert("uh oh!");
//         },
//     //   this.setState({username: res.json(), scores: res.json()})
//   )};

//-------------------------------------------------------
// renderUsers() {
//     const User = ({ name, email, key}) => (
//         <div>
//             <div>
//                 <p>{name}</p>
//                 <p>{email}</p>
//                 <p>{key}</p>
//             </div>
//         </div>
//     )
//     const userList = [];
//     for(let i = 0; i < this.state.usernames.length; i++) {
//         let name = `${this.state.usernames[i].username} ${this.state.scores[i].points}`;
//         let email = this.state.usernames[i].username.value;
//         let key = this.state.points[i].value;
//         userList.push(<User name={name} email={email} key={key}/>);
//     }

//     return userList;
// }
//-------------------------------------------------------

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
                </div>
                <ul>
                    {result.map(item => (
                        <li key={item}>
                            {item.values.username}
                        </li>
                    ))}
                </ul>
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
