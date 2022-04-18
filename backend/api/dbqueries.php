<?php
    include_once("dbConnect.php");
    include_once("config.php");

class usersHelper{

    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }


    //Given a username and an unhashed password, adds a new user to the database.
    public function addUser($username, $email, $password){
        //Check to see if user already exists!
        $stmt = $this->conn->prepare("SELECT COUNT(*) FROM users WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> bind_result($result);
        $numberOfUsers;
        while($stmt->fetch()){
            $numberOfUsers = $result;
        }
        if($numberOfUsers >= 1){
            return "This user already exists!";
        }
        $hashed_pw = hash('sha256', $password);
        $stmt = $this->conn->prepare("INSERT INTO users (username, email, hashed_pw) VALUES (?, ?, ?)");
        $stmt -> bind_param("sss", $username, $email, $hashed_pw);
        $stmt -> execute();
        $stmt = $this->conn->prepare("INSERT INTO scores (username) VALUES (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $defaultArray = serialize(array());
        $stmt = $this->conn->prepare("INSERT INTO friends (username, currentFriends, pendingRequests, receivedRequests) VALUES (?, ?, ?, ?)");
        $stmt -> bind_param("ssss", $username, $defaultArray, $defaultArray, $defaultArray);
        $stmt -> execute();
        $token = bin2hex(random_bytes(50));
        $currentTime = date("m-d-y h:i");
        $stmt = $this->conn->prepare("INSERT INTO passwordReset (username, email, token, timeCreated) VALUES (?, ?, ?, ?)");
        $stmt -> bind_param("ssss", $username, $email, $token, $currentTime);
        $stmt -> execute();
        return "Added the new user to all tables successfuly";
    }

    //Given a username and an unhashed password, removes a user from the database.
    public function removeUser($username, $password){
        $hashed_pw = hash('sha256', $password);
        $stmt = $this->conn->prepare("DELETE FROM users WHERE username = ? AND hashed_pw = ?");
        $stmt -> bind_param("ss", $username, $hashed_pw);
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
        $hashed_pw = hash('sha256', $password);
        $stmt = $this->conn->prepare("SELECT hashed_pw FROM users WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($storedPassword);
        $storedPassword = "NULL";
        while($stmt->fetch()){
            $storedPassword = $storedPassword;
        }
        return $storedPassword == $hashed_pw;
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

class friendsHelper{

    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }

    //Takes in a username and adds to the friends table.
    public function addUser($username){
        $defaultArray = serialize(array());
        $stmt = $this->conn->prepare("INSERT INTO friends (username, currentFriends, pendingRequests, receivedRequests) VALUES (?, ?, ?, ?)");
        $stmt -> bind_param("ssss", $username, $defaultArray, $defaultArray, $defaultArray);
        $stmt -> execute();
    }

    /*Takes in a username and removes them form the friends table.
    This should effectively remove all pending and current friends as well.*/
    public function removeUser($username){
        $stmt = $this->conn->prepare("DELETE FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
    }

    /*Takes in a username and friendID and adds them as a friend.
    This request will go both ways, showing the friends on both the $username and the $friendIDs list.
    $username == The user who has received a request.
    $friendUsername == The user who has a pending sent friend request.
    */
    public function acceptFriend($username, $friendUsername){
        //Update the received requests of $username
        $stmt = $this->conn->prepare("SELECT receivedRequests FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        $currentFriends = array_diff($currentFriends, array($friendUsername));
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET receivedRequests = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $username);
        $stmt -> execute();
        //Update the pendingRequests of $friendUsername.
        $stmt = $this->conn->prepare("SELECT pendingRequests FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $friendUsername);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        $currentFriends = array_diff($currentFriends, array($username));
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET pendingRequests = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $friendUsername);
        $stmt -> execute();
        //Update the current friends of $username
        $stmt = $this->conn->prepare("SELECT currentFriends FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        array_push($currentFriends, $friendUsername);
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET currentFriends = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $username);
        $stmt -> execute();
        //Update the current friends of $friendUsername
        $stmt = $this->conn->prepare("SELECT currentFriends FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $friendUsername);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        array_push($currentFriends, $username);
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET currentFriends = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $friendUsername);
        $stmt -> execute();
        return "Friend successfully added!";
    }

    public function sendRequest($username, $friendUsername){
        //Check to make sure the user trying to friend exists!
        $stmt = $this->conn->prepare("SELECT COUNT(*) FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $friendUsername);
        $stmt -> execute();
        $stmt -> bind_result($result);
        $numberOfUsers;
        while($stmt->fetch()){
            $numberOfUsers = $result;
        }
        if($numberOfUsers < 1){
            return "Error, the user you are trying to friend does not exist!";
        }
        //Check to make sure the users are currently not friends!
        if(in_array($friendUsername, $this->currentFriends($username))){
            return "Error, you are already friends with this user.";
        }

        //First update the user who sent the friend request to show that the request is pending.
        $stmt = $this->conn->prepare("SELECT pendingRequests FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        //If the user has already sent a friend request return an error.
        if(in_array($friendUsername, $currentFriends)){
            return "Error, you have already sent this user a friend request!";
        }
        array_push($currentFriends, $friendUsername);
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET pendingRequests = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $username);
        $stmt -> execute();

        //Second update the user who received the friend request to show that they have a pending request.
        $stmt = $this->conn->prepare("SELECT receivedRequests FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $friendUsername);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        array_push($currentFriends, $username);
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET receivedRequests = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $friendUsername);
        $stmt -> execute();
        return "Friend request sent sucessfully!";
    }

    /*Takes in a username and friendID and removes them as a friend.
    This will remove the friend from both users.*/
    public function removeFriend($username, $friendUsername){
        //First update the first user to remove their friend.
        $stmt = $this->conn->prepare("SELECT currentFriends FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        $currentFriends = array_diff($currentFriends, array($friendUsername));
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET currentFriends = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $username);
        $stmt -> execute();
        //Second update the second user to remove their friend.
        $stmt = $this->conn->prepare("SELECT currentFriends FROM friends WHERE username = ?");
        $stmt -> bind_param("s", $friendUsername);
        $stmt -> execute();
        $stmt -> bind_result($friends);
        $currentFriends;
        while($stmt->fetch()){
            $currentFriends = unserialize($friends);
        }
        $currentFriends = array_diff($currentFriends, array($username));
        $updatedFriends = serialize($currentFriends);
        $stmt = $this->conn->prepare("UPDATE friends SET currentFriends = ? WHERE username = ?");
        $stmt -> bind_param("ss", $updatedFriends, $friendUsername);
        $stmt -> execute();
        return "Friend removed successfully!";
    }

    //Takes in a username and returns a list of the friends of this user.
    public function currentFriends($username){
        $stmt = $this->conn->prepare("SELECT currentFriends FROM friends WHERE username = (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($friends);
        $results;
        while($stmt->fetch()){
            $results = unserialize($friends);
        }
        return $results;
    }

    //Takes in a username and returns a list of the current pending friends of a user.
    public function pendingRequests($username){
        $stmt = $this->conn->prepare("SELECT pendingRequests FROM friends WHERE username = (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($friends);
        $results;
        while($stmt->fetch()){
            $results = unserialize($friends);
        }
        return $results;
    }

    //Takes in a username and returns a list of the current requests sent by a user.
    public function receivedRequests($username){
        $stmt = $this->conn->prepare("SELECT receivedRequests FROM friends WHERE username = (?)");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($friends);
        $results;
        while($stmt->fetch()){
            $results = unserialize($friends);
        }
        return $results;
    }
}


class passwordResetHelper{

    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }

    //Takes in a username and email, generates a passwordReset token.
    public function generateResetToken($username, $email){
        $token = bin2hex(random_bytes(50));
        $currentTime = date("m-d-y H:i:s");
        $stmt = $this->conn->prepare("UPDATE passwordReset SET token = ?, timeCreated = ? WHERE username = ? AND email = ?");
        $stmt -> bind_param("ssss", $token, $currentTime, $username, $email);
        $stmt -> execute();
        return $token;
    }

    public function changePassword($username, $token, $password, $confirmPassword){
        //First check the time the token was created to make sure it didn't expire! (Token Expires after ~1 hour)
        if($password != $confirmPassword){
        return "The passwords given did not match.";
        }
        $stmt = $this->conn->prepare("SELECT token, timeCreated FROM passwordReset WHERE username = ?");
        $stmt -> bind_param("s", $username);
        $stmt -> execute();
        $stmt -> store_result();
        $stmt -> bind_result($storedToken, $timeCreated);
        while($stmt->fetch()){
            $storedToken = $storedToken;
            $timeCreated = $timeCreated;
        }
        //If tokens do not match, throw an error!
        if($storedToken != $token){
            return "Error, the token provided was incorrect.";
        }
        $hashed_pw = hash('sha256', $password);
        $stmt = $this->conn->prepare("UPDATE users SET hashed_pw = ? WHERE username = ?");
        $stmt -> bind_param("ss", $hashed_pw, $username);
        $stmt -> execute();
        return "Password has been successfully changed!";
    }

}
?>