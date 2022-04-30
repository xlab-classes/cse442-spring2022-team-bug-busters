import React, { useState, useEffect } from "react";
import { AppIndicator } from "react-bootstrap-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/register.php"
const API = "http://localhost:8080/modals/"

export default function Leaderboard() {
  
    const [data, setData] = useState({
        username: "",
        scores: 0,
    })
    // function usernameHandler() {
    //     this.setState({
    //         username: event.target.value
    //     });
    // }
    // function scoreHandler() {
    //     this.setState({
    //         scores: event.target.value
    //     });
    //     }

    function renderPoints() {
        <div></div>
    };

    useEffect (async () => {
        // try{
        const fetchData = async() => {
            let response = await fetch(API + "ranking.php");
            let data = await response.json();
            let newData = data.map((e) => e);
            setData(newData.username);
            console.log(newData);
        };
        // } catch(error){
        //     console.error(error.message);
        // }
        // }, {})
        fetchData();
    }, []);
    if (data) {
        return (
        <div className='Leaderboard'>
            <div className='Ranking'>
                <div className='gameName'>
                    Ranking
                </div>
                <div className='player'>
                    Players
                </div>
                <div renderPoints={renderPoints}></div>
            </div>
        </div>);
    } else {
        return (
            <div className='test'>
                Hello!
            </div>)
            // <div className='Leaderboard'>
            //     <div className='Ranking'>
            //         <div className='gameName'>
            //             Ranking
            //         </div>
            //         <div className='player'>
            //             Players
            //         </div>
            //         <div className='scores'>
            //             {data.map((user => (
            //                 <li key={user.username}>
            //                     {user.username}:: {user.scores}
            //                 </li>
            //             )))}
            //             {/* {this.state.username.map(user => (
            //                 <div className='user' key={user.id}>
            //                     <p className='userscore'>{user} </p>
            //                 </div>
            //             ))}
            //             {this.state.scores.map(score => (
            //                 <div className='score' key={score.id}>: {score}</div>
            //             ))} */}
            //         </div>
                    
            //         <div className='home'>
            //             {/* <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
            //                 <button className='HomeButton'>Home</button>
            //             </Link> */}
            //         </div>
            //     </div>
            // </div> 
    }
        // console.log("You're in useEffect!");
        // fetch(API + "ranking.php", {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //     username: this.state.username,
        //     scores: this.state.scores
        //     })
        // }).then(res => console.log(res.json()))
        // .then(
        //     result => {
        //         document.location = "/CSE442-542/2022-Spring/cse-442h/"
        //         setData(result.data);
        //         console.log(result.data);
        //     },
        // error =>{
        //     alert("uh oh!");
        // }
        // )}, []);



    // return (
    //     <div className='Leaderboard'>
    //         <div className='Ranking'>
    //             <div className='gameName'>
    //                 Ranking
    //             </div>
    //             <div className='player'>
    //                 Players
    //             </div>
    //             <div className='scores'>
    //                 {data.map((user => (
    //                     <li key={user.username}>
    //                         {user.username}: {user.scores}
    //                     </li>
    //                 )))}
    //                 {/* {this.state.username.map(user => (
    //                     <div className='user' key={user.id}>
    //                         <p className='userscore'>{user} </p>
    //                     </div>
    //                 ))}
    //                 {this.state.scores.map(score => (
    //                     <div className='score' key={score.id}>: {score}</div>
    //                 ))} */}
    //             </div>
    //             <div className='home'>
    //                 {/* <Link to={"/CSE442-542/2022-Spring/cse-442h/"}>
    //                     <button className='HomeButton'>Home</button>
    //                 </Link> */}
    //             </div>
    //         </div>
    //     </div> 
    // )
}
