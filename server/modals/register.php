<?php

    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");

    // $this->conn = new mysqli(
    //     $db_config["dbServername"],
    //     $db_config["dbUsername"],
    //     $db_config["dbPassword"],
    //     $db_config["dbName"]
    // );
    // $username = "rsjeon";
    // $password = "password1";
    $db = new DBConnection($db_config);
    // $this->conn;
    $db = $db -> getConnection();
    $userDataBase = new usersHelper($db);

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users(username, hashed_pw)";

    $result = mysql_query($sql);
    if ($result) {
        if (mysql_num_rows($result) > 0) {
            echo 'User already exists!';
        } else {
            $userDataBase->addUser($username, $password);
            echo 'Added a user';
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>