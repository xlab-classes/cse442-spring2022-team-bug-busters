<?php
    $dbServername = "oceanus.cse.buffalo.edu";
    $dbUsername = "jiaqifen";
    $dbPassword = "50235120";
    $dbName = "cse442_2022_spring_team_h_db";

    // Create connection to our DB
    $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);
    echo "Attempting to connect to ". $dbServername . "<br>";

    // Check Connection
    if(!$conn){
        echo "Connection to DB failed: ". mysqli_connect_error();
        exit();
    }
    echo "Connection to DB success<br>";

    // how to create table
    $create_test_table = "CREATE TABLE IF NOT EXISTS `test`
    ( 
        `userid` INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(16) NOT NULL,
        score INT DEFAULT 0 NOT NULL,
        PRIMARY KEY(userid)
    );";

    if(mysqli_query($conn, $create_test_table)){
        echo "Table test created successfully";
    }else{
        echo "Error creating table: " . $conn->error;
    }
?>

