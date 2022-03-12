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

}
?>