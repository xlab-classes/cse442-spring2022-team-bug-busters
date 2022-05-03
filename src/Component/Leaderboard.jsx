import Table from 'react-bootstrap/Table'
import React from "react";

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
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
    return (
        <div className='Leaderboard'>
            <div className='Ranking'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Rank #</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.entries(this.state.scores).map(([key, values]) => (
                        <tr>
                            <td>{Number(key) + 1}</td>
                            <td>{values.username}</td>
                            <td>{values.points}</td>
                        </tr>   
                    ))}
                    </tbody>
                </Table>
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
