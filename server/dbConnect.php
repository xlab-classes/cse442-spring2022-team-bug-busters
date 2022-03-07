<?php
class DBConnection{

    private $conn;

    public function __construct($db_config) 
    {
        $this->mysqli = new mysqli(
            $db_config["dbServername"],
            $db_config["dbUsername"],
            $db_config["dbPassword"],
            $db_config["dbName"]
        );

        if ($this->mysqli->connect_errno) {
            echo "Connection to DB failed: ". mysqli_connect_error() . '\n';
            exit();
        }
        echo "Connection to DB success\n";
    }

    public function getConnection()
    {
        return $this->mysqli;
    }
}
?>
