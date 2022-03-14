<?php
    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");

class usersHelper{

    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }


    //Given a username and a hashed password, adds a new user to the database.
    public function addUser($username, $password){

        $stmt = $this->conn->prepare("INSERT INTO users (username, hashed_pw) VALUES (?, ?)");
        $stmt -> bind_param("ss", $username, $password);
        $stmt -> execute();

    }

    //Given a username and password, removes a user from the database.
    public function removeUser($username, $password){

        $stmt = $this->conn->prepare("DELETE FROM users WHERE username = ? AND hashed_pw = ?");
        $stmt -> bind_param("ss", $username, $password);
        $stmt -> execute();

    }

    //Gets a username by id of a user in the database. Returned as a string.
    public function getUserByID($userID){
        
        $stmt = $this->conn->prepare("SELECT username FROM users WHERE userid = ?");
        $stmt -> bind_param("i", $userID);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($result);
        while($stmt->fetch()){
            echo $result;
        }

    }

    //Gets a username by id of a user in the database.
    public function getIDbyusername($username){
        $stmt = $this->conn->prepare("SELECT id FROM users WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($result);
        while($stmt->fetch()){
            echo $result;
        }
    }

    //Return an array of all the usernames and ids of all users in the database.
    public function getAllUsers(){
        $names = [];

        $stmt = $this->conn->prepare("SELECT username FROM users");
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($result);
        while($stmt->fetch()){
            array_push($names, $result);
            echo $result."<br>";
        }

    }

    //Takes in a username and an unhashed password. Hashes the password and checks with the current password stored.
    public function checkPassword($username, $password){

    }

}

class scoresHelper{

    
    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }

    //Takes in a username and gives the user default scores.
    public function addUser($username){
        $stmt = $this->conn->prepare("INSERT INTO scores (username) VALUES (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
    }

    public function removeUser($username){

        $stmt = $this->conn->prepare("DELETE FROM scores WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();

    }

    //Takes in a username and returns a list of the username, number of wins, number of losses, and points.
    public function getUserStats($username){
        $stmt = $this->conn->prepare("SELECT wins, loses, points FROM scores WHERE username = (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($wins, $losses, $points);
        $results = array("Wins" => 0, "Losses" => 0, "Points" => 0);
        while($stmt->fetch()){
            $results["Wins"] = $wins;
            $results["Losses"] = $losses;
            $results["Points"] = $points;
        }
        return $results;
    }

    //Takes in a user, a negative or positive integer and updates the number of wins accordingly. (currentWins +/- numberOfWins)
    public function updateWins($username, $numberOfWins){
        $userStats = $this->getUserStats($username);
        $numberOfWins = $numberOfWins + $userStats["Wins"];
        $stmt = $this->conn->prepare("UPDATE scores SET wins = ? WHERE username = ?");
        $stmt -> bind_param("is", $numberOfWins, $username);
        $stmt -> execute();
    }

    //Takes in a user, a negative or positive integer and updates the number of losses accordingly. (currentLosses +/- numberOfLosses)
    public function updateLosses($username, $numberOfLosses){
        $userStats = $this->getUserStats($username);
        $numberOfLosses = $numberOfLosses + $userStats["Losses"];
        $stmt = $this->conn->prepare("UPDATE scores SET loses = ? WHERE username = ?");
        $stmt -> bind_param("is", $numberOfLosses, $username);
        $stmt -> execute();
    }

    //Takes in a user, a negative or positive integer and updates the number of points accordingly. (currentPoints +/- numberOfPoints)
    public function updatePoints($username, $numberOfPoints){
        $userStats = $this->getUserStats($username);
        $numberOfPoints = $numberOfPoints + $userStats["Points"];
        $stmt = $this->conn->prepare("UPDATE scores SET points = ? WHERE username = ?");
        $stmt -> bind_param("is", $numberOfPoints, $username);
        $stmt -> execute();
    }

    //Gets all the wins of all the users and sorts them from increasing to decreasing order in an array.
    public function getAllWins(){
        $stmt = $this->conn->prepare("SELECT username, wins FROM scores");
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($username, $wins);
        $results = array();
        while($stmt->fetch()){
            array_push($results, array("username" => $username, "wins" => $wins));
        }
        $columns = array_column($results, 'wins');
        array_multisort($columns, SORT_DESC, $results);
        return $results;    }

    //Gets all the loses of all the users and sorts them from increasing to decreasing order in an array.
    public function getAllLoses(){
        $stmt = $this->conn->prepare("SELECT username, loses FROM scores");
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($username, $loses);
        $results = array();
        while($stmt->fetch()){
            array_push($results, array("username" => $username, "loses" => $loses));
        }
        $columns = array_column($results, 'loses');
        array_multisort($columns, SORT_ASC, $results);
        return $results;
    }

    //Gets all the points of the users and sorts them from increasing to decreasing order in an array.
    public function getAllPoints(){
        $stmt = $this->conn->prepare("SELECT username, points FROM scores");
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($username, $points);
        $results = array();
        while($stmt->fetch()){
            array_push($results, array("username" => $username, "points" => $points));
        }
        $columns = array_column($results, 'points');
        array_multisort($columns, SORT_DESC, $results);
        return $results;
    }

}
?>