import React from "react";
import "../Profile.css";
import NavBar from "./NavBar";
const API =
  "http://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/";

export default class Profile extends React.Component {
  // 1. The component will start to get inserted into the DOM
  // 2. The initial render happens (with an empty array for 'points')
  // 3. Then componentDidMount() is called
  // 4. Once that request successfully finishes, setState() is called
  //    and the 'points' property will be updated with all of the data
  state = {
    error: null,
    isLoaded: false,
    points: [],
  };

  // Requests data from the server
  componentDidMount() {
    fetch(API + "points.php")
      .then((res) => res.json())
      .then(
        (result) => {
          // setState() - triggers a new render and each point
          this.setState({
            isLoaded: true,
            points: result.points,
          });
          console.log(this.state.points);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // Only runs when the component gets moounted
  // useEffect(() => {
  //   getPoints();
  // }, []);

  // function getPoints(){
  //   axios.get('http://localhost:8080/backend/modals/dbqueries.php').then(function(response) {
  //     console.log(response.data);
  //     setState(response.data);
  //   });
  // }

  render() {
    const { error, isLoaded, points } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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

          <NavBar></NavBar>

          <div className="profile">
            <img src={"/image/flower.png"} alt="profile" id="profilepicture" />
            {this.state.points.map((profileInformation) => (
              <div id="profileInformation" key={profileInformation.username}>
                <p>Player Name</p>
                <p>Rank #4104</p>
                {/* <UserInfo /> component is a fundamental component to display the user's avatar and name */}
                <p className="Wins">Wins: {profileInformation.wins} | </p>
                <p className="Losses">Losses: {profileInformation.losses}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
