<?php
class DBConnection{

    private $conn;

    public function __construct($db_config) 
    {
        $this->conn = new mysqli(
            $db_config["dbServername"],
            $db_config["dbUsername"],
            $db_config["dbPassword"],
            $db_config["dbName"],
            $db_config["port"]
        );

        if ($this->conn->connect_errno) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $this->setupTables();
    }

    public function getConnection(){
        return $this->conn;
    }

    public function closeConnection(){
        $this->conn->close();
    }

    public function setupTables(){
        $sql = "CREATE TABLE IF NOT EXISTS users(
                        userid INT AUTO_INCREMENT,
                        username VARCHAR(20) NOT NULL UNIQUE,
                        email VARCHAR(320) NOT NULL UNIQUE,
                        hashed_pw TEXT NOT NULL,
                        profilePicture VARCHAR(25) DEFAULT '',
                        auth VARCHAR(120),
                        PRIMARY KEY(userid)
                    )AUTO_INCREMENT=1; " ;
        
        if(mysqli_query($this->conn, $sql)){
            //echo "Table users created sucessfully" . '<br>';
            $testing = "Hi";
        }else{
            //echo "Error creating users table: " . mysqli_error($conn) . '<br>';
            $testing = "Hi";
        }

        $sql = "CREATE TABLE IF NOT EXISTS scores(
            username VARCHAR(20) NOT NULL UNIQUE,
            wins INT NOT NULL DEFAULT 0,
            loses INT NOT NULL DEFAULT 0,
            points INT NOT NULL DEFAULT 0, 
            PRIMARY KEY(username)
        )" ;

        if(mysqli_query($this->conn, $sql)){
            //echo "Table scores created sucessfully" . '<br>';
            $testing = "Hi";
        }else{
            //echo "Error creating scores table: " . mysqli_error($conn) . '<br>';
            $testing = "Hi";
        }

        $sql = "CREATE TABLE IF NOT EXISTS friends(
            username VARCHAR(20) NOT NULL UNIQUE,
            currentFriends LONGTEXT NOT NULL,
            pendingRequests LONGTEXT NOT NULL,
            receivedRequests LONGTEXT NOT NULL, 
            PRIMARY KEY(username)
        )";

        if(mysqli_query($this->conn, $sql)){
            //echo "Table friends created sucessfully" . '<br>';
            $testing = "Hi";
        }else{
            //echo "Error creating friends table: " . mysqli_error($conn) . '<br>';
            $testing = "Hi";
        }

        $sql = "CREATE TABLE IF NOT EXISTS passwordReset(
            username VARCHAR(20) NOT NULL UNIQUE,
            email VARCHAR(320) NOT NULL UNIQUE,
            token TEXT NOT NULL,
            timeCreated TEXT NOT NULL,
            PRIMARY KEY(username)
        )";

        if(mysqli_query($this->conn, $sql)){
        //echo "Table passwordReset created sucessfully" . '<br>';
        $testing = "Hi";
        }else{
        //echo "Error creating users table: " . mysqli_error($conn) . '<br>';
        $testing = "Hi";
        }
        
    }
}
?>
