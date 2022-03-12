<?php
class DBConnection{

    private $conn;

    public function __construct($db_config) 
    {
        $this->conn = new mysqli(
            $db_config["dbServername"],
            $db_config["dbUsername"],
            $db_config["dbPassword"],
            $db_config["dbName"]
        );

        if ($this->conn->connect_errno) {
            echo "Connection to DB failed: ". mysqli_connect_error() . '\n';
            exit();
        }
        echo "Connection to DB success" . '\n';

        $this->setupTables();
    }

    public function getConnection(){
        return $this->conn;
    }

    public function setupTables(){
        $sql = "CREATE TABLE IF NOT EXISTS users(
                        userid INT AUTO_INCREMENT,
                        username VARCHAR(20) NOT NULL UNIQUE,
                        hashed_pw VARCHAR(60) NOT NULL,
                        PRIMARY KEY(userid)
                    ); " ;
        
        if(mysqli_query($this->conn, $sql)){
            echo "Table users created sucessfully" . '\n';
        }else{
            echo "Error creating users table: " . mysqli_error($conn) . '\n';
        }

        $sql = "CREATE TABLE IF NOT EXISTS scores(
            userid INT AUTO_INCREMENT,
            username VARCHAR(20) NOT NULL UNIQUE,
            wins INT NOT NULL DEFAULT 0,
            loses INT NOT NULL DEFAULT 0,
            points INT NOT NULL DEFAULT 0, 
            PRIMARY KEY(userid)
        ); " ;

        if(mysqli_query($this->conn, $sql)){
            echo "Table scores created sucessfully" . '\n';
        }else{
            echo "Error creating scores table: " . mysqli_error($conn) . '\n';
        }
    }
}
?>
