<?php

    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");

    $this->conn = new mysqli(
        $servername = $db_config["dbServername"],
        $username = $db_config["dbUsername"],
        $password = $db_config["dbPassword"],
    );

    $db = new DBConnection($db_config);
    // $this->conn;
    $db = $db -> getConnection();
    $userDataBase = new usersHelper($db);

    // Check connection
    if (!$db) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";


    $sql = "SELECT * FROM users($username, $hashed_pw)";

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